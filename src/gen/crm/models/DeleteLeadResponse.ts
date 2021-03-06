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
 * @interface DeleteLeadResponse
 */
export interface DeleteLeadResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteLeadResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteLeadResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteLeadResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteLeadResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteLeadResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteLeadResponse
   */
  data: UnifiedId;
}

export function DeleteLeadResponseFromJSON(json: any): DeleteLeadResponse {
  return DeleteLeadResponseFromJSONTyped(json, false);
}

export function DeleteLeadResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteLeadResponse {
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

export function DeleteLeadResponseToJSON(
  value?: DeleteLeadResponse | null
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
