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
export declare function WebsiteFromJSON(json: any): Website;
export declare function WebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Website;
export declare function WebsiteToJSON(value?: Website | null): any;
