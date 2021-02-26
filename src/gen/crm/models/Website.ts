/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface Website
 */
export interface Website {
  /**
   *
   * @type {string}
   * @memberof Website
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Website
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof Website
   */
  category?: string;
}

export function WebsiteFromJSON(json: any): Website {
  return WebsiteFromJSONTyped(json, false);
}

export function WebsiteFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Website {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    url: json['url'],
    category: !exists(json, 'category') ? undefined : json['category'],
  };
}

export function WebsiteToJSON(value?: Website | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    url: value.url,
    category: value.category,
  };
}
