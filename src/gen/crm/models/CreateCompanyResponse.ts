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
 * @interface CreateCompanyResponse
 */
export interface CreateCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateCompanyResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateCompanyResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateCompanyResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateCompanyResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateCompanyResponse
   */
  operation: string;
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateCompanyResponse
   */
  data: UnifiedId;
}

export function CreateCompanyResponseFromJSON(
  json: any
): CreateCompanyResponse {
  return CreateCompanyResponseFromJSONTyped(json, false);
}

export function CreateCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCompanyResponse {
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

export function CreateCompanyResponseToJSON(
  value?: CreateCompanyResponse | null
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
