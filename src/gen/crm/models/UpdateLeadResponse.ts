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
 * @interface UpdateLeadResponse
 */
export interface UpdateLeadResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateLeadResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateLeadResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateLeadResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateLeadResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateLeadResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateLeadResponse
   */
  data: UnifiedId;
}

export function UpdateLeadResponseFromJSON(json: any): UpdateLeadResponse {
  return UpdateLeadResponseFromJSONTyped(json, false);
}

export function UpdateLeadResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateLeadResponse {
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

export function UpdateLeadResponseToJSON(
  value?: UpdateLeadResponse | null
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
