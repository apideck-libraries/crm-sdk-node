import { Contact } from './';
/**
 *
 * @export
 * @interface GetContactResponse
 */
export interface GetContactResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof GetContactResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof GetContactResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof GetContactResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof GetContactResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof GetContactResponse
     */
    operation: string;
    /**
     *
     * @type {Contact}
     * @memberof GetContactResponse
     */
    data: Contact;
}
export declare function GetContactResponseFromJSON(json: any): GetContactResponse;
export declare function GetContactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContactResponse;
export declare function GetContactResponseToJSON(value?: GetContactResponse | null): any;
