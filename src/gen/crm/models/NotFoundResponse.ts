/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface NotFoundResponse
 */
export interface NotFoundResponse {
  /**
   * HTTP status code
   * @type {number}
   * @memberof NotFoundResponse
   */
  statusCode?: number;
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof NotFoundResponse
   */
  error?: string;
  /**
   * The type of error returned
   * @type {string}
   * @memberof NotFoundResponse
   */
  typeName?: string;
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof NotFoundResponse
   */
  message?: string;
  /**
   * Contains parameter or domain specific information related to the error and why it occured.
   * @type {string}
   * @memberof NotFoundResponse
   */
  detail?: string;
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof NotFoundResponse
   */
  ref?: string;
}

export function NotFoundResponseFromJSON(json: any): NotFoundResponse {
  return NotFoundResponseFromJSONTyped(json, false);
}

export function NotFoundResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): NotFoundResponse {
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

export function NotFoundResponseToJSON(value?: NotFoundResponse | null): any {
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
