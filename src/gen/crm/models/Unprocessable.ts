/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface Unprocessable
 */
export interface Unprocessable {
  /**
   * HTTP status code
   * @type {number}
   * @memberof Unprocessable
   */
  statusCode?: number;
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof Unprocessable
   */
  error?: string;
  /**
   * The type of error returned
   * @type {string}
   * @memberof Unprocessable
   */
  typeName?: string;
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof Unprocessable
   */
  message?: string;
  /**
   * Contains parameter or domain specific information related to the error and why it occured.
   * @type {string}
   * @memberof Unprocessable
   */
  detail?: string;
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof Unprocessable
   */
  ref?: string;
}

export function UnprocessableFromJSON(json: any): Unprocessable {
  return UnprocessableFromJSONTyped(json, false);
}

export function UnprocessableFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Unprocessable {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    typeName: !exists(json, 'typeName') ? undefined : json['typeName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref'],
  };
}

export function UnprocessableToJSON(value?: Unprocessable | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    status_code: value.statusCode,
    error: value.error,
    typeName: value.typeName,
    message: value.message,
    detail: value.detail,
    ref: value.ref,
  };
}
