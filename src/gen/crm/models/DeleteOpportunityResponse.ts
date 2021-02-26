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
 * @interface DeleteOpportunityResponse
 */
export interface DeleteOpportunityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteOpportunityResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteOpportunityResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteOpportunityResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteOpportunityResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteOpportunityResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteOpportunityResponse
   */
  data: UnifiedId;
}

export function DeleteOpportunityResponseFromJSON(
  json: any
): DeleteOpportunityResponse {
  return DeleteOpportunityResponseFromJSONTyped(json, false);
}

export function DeleteOpportunityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteOpportunityResponse {
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

export function DeleteOpportunityResponseToJSON(
  value?: DeleteOpportunityResponse | null
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
