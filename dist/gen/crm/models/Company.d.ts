import { Address, BankAccount, CustomField, Email, PhoneNumber, SocialLink, Website } from './';
/**
 *
 * @export
 * @interface Company
 */
export interface Company {
    /**
     *
     * @type {string}
     * @memberof Company
     */
    readonly id?: string;
    /**
     *
     * @type {number}
     * @memberof Company
     */
    readonly interactionCount?: number | null;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    ownerId?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    imageUrl?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    description?: string | null;
    /**
     * VAT number
     * @type {string}
     * @memberof Company
     */
    vatNumber?: string | null;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    currency?: string | null;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    fax?: string | null;
    /**
     *
     * @type {Array<BankAccount>}
     * @memberof Company
     */
    bankAccounts?: Array<BankAccount>;
    /**
     *
     * @type {Array<Website>}
     * @memberof Company
     */
    websites?: Array<Website>;
    /**
     *
     * @type {Array<Address>}
     * @memberof Company
     */
    addresses?: Array<Address>;
    /**
     *
     * @type {Array<SocialLink>}
     * @memberof Company
     */
    socialLinks?: Array<SocialLink>;
    /**
     *
     * @type {Array<PhoneNumber>}
     * @memberof Company
     */
    phoneNumbers?: Array<PhoneNumber>;
    /**
     *
     * @type {Array<Email>}
     * @memberof Company
     */
    emails?: Array<Email>;
    /**
     *
     * @type {Array<CustomField>}
     * @memberof Company
     */
    customFields?: Array<CustomField>;
    /**
     *
     * @type {Array<string>}
     * @memberof Company
     */
    tags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    readonly updatedBy?: string | null;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    readonly createdBy?: string | null;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    readonly updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    readonly createdAt?: string;
}
export declare function CompanyFromJSON(json: any): Company;
export declare function CompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Company;
export declare function CompanyToJSON(value?: Company | null): any;
