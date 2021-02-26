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
export declare function LinksFromJSON(json: any): Links;
export declare function LinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): Links;
export declare function LinksToJSON(value?: Links | null): any;
