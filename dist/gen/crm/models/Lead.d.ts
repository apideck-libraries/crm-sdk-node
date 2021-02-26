import { Address, CustomField, Email, PhoneNumber, SocialLink, Website } from './';
/**
 *
 * @export
 * @interface Lead
 */
export interface Lead {
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    readonly id?: string;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    ownerId?: string;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    companyId?: string | null;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    companyName: string | null;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    lastName?: string | null;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    prefix?: string;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    fax?: string | null;
    /**
     *
     * @type {Array<Website>}
     * @memberof Lead
     */
    websites?: Array<Website>;
    /**
     *
     * @type {Array<Address>}
     * @memberof Lead
     */
    addresses?: Array<Address>;
    /**
     *
     * @type {Array<SocialLink>}
     * @memberof Lead
     */
    socialLinks?: Array<SocialLink>;
    /**
     *
     * @type {Array<PhoneNumber>}
     * @memberof Lead
     */
    phoneNumbers?: Array<PhoneNumber>;
    /**
     *
     * @type {Array<Email>}
     * @memberof Lead
     */
    emails?: Array<Email>;
    /**
     *
     * @type {Array<CustomField>}
     * @memberof Lead
     */
    customFields?: Array<CustomField>;
    /**
     *
     * @type {Array<string>}
     * @memberof Lead
     */
    tags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    readonly updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof Lead
     */
    readonly createdAt?: string;
}
export declare function LeadFromJSON(json: any): Lead;
export declare function LeadFromJSONTyped(json: any, ignoreDiscriminator: boolean): Lead;
export declare function LeadToJSON(value?: Lead | null): any;
