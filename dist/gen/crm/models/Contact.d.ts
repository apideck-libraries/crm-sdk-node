import { Address, CustomField, Email, PhoneNumber, SocialLink, Website } from './';
/**
 *
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    readonly id?: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    ownerId?: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    companyId?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    leadId?: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    middleName?: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    prefix?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    suffix?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    title?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    department?: string | null;
    /**
     * language code according to ISO 639-1. For the United States - EN
     * @type {string}
     * @memberof Contact
     */
    language?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    gender?: ContactGender;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    birthday?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    image?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    leadSource?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    fax?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    description?: string | null;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    status?: string;
    /**
     *
     * @type {Array<Website>}
     * @memberof Contact
     */
    websites?: Array<Website>;
    /**
     *
     * @type {Array<Address>}
     * @memberof Contact
     */
    addresses?: Array<Address>;
    /**
     *
     * @type {Array<SocialLink>}
     * @memberof Contact
     */
    socialLinks?: Array<SocialLink>;
    /**
     *
     * @type {Array<PhoneNumber>}
     * @memberof Contact
     */
    phoneNumbers?: Array<PhoneNumber>;
    /**
     *
     * @type {Array<Email>}
     * @memberof Contact
     */
    emails?: Array<Email>;
    /**
     *
     * @type {Array<CustomField>}
     * @memberof Contact
     */
    customFields?: Array<CustomField>;
    /**
     *
     * @type {Array<string>}
     * @memberof Contact
     */
    tags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    readonly updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    readonly createdAt?: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum ContactGender {
    Male = "male",
    Female = "female",
    Unisex = "unisex"
}
export declare function ContactFromJSON(json: any): Contact;
export declare function ContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contact;
export declare function ContactToJSON(value?: Contact | null): any;
