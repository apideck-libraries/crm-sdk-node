/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface SocialLink
 */
export interface SocialLink {
  /**
   *
   * @type {string}
   * @memberof SocialLink
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof SocialLink
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof SocialLink
   */
  platform?: string;
}

export function SocialLinkFromJSON(json: any): SocialLink {
  return SocialLinkFromJSONTyped(json, false);
}

export function SocialLinkFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SocialLink {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    url: json['url'],
    platform: !exists(json, 'platform') ? undefined : json['platform'],
  };
}

export function SocialLinkToJSON(value?: SocialLink | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    url: value.url,
    platform: value.platform,
  };
}
