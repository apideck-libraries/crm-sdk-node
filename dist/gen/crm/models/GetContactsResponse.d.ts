import { Contact, Links, Meta } from './';
/**
 *
 * @export
 * @interface GetContactsResponse
 */
export interface GetContactsResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof GetContactsResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof GetContactsResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof GetContactsResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof GetContactsResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof GetContactsResponse
     */
    operation: string;
    /**
     *
     * @type {Array<Contact>}
     * @memberof GetContactsResponse
     */
    data: Array<Contact>;
    /**
     *
     * @type {Meta}
     * @memberof GetContactsResponse
     */
    meta?: Meta;
    /**
     *
     * @type {Links}
     * @memberof GetContactsResponse
     */
    links?: Links;
}
export declare function GetContactsResponseFromJSON(json: any): GetContactsResponse;
export declare function GetContactsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContactsResponse;
export declare function GetContactsResponseToJSON(value?: GetContactsResponse | null): any;
