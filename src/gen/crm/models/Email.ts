/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface Email
 */
export interface Email {
  /**
   *
   * @type {string}
   * @memberof Email
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Email
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof Email
   */
  type?: string;
}

export function EmailFromJSON(json: any): Email {
  return EmailFromJSONTyped(json, false);
}

export function EmailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Email {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    email: json['email'],
    type: !exists(json, 'type') ? undefined : json['type'],
  };
}

export function EmailToJSON(value?: Email | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    email: value.email,
    type: value.type,
  };
}
