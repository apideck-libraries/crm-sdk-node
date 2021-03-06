/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  Company,
  CompanyFromJSON,
  CompanyFromJSONTyped,
  CompanyToJSON,
} from './';

/**
 *
 * @export
 * @interface GetCompanyResponse
 */
export interface GetCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCompanyResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCompanyResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCompanyResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCompanyResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCompanyResponse
   */
  operation: string;
  /**
   *
   * @type {Company}
   * @memberof GetCompanyResponse
   */
  data: Company;
}

export function GetCompanyResponseFromJSON(json: any): GetCompanyResponse {
  return GetCompanyResponseFromJSONTyped(json, false);
}

export function GetCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCompanyResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: CompanyFromJSON(json['data']),
  };
}

export function GetCompanyResponseToJSON(
  value?: GetCompanyResponse | null
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
    data: CompanyToJSON(value.data),
  };
}
