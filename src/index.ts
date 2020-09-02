#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import prettier from 'prettier';
import fetch from 'node-fetch';
import {
  ApiConfig,
  PathGroup,
  OpenAPI2Type,
  OpenAPI2SchemaObject,
} from './swagger';

const types: OpenAPI2Type[] = [
  'array',
  'binary',
  'boolean',
  'byte',
  'date',
  'dateTime',
  'double',
  'float',
  'integer',
  'long',
  'number',
  'object',
  'password',
  'string',
];

const interfaces: any[] = [];

const firstUp = (v: string) => v.substring(0, 1).toUpperCase() + v.substring(1);

const path2nodes = (path: string) =>
  path
    .split('/')
    .filter(Boolean)
    .map(firstUp)
    .map((v) => v.replace('{', '$').replace(/\}|-/g, ''));

const parseComment = (def: any) => {
  const summary: string = def?.summary || '';
  const description: string = def?.description || '';
  const lines = summary.split('\n').concat(description.split('\n'));
  return lines.length ? `\n/**\n * ${lines.join('\n * ')}\n*/\n` : '';
};

function parseStore(store: any): any {
  return Object.keys(store)
    .map((v) => {
      const name = firstUp(v);

      if (typeof store[v] !== 'object') {
        let req = [],
          innerReq = [],
          desc = '',
          res = '';
        const opt = store[v]();

        if (opt.req) {
          const { query, body } = opt.req;
          const pathNodes = path2nodes(opt.path);

          // path params
          const pathParams = pathNodes.filter((v) => v[0] === '$');
          if (pathParams.length > 0) {
            const fields = pathParams.map((v) => v.slice(1)).join(',');
            const types = pathParams.map((v) => v.slice(1) + ':any').join(',');
            req.push(`{${fields}} : {${types}}`);
          }

          if (query) {
            const name = pathNodes.join('') + firstUp(opt.method);
            interfaces.push(`/** query */\n export interface ${name} ${query}`);
            req.push(`query:${name}`);
            innerReq.push('query');
          }

          if (body) {
            req.push(`body:${body}`);
            innerReq.push('body');
          }
        }
        req.push('options?: any');
        innerReq.push('options');

        if (opt.desc) desc = opt.desc;
        if (opt.res) res = `:Promise<${opt.res}>`;

        const params = req.join();
        const iParams = innerReq.join();
        opt.path = opt.path.replace(/\{/, '${');

        return `${desc}export const ${name} = (${params}) ${res} => { 
          return $${opt.method}(\`${opt.path}\`, {${iParams}}) as any; 
        }`;
      }

      return `export namespace ${name} {\n${parseStore(store[v])}\n}\n`;
    })
    .join('\n');
}

/**
 * ignore parameters in header, formData
 * path variables will handled in `parseStore()`
 */
function parseParameters(obj: OpenAPI2SchemaObject[]) {
  if (!obj) return;
  const res = { query: {} as any, body: '' as any };

  obj.forEach((o) => {
    if (o.in === 'query') {
      const { name, val } = parseParameter(o);
      res.query[name] = val;
    }

    if (o.in === 'body') {
      res.body = parseParameter(o.schema).val;
    }
  });
  const query = Object.keys(res.query)
    .map((v) => `${v}:${res.query[v]}`)
    .join(',');
  res.query = query ? '{' + query + '}' : '';

  return res;
}

function parseParameter(obj: OpenAPI2SchemaObject) {
  const res = { name: '', val: {} as any };
  res.name = obj.name || res.name;
  res.val = typeTranslate(obj);
  return res;
}

function typeTranslate(p: OpenAPI2SchemaObject) {
  let type = p.type;
  if (p.$ref) return modelNameTranslate(p.$ref);

  return types.includes((type || '').toLowerCase() as any)
    ? type!.toLowerCase()
    : `any /** type undefined */`;
}

function modelNameTranslate(name: string) {
  return name
    .replace('#/definitions/', '')
    .replace(/«/g, '$')
    .replace(/»/g, '')
    .replace(/\[/g, '$')
    .replace(',', '_')
    .replace(/]/g, '');
}

(async () => {
  const sourceUrl = process.argv[2];
  let buff = '';
  if (sourceUrl.includes('http://') || sourceUrl.includes('https://')) {
    buff = await fetch(sourceUrl).then((r) => r.text());
  } else {
    buff = readFileSync(sourceUrl).toString();
  }

  const output = process.argv[3] || 'output';

  const source: ApiConfig = JSON.parse(buff);
  const paths = Object.keys(source.paths);

  const store: any = {};

  paths.forEach((path) => {
    const nodes = path2nodes(path);
    const fn = nodes.pop()!;
    const fnParent = nodes.reduce((p, c) => (p[c] = p[c] || {}), store);
    const fnDef = source.paths[path];

    fnParent[fn] = fnParent[fn] || {};

    Object.keys(fnDef).forEach(
      (method) =>
        (fnParent[fn][method] = () => {
          const def = fnDef[method as keyof PathGroup];
          const resDef = def?.responses[200];
          let res = 'any';
          if (resDef) {
            if (resDef.schema) {
              if (resDef.schema.$ref) {
                res = modelNameTranslate(resDef.schema.$ref);
              } else if (resDef.schema.type) {
                res = resDef.schema.type;
                if (resDef.schema.type === 'array') {
                  let innerType = 'any';
                  if (resDef.schema.items?.$ref) {
                    innerType = modelNameTranslate(resDef.schema.items?.$ref);
                  }
                  res = `Array<${innerType}>`;
                }
              }
            }
          }

          return {
            desc: parseComment(def),
            req: parseParameters(def?.parameters!),
            res,
            path,
            method,
          };
        }),
    );
  });

  const parsedStore = parseStore(store);

  interfaces.push(
    ...Object.keys(source.definitions).map((v) => {
      const def = source.definitions[v];
      const required = def.required ? def.required : [];
      const pros = def.properties
        ? Object.keys(def.properties)
            .map(
              (v) =>
                `${parseComment(def.properties[v])}${v}${
                  required.includes(v) ? '' : '?'
                }: ${(() => {
                  if (def.properties[v].type !== 'array') {
                    if (
                      def.properties[v].type === 'string' &&
                      def.properties[v].enum
                    ) {
                      return def.properties[v].enum
                        .map((o: any) => `'${o}'`)
                        .join('|');
                    }
                    return (
                      def.properties[v].type ||
                      modelNameTranslate(def.properties[v].$ref) ||
                      'any /** unknown */'
                    );
                  } else {
                    return def.properties[v].items &&
                      def.properties[v].items.$ref
                      ? `Array<${modelNameTranslate(
                          def.properties[v].items.$ref,
                        )}>`
                      : 'Array<any /** unknown */>';
                  }
                })()}`,
            )
            .join(';')
        : '';
      const comment = parseComment(def);

      return `${comment}export interface ${modelNameTranslate(v)} {${pros}}`;
    }),
  );

  // Prettify output
  let prettierOptions: prettier.Options = { parser: 'typescript' };
  try {
    const userOptions = prettier.resolveConfig.sync(
      require('path').resolve(process.cwd(), '.prettierrc'),
    );
    prettierOptions = {
      ...prettierOptions,
      ...userOptions,
    };
  } catch (err) {
    console.error(`❌ ${err}`);
  }

  if (!existsSync(output)) {
    mkdirSync(output);
  }

  writeFileSync(
    resolve(output, 'api.ts'),
    prettier.format(
      `/* eslint-disable */
import {$get, $post, $delete, $put} from './adapter';

type array = Array<any>;
type binary = any;
type byte = number;
type date = Date;
type dateTime = Date;
type double = number;
type float = number;
type integer = number;
type long = number;
type password = string;

` +
        parsedStore +
        '\n' +
        interfaces.join('\n'),
      prettierOptions,
    ),
  );

  const adapter = resolve(output, 'adapter.ts');
  if (!existsSync(adapter)) {
    writeFileSync(
      adapter,
      `// eslint-disable-next-line
export function $get<T>(url: string, data?: any) {}

// eslint-disable-next-line
export function $post<T>(url: string, data?: any) {}

// eslint-disable-next-line
export function $put<T>(url: string, data?: any) {}

// eslint-disable-next-line
export function $delete<T>(url: string, data?: any) {}
`,
    );
  }
})();
