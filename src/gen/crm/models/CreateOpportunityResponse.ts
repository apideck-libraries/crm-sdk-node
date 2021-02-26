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
 * @interface CreateOpportunityResponse
 */
export interface CreateOpportunityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateOpportunityResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateOpportunityResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateOpportunityResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateOpportunityResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateOpportunityResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateOpportunityResponse
   */
  data: UnifiedId;
}

export function CreateOpportunityResponseFromJSON(
  json: any
): CreateOpportunityResponse {
  return CreateOpportunityResponseFromJSONTyped(json, false);
}

export function CreateOpportunityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateOpportunityResponse {
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

export function CreateOpportunityResponseToJSON(
  value?: CreateOpportunityResponse | null
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
