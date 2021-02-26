import { MetaCursors } from './';
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
export declare function MetaFromJSON(json: any): Meta;
export declare function MetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Meta;
export declare function MetaToJSON(value?: Meta | null): any;
