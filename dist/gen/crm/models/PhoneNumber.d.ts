/**
 *
 * @export
 * @interface PhoneNumber
 */
export interface PhoneNumber {
    /**
     *
     * @type {string}
     * @memberof PhoneNumber
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof PhoneNumber
     */
    number: string;
    /**
     *
     * @type {string}
     * @memberof PhoneNumber
     */
    type?: PhoneNumberType;
}
/**
 * @export
 * @enum {string}
 */
export declare enum PhoneNumberType {
    Default = "default",
    Phone = "phone",
    Mobile = "mobile",
    Work = "work",
    Office = "office",
    Home = "home",
    Fax = "fax",
    Assistant = "assistant",
    Other = "other"
}
export declare function PhoneNumberFromJSON(json: any): PhoneNumber;
export declare function PhoneNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneNumber;
export declare function PhoneNumberToJSON(value?: PhoneNumber | null): any;
