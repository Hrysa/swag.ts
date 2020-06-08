import fetch from 'node-fetch';

// eslint-disable-next-line
export function $get<T>(url: string, data?: any) {}

export function $post<T>(url: string, data?: any) {
  const uri =
    data.query && Object.keys(data.query).length
      ? '?' +
        Object.keys(data.query)
          .map((v) => `${v}=${data.query[v]}`)
          .join('&')
      : '';
  return fetch('http://localhost:8080' + url + uri, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(data.body),
  }).then((res) => res.json());
}

// eslint-disable-next-line
export function $put<T>(url: string, data?: any) {}

// eslint-disable-next-line
export function $delete<T>(url: string, data?: any) {}
