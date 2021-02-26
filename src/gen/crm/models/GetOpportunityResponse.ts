/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  Opportunity,
  OpportunityFromJSON,
  OpportunityFromJSONTyped,
  OpportunityToJSON,
} from './';

/**
 *
 * @export
 * @interface GetOpportunityResponse
 */
export interface GetOpportunityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetOpportunityResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetOpportunityResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetOpportunityResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetOpportunityResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof GetOpportunityResponse
   */
  operation: string;
  /**
   *
   * @type {Opportunity}
   * @memberof GetOpportunityResponse
   */
  data: Opportunity;
}

export function GetOpportunityResponseFromJSON(
  json: any
): GetOpportunityResponse {
  return GetOpportunityResponseFromJSONTyped(json, false);
}

export function GetOpportunityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetOpportunityResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: OpportunityFromJSON(json['data']),
  };
}

export function GetOpportunityResponseToJSON(
  value?: GetOpportunityResponse | null
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
    data: OpportunityToJSON(value.data),
  };
}
