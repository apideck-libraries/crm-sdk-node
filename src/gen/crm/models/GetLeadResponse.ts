/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import { Lead, LeadFromJSON, LeadFromJSONTyped, LeadToJSON } from './';

/**
 *
 * @export
 * @interface GetLeadResponse
 */
export interface GetLeadResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetLeadResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetLeadResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetLeadResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetLeadResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof GetLeadResponse
   */
  operation: string;
  /**
   *
   * @type {Lead}
   * @memberof GetLeadResponse
   */
  data: Lead;
}

export function GetLeadResponseFromJSON(json: any): GetLeadResponse {
  return GetLeadResponseFromJSONTyped(json, false);
}

export function GetLeadResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetLeadResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: LeadFromJSON(json['data']),
  };
}

export function GetLeadResponseToJSON(value?: GetLeadResponse | null): any {
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
    data: LeadToJSON(value.data),
  };
}
