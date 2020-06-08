export interface ApiConfig {
  paths: { [K: string]: PathGroup };
  components: Components;
  definitions: any;
  [K: string]: any;
}

export interface PathGroup {
  post?: Path;
  get?: Path;
  put?: Path;
  delete?: Path;
}

export interface Path {
  parameters: (Parameter & OpenAPI2SchemaObject)[];
  description: string;
  responses: ResponseGroup;
  requestBody: any; // TODO:
}

export interface Parameter {
  name: string;
  type: OpenAPI2Type;
  in: 'path' | 'header' | 'query' | 'body' | 'formData';
  description: string;
  required: boolean;
  schema: OpenAPI2SchemaObject;
  items: Parameter;
}

// @deprecated
export interface ParameterSchema {
  type: OpenAPI2Type;
  format: '';
  items?: ParameterSchema;
  $ref: string;
  enum: string[];
  default: any;
}

export interface ResponseGroup {
  200: Response;
}

export interface Response {
  content: string;
  schema: OpenAPI2SchemaObject;
  description: string;
  responseSchema: OpenAPI2SchemaObject;
}

export interface Components {
  schema: ComponentSchemaMap;
}

export interface ComponentSchemaMap {
  [K: string]: ComponentSchema;
}

export interface ComponentSchema {
  type: OpenAPI2Type;
  required: string[];
  properties: { [K: string]: OpenAPI2SchemaObject };
}

export type OpenAPI2Type =
  | 'array'
  | 'binary'
  | 'boolean'
  | 'byte'
  | 'date'
  | 'dateTime'
  | 'double'
  | 'float'
  | 'integer'
  | 'long'
  | 'number'
  | 'object'
  | 'password'
  | 'string';

export type OpenAPI2Reference = { $ref: string };

export interface OpenAPI2SchemaObject {
  additionalProperties?: OpenAPI2SchemaObject | OpenAPI2Reference | boolean;
  allOf?: OpenAPI2SchemaObject[];
  description?: string;
  enum?: string[];
  format?: string;
  items?: OpenAPI2SchemaObject | OpenAPI2Reference;
  oneOf?: (OpenAPI2SchemaObject | OpenAPI2Reference)[];
  properties?: { [index: string]: OpenAPI2SchemaObject | OpenAPI2Reference };
  required?: string[];
  title?: string;
  type?: OpenAPI2Type; // allow this to be optional to cover cases when this is missing
  [key: string]: any; // allow arbitrary x-something properties
}
