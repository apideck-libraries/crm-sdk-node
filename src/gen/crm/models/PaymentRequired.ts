/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface PaymentRequired
 */
export interface PaymentRequired {
  /**
   * HTTP status code
   * @type {number}
   * @memberof PaymentRequired
   */
  statusCode?: number;
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof PaymentRequired
   */
  error?: string;
  /**
   * The type of error returned
   * @type {string}
   * @memberof PaymentRequired
   */
  typeName?: string;
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof PaymentRequired
   */
  message?: string;
  /**
   * Contains parameter or domain specific information related to the error and why it occured.
   * @type {string}
   * @memberof PaymentRequired
   */
  detail?: string;
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof PaymentRequired
   */
  ref?: string;
}

export function PaymentRequiredFromJSON(json: any): PaymentRequired {
  return PaymentRequiredFromJSONTyped(json, false);
}

export function PaymentRequiredFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaymentRequired {
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

export function PaymentRequiredToJSON(value?: PaymentRequired | null): any {
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
