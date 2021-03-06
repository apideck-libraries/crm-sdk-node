/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  Links,
  LinksFromJSON,
  LinksFromJSONTyped,
  LinksToJSON,
  Meta,
  MetaFromJSON,
  MetaFromJSONTyped,
  MetaToJSON,
  Opportunity,
  OpportunityFromJSON,
  OpportunityFromJSONTyped,
  OpportunityToJSON,
} from './';

/**
 *
 * @export
 * @interface GetOpportunitiesResponse
 */
export interface GetOpportunitiesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetOpportunitiesResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetOpportunitiesResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetOpportunitiesResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetOpportunitiesResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof GetOpportunitiesResponse
   */
  operation: string;
  /**
   *
   * @type {Array<Opportunity>}
   * @memberof GetOpportunitiesResponse
   */
  data: Array<Opportunity>;
  /**
   *
   * @type {Meta}
   * @memberof GetOpportunitiesResponse
   */
  meta?: Meta;
  /**
   *
   * @type {Links}
   * @memberof GetOpportunitiesResponse
   */
  links?: Links;
}

export function GetOpportunitiesResponseFromJSON(
  json: any
): GetOpportunitiesResponse {
  return GetOpportunitiesResponseFromJSONTyped(json, false);
}

export function GetOpportunitiesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetOpportunitiesResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(OpportunityFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
  };
}

export function GetOpportunitiesResponseToJSON(
  value?: GetOpportunitiesResponse | null
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
    data: (value.data as Array<any>).map(OpportunityToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links),
  };
}
