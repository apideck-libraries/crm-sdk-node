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
 * @interface UpdateCompanyResponse
 */
export interface UpdateCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateCompanyResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateCompanyResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateCompanyResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateCompanyResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateCompanyResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateCompanyResponse
   */
  data: UnifiedId;
}

export function UpdateCompanyResponseFromJSON(
  json: any
): UpdateCompanyResponse {
  return UpdateCompanyResponseFromJSONTyped(json, false);
}

export function UpdateCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateCompanyResponse {
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

export function UpdateCompanyResponseToJSON(
  value?: UpdateCompanyResponse | null
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
