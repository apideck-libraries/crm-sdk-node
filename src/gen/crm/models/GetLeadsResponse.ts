/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  Lead,
  LeadFromJSON,
  LeadFromJSONTyped,
  LeadToJSON,
  Links,
  LinksFromJSON,
  LinksFromJSONTyped,
  LinksToJSON,
  Meta,
  MetaFromJSON,
  MetaFromJSONTyped,
  MetaToJSON,
} from './';

/**
 *
 * @export
 * @interface GetLeadsResponse
 */
export interface GetLeadsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetLeadsResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetLeadsResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetLeadsResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetLeadsResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof GetLeadsResponse
   */
  operation: string;
  /**
   *
   * @type {Array<Lead>}
   * @memberof GetLeadsResponse
   */
  data: Array<Lead>;
  /**
   *
   * @type {Meta}
   * @memberof GetLeadsResponse
   */
  meta?: Meta;
  /**
   *
   * @type {Links}
   * @memberof GetLeadsResponse
   */
  links?: Links;
}

export function GetLeadsResponseFromJSON(json: any): GetLeadsResponse {
  return GetLeadsResponseFromJSONTyped(json, false);
}

export function GetLeadsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetLeadsResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(LeadFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
  };
}

export function GetLeadsResponseToJSON(value?: GetLeadsResponse | null): any {
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
    data: (value.data as Array<any>).map(LeadToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links),
  };
}
