/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  MetaCursors,
  MetaCursorsFromJSON,
  MetaCursorsFromJSONTyped,
  MetaCursorsToJSON,
} from './';

/**
 * Reponse metadata
 * @export
 * @interface Meta
 */
export interface Meta {
  /**
   * Number of items returned in the data property of the response
   * @type {number}
   * @memberof Meta
   */
  itemsOnPage?: number;
  /**
   *
   * @type {MetaCursors}
   * @memberof Meta
   */
  cursors?: MetaCursors;
}

export function MetaFromJSON(json: any): Meta {
  return MetaFromJSONTyped(json, false);
}

export function MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Meta {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    itemsOnPage: !exists(json, 'items_on_page')
      ? undefined
      : json['items_on_page'],
    cursors: !exists(json, 'cursors')
      ? undefined
      : MetaCursorsFromJSON(json['cursors']),
  };
}

export function MetaToJSON(value?: Meta | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    items_on_page: value.itemsOnPage,
    cursors: MetaCursorsToJSON(value.cursors),
  };
}
