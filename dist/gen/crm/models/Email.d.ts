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
export declare function EmailFromJSON(json: any): Email;
export declare function EmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): Email;
export declare function EmailToJSON(value?: Email | null): any;
