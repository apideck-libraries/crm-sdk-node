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
export declare function SocialLinkFromJSON(json: any): SocialLink;
export declare function SocialLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): SocialLink;
export declare function SocialLinkToJSON(value?: SocialLink | null): any;
