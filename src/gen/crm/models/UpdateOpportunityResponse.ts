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
 * @interface UpdateOpportunityResponse
 */
export interface UpdateOpportunityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateOpportunityResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateOpportunityResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateOpportunityResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateOpportunityResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateOpportunityResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateOpportunityResponse
   */
  data: UnifiedId;
}

export function UpdateOpportunityResponseFromJSON(
  json: any
): UpdateOpportunityResponse {
  return UpdateOpportunityResponseFromJSONTyped(json, false);
}

export function UpdateOpportunityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateOpportunityResponse {
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

export function UpdateOpportunityResponseToJSON(
  value?: UpdateOpportunityResponse | null
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
