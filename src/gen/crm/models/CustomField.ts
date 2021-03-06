/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface CustomField
 */
export interface CustomField {
  /**
   *
   * @type {string}
   * @memberof CustomField
   */
  id: string;
  /**
   *
   * @type {string | number | boolean | Array<string>}
   * @memberof CustomField
   */
  value?: string | number | boolean | Array<string>;
}

export function CustomFieldFromJSON(json: any): CustomField {
  return CustomFieldFromJSONTyped(json, false);
}

export function CustomFieldFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CustomField {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    value: !exists(json, 'value')
      ? undefined
      : <string | number | boolean | Array<string>>json['value'],
  };
}

export function CustomFieldToJSON(value?: CustomField | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    value: <string | number | boolean | Array<string>>value.value,
  };
}
