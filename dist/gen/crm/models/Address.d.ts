/**
 *
 * @export
 * @interface Address
 */
export interface Address {
    /**
     *
     * @type {string}
     * @memberof Address
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    type?: AddressType;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    name?: string | null;
    /**
     * Line 1 of the address e.g. number, street, suite, apt #, etc.
     * @type {string}
     * @memberof Address
     */
    line1?: string | null;
    /**
     * Line 2 of the address
     * @type {string}
     * @memberof Address
     */
    line2?: string | null;
    /**
     * Name of city.
     * @type {string}
     * @memberof Address
     */
    city?: string | null;
    /**
     * Name of state
     * @type {string}
     * @memberof Address
     */
    state?: string | null;
    /**
     * Zip code or equivalent.
     * @type {string}
     * @memberof Address
     */
    postalCode?: string | null;
    /**
     * country code according to ISO 3166-1 alpha-2.
     * @type {string}
     * @memberof Address
     */
    country?: string | null;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    latitude?: string | null;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    longitude?: string | null;
}
/**
 * @export
 * @enum {string}
 */
export declare enum AddressType {
    Default = "default",
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Invoicing = "invoicing",
    Delivery = "delivery",
    Visiting = "visiting",
    Mailing = "mailing",
    Home = "home",
    Work = "work",
    Other = "other"
}
export declare function AddressFromJSON(json: any): Address;
export declare function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address;
export declare function AddressToJSON(value?: Address | null): any;
