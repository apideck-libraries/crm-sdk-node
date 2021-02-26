/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface Address
 */
export interface Address {
  /**
   *
   * @type {string}
   * @memberof Address
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  type?: AddressType;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  name?: string | null;
  /**
   * Line 1 of the address e.g. number, street, suite, apt #, etc.
   * @type {string}
   * @memberof Address
   */
  line1?: string | null;
  /**
   * Line 2 of the address
   * @type {string}
   * @memberof Address
   */
  line2?: string | null;
  /**
   * Name of city.
   * @type {string}
   * @memberof Address
   */
  city?: string | null;
  /**
   * Name of state
   * @type {string}
   * @memberof Address
   */
  state?: string | null;
  /**
   * Zip code or equivalent.
   * @type {string}
   * @memberof Address
   */
  postalCode?: string | null;
  /**
   * country code according to ISO 3166-1 alpha-2.
   * @type {string}
   * @memberof Address
   */
  country?: string | null;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  latitude?: string | null;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  longitude?: string | null;
}

/**
 * @export
 * @enum {string}
 */
export enum AddressType {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Invoicing = 'invoicing',
  Delivery = 'delivery',
  Visiting = 'visiting',
  Mailing = 'mailing',
  Home = 'home',
  Work = 'work',
  Other = 'other',
}

export function AddressFromJSON(json: any): Address {
  return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Address {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    name: !exists(json, 'name') ? undefined : json['name'],
    line1: !exists(json, 'line1') ? undefined : json['line1'],
    line2: !exists(json, 'line2') ? undefined : json['line2'],
    city: !exists(json, 'city') ? undefined : json['city'],
    state: !exists(json, 'state') ? undefined : json['state'],
    postalCode: !exists(json, 'postal_code') ? undefined : json['postal_code'],
    country: !exists(json, 'country') ? undefined : json['country'],
    latitude: !exists(json, 'latitude') ? undefined : json['latitude'],
    longitude: !exists(json, 'longitude') ? undefined : json['longitude'],
  };
}

export function AddressToJSON(value?: Address | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    type: value.type,
    name: value.name,
    line1: value.line1,
    line2: value.line2,
    city: value.city,
    state: value.state,
    postal_code: value.postalCode,
    country: value.country,
    latitude: value.latitude,
    longitude: value.longitude,
  };
}
