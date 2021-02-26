/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  UnifiedId,
  UnifiedIdFromJSON,
  UnifiedIdFromJSONTyped,
  UnifiedIdToJSON,
} from './';

/**
 *
 * @export
 * @interface UpdateContactResponse
 */
export interface UpdateContactResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateContactResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateContactResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateContactResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateContactResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateContactResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateContactResponse
   */
  data: UnifiedId;
}

export function UpdateContactResponseFromJSON(
  json: any
): UpdateContactResponse {
  return UpdateContactResponseFromJSONTyped(json, false);
}

export function UpdateContactResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateContactResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data']),
  };
}

export function UpdateContactResponseToJSON(
  value?: UpdateContactResponse | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data),
  };
}
