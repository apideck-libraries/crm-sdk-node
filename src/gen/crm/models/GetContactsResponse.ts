/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  Contact,
  ContactFromJSON,
  ContactFromJSONTyped,
  ContactToJSON,
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
 * @interface GetContactsResponse
 */
export interface GetContactsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetContactsResponse
   */
  statusCode: number;
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetContactsResponse
   */
  status: string;
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetContactsResponse
   */
  service: string;
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetContactsResponse
   */
  resource: string;
  /**
   * Operation performed
   * @type {string}
   * @memberof GetContactsResponse
   */
  operation: string;
  /**
   *
   * @type {Array<Contact>}
   * @memberof GetContactsResponse
   */
  data: Array<Contact>;
  /**
   *
   * @type {Meta}
   * @memberof GetContactsResponse
   */
  meta?: Meta;
  /**
   *
   * @type {Links}
   * @memberof GetContactsResponse
   */
  links?: Links;
}

export function GetContactsResponseFromJSON(json: any): GetContactsResponse {
  return GetContactsResponseFromJSONTyped(json, false);
}

export function GetContactsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetContactsResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(ContactFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
  };
}

export function GetContactsResponseToJSON(
  value?: GetContactsResponse | null
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
    data: (value.data as Array<any>).map(ContactToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links),
  };
}