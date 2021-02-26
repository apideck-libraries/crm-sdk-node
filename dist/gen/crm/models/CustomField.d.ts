/**
 *
 * @export
 * @interface CustomField
 */
export interface CustomField {
    /**
     *
     * @type {string}
     * @memberof CustomField
     */
    id: string;
    /**
     *
     * @type {string | number | boolean | Array<string>}
     * @memberof CustomField
     */
    value?: string | number | boolean | Array<string>;
}
export declare function CustomFieldFromJSON(json: any): CustomField;
export declare function CustomFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomField;
export declare function CustomFieldToJSON(value?: CustomField | null): any;
