/* tslint:disable */
/* eslint-disable */

import fetch from 'node-fetch';

export const BASE_PATH = 'https://unify.apideck.com'.replace(/\/+$/, '');

const isBlob = (value: any) =>
  typeof Blob !== 'undefined' && value instanceof Blob;

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {
  private middleware: Middleware[];

  constructor(protected configuration: Configuration) {
    this.middleware = [];
  }

  withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
    const next = this.clone<T>();
    next.middleware = next.middleware.concat(...middlewares);
    return next;
  }

  withPreMiddleware<T extends BaseAPI>(
    this: T,
    ...preMiddlewares: Array<Middleware['pre']>
  ) {
    const middlewares = preMiddlewares.map((pre) => ({ pre }));
    return this.withMiddleware<T>(...middlewares);
  }

  withPostMiddleware<T extends BaseAPI>(
    this: T,
    ...postMiddlewares: Array<Middleware['post']>
  ) {
    const middlewares = postMiddlewares.map((post) => ({ post }));
    return this.withMiddleware<T>(...middlewares);
  }

  protected async request(context: RequestOpts): Promise<Response> {
    const { url, init } = this.createFetchParams(context);
    const response = await this.fetchApi(url, init);
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    throw response;
  }

  private createFetchParams(context: RequestOpts) {
    let url = this.configuration.basePath + context.path;

    const body =
      (typeof FormData !== 'undefined' && context.body instanceof FormData) ||
      context.body instanceof URLSearchParams ||
      isBlob(context.body)
        ? context.body
        : JSON.stringify(context.body);

    const headers = Object.assign(
      {},
      this.configuration.headers,
      context.headers
    );
    const init = {
      method: context.method,
      headers: headers,
      body,
    };
    return { url, init };
  }

  private fetchApi = async (url: string, init: RequestInit) => {
    let fetchParams = { url, init };
    for (const middleware of this.middleware) {
      if (middleware.pre) {
        fetchParams =
          (await middleware.pre({
            fetch: this.fetchApi,
            ...fetchParams,
          })) || fetchParams;
      }
    }
    let response = await this.configuration.fetchApi(
      fetchParams.url,
      fetchParams.init
    );
    for (const middleware of this.middleware) {
      if (middleware.post) {
        response =
          (await middleware.post({
            fetch: this.fetchApi,
            url,
            init,
            response: response.clone(),
          })) || response;
      }
    }
    return response;
  };

  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  private clone<T extends BaseAPI>(this: T): T {
    const constructor = this.constructor as any;
    const next = new constructor(this.configuration);
    next.middleware = this.middleware.slice();
    return next;
  }
}

export class RequiredError extends Error {
  name: 'RequiredError' = 'RequiredError';
  constructor(public field: string, msg?: string) {
    super(msg);
  }
}

export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
};

export type FetchAPI = WindowOrWorkerGlobalScope['fetch'];

export interface ConfigurationParameters {
  basePath?: string; // override base path
  middleware?: Middleware[]; // middleware to apply before/after fetch requests
  apiKey?: string; // parameter for apiKey security
  applicationId: string; //applicationId we want to use on every request
  consumerId?: string; //consumerId we want to use on every request
  headers?: HTTPHeaders; //header params we want to use on every request
}

export class Configuration {
  constructor(private configuration: ConfigurationParameters) {}

  basePath: string =
    this.configuration.basePath != null
      ? this.configuration.basePath
      : BASE_PATH;
  fetchApi: FetchAPI = fetch as any;
  middleware: Middleware[] = this.configuration.middleware || [];
  applicationId: string = this.configuration.applicationId;
  consumerId: string | undefined = this.configuration.consumerId;
  headers: HTTPHeaders | undefined = this.configuration.headers;
  apiKey: string | undefined = this.configuration.apiKey || undefined;
}

export type Json = any;
export type HTTPMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = {
  [key: string]:
    | string
    | number
    | null
    | boolean
    | Array<string | number | null | boolean>
    | HTTPQuery;
};
export type HTTPBody = Json | FormData | URLSearchParams;
export type ModelPropertyNaming =
  | 'camelCase'
  | 'snake_case'
  | 'PascalCase'
  | 'original';

export interface FetchParams {
  url: string;
  init: RequestInit;
}

export interface RequestOpts {
  path: string;
  method: HTTPMethod;
  headers: HTTPHeaders;
  query?: HTTPQuery;
  body?: HTTPBody;
}

export function exists(json: any, key: string) {
  const value = json[key];
  return value !== null && value !== undefined;
}

export function querystring(params: HTTPQuery, prefix: string = ''): string {
  return Object.keys(params)
    .map((key) => {
      const fullKey = prefix + (prefix.length ? `[${key}]` : key);
      const value = params[key];
      if (value instanceof Array) {
        const multiValue = value
          .map((singleValue) => encodeURIComponent(String(singleValue)))
          .join(`&${encodeURIComponent(fullKey)}=`);
        return `${encodeURIComponent(fullKey)}=${multiValue}`;
      }
      if (value instanceof Date) {
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(
          value.toISOString()
        )}`;
      }
      if (value instanceof Object) {
        return querystring(value as HTTPQuery, fullKey);
      }
      return `${encodeURIComponent(fullKey)}=${encodeURIComponent(
        String(value)
      )}`;
    })
    .filter((part) => part.length > 0)
    .join('&');
}

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}

export function canConsumeForm(consumes: Consume[]): boolean {
  for (const consume of consumes) {
    if ('multipart/form-data' === consume.contentType) {
      return true;
    }
  }
  return false;
}

export interface Consume {
  contentType: string;
}

export interface RequestContext {
  fetch: FetchAPI;
  url: string;
  init: RequestInit;
}

export interface ResponseContext {
  fetch: FetchAPI;
  url: string;
  init: RequestInit;
  response: Response;
}

export interface Middleware {
  pre?(context: RequestContext): Promise<FetchParams | void>;
  post?(context: ResponseContext): Promise<Response | void>;
}

export interface ApiResponse<T> {
  raw: Response;
  value(): Promise<T>;
}

export interface ResponseTransformer<T> {
  (json: any): T;
}

export class JSONApiResponse<T> {
  constructor(
    public raw: Response,
    private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue
  ) {}

  async value(): Promise<T> {
    return this.transformer(await this.raw.json());
  }
}

export class VoidApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<void> {
    return undefined;
  }
}

export class BlobApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<Blob> {
    return await this.raw.blob();
  }
}

export class TextApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<string> {
    return await this.raw.text();
  }
}
