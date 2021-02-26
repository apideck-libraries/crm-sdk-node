/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 * Links to navigate to previous or next pages through the API
 * @export
 * @interface Links
 */
export interface Links {
  /**
   * Link to navigate to the previous page through the API
   * @type {string}
   * @memberof Links
   */
  previous?: string | null;
  /**
   * Link to navigate to the current page through the API
   * @type {string}
   * @memberof Links
   */
  current?: string;
  /**
   * Link to navigate to the previous page through the API
   * @type {string}
   * @memberof Links
   */
  next?: string | null;
}

export function LinksFromJSON(json: any): Links {
  return LinksFromJSONTyped(json, false);
}

export function LinksFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Links {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    previous: !exists(json, 'previous') ? undefined : json['previous'],
    current: !exists(json, 'current') ? undefined : json['current'],
    next: !exists(json, 'next') ? undefined : json['next'],
  };
}

export function LinksToJSON(value?: Links | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    previous: value.previous,
    current: value.current,
    next: value.next,
  };
}
