/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface PhoneNumber
 */
export interface PhoneNumber {
  /**
   *
   * @type {string}
   * @memberof PhoneNumber
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof PhoneNumber
   */
  number: string;
  /**
   *
   * @type {string}
   * @memberof PhoneNumber
   */
  type?: PhoneNumberType;
}

/**
 * @export
 * @enum {string}
 */
export enum PhoneNumberType {
  Default = 'default',
  Phone = 'phone',
  Mobile = 'mobile',
  Work = 'work',
  Office = 'office',
  Home = 'home',
  Fax = 'fax',
  Assistant = 'assistant',
  Other = 'other',
}

export function PhoneNumberFromJSON(json: any): PhoneNumber {
  return PhoneNumberFromJSONTyped(json, false);
}

export function PhoneNumberFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PhoneNumber {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    number: json['number'],
    type: !exists(json, 'type') ? undefined : json['type'],
  };
}

export function PhoneNumberToJSON(value?: PhoneNumber | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    number: value.number,
    type: value.type,
  };
}
