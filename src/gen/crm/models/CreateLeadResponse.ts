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
 * @interface CreateLeadResponse
 */
export interface CreateLeadResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateLeadResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateLeadResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateLeadResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateLeadResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateLeadResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateLeadResponse
   */
  data: UnifiedId;
}

export function CreateLeadResponseFromJSON(json: any): CreateLeadResponse {
  return CreateLeadResponseFromJSONTyped(json, false);
}

export function CreateLeadResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateLeadResponse {
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

export function CreateLeadResponseToJSON(
  value?: CreateLeadResponse | null
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
