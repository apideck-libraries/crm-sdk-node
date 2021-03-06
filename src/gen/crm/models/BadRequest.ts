/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface BadRequest
 */
export interface BadRequest {
  /**
   * HTTP status code
   * @type {number}
   * @memberof BadRequest
   */
  statusCode?: number;
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof BadRequest
   */
  error?: string;
  /**
   * The type of error returned
   * @type {string}
   * @memberof BadRequest
   */
  typeName?: string;
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof BadRequest
   */
  message?: string;
  /**
   * Contains parameter or domain specific information related to the error and why it occured.
   * @type {string | object}
   * @memberof BadRequest
   */
  detail?: string | object;
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof BadRequest
   */
  ref?: string;
}

export function BadRequestFromJSON(json: any): BadRequest {
  return BadRequestFromJSONTyped(json, false);
}

export function BadRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BadRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    typeName: !exists(json, 'typeName') ? undefined : json['typeName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail')
      ? undefined
      : <string | object>json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref'],
  };
}

export function BadRequestToJSON(value?: BadRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    status_code: value.statusCode,
    error: value.error,
    typeName: value.typeName,
    message: value.message,
    detail: <string | object>value.detail,
    ref: value.ref,
  };
}
