/**
 * Cursors to navigate to previous or next pages through the API
 * @export
 * @interface MetaCursors
 */
export interface MetaCursors {
    /**
     * Cursor to navigate to the previous page of results through the API
     * @type {string}
     * @memberof MetaCursors
     */
    previous?: string | null;
    /**
     * Cursor to navigate to the current page of results through the API
     * @type {string}
     * @memberof MetaCursors
     */
    current?: string | null;
    /**
     * Cursor to navigate to the next page of results through the API
     * @type {string}
     * @memberof MetaCursors
     */
    next?: string | null;
}
export declare function MetaCursorsFromJSON(json: any): MetaCursors;
export declare function MetaCursorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaCursors;
export declare function MetaCursorsToJSON(value?: MetaCursors | null): any;
