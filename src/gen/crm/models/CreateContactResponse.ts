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
 * @interface CreateContactResponse
 */
export interface CreateContactResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateContactResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateContactResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateContactResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateContactResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateContactResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateContactResponse
   */
  data: UnifiedId;
}

export function CreateContactResponseFromJSON(
  json: any
): CreateContactResponse {
  return CreateContactResponseFromJSONTyped(json, false);
}

export function CreateContactResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateContactResponse {
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

export function CreateContactResponseToJSON(
  value?: CreateContactResponse | null
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
