import { Lead } from './';
/**
 *
 * @export
 * @interface GetLeadResponse
 */
export interface GetLeadResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof GetLeadResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof GetLeadResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof GetLeadResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof GetLeadResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof GetLeadResponse
     */
    operation: string;
    /**
     *
     * @type {Lead}
     * @memberof GetLeadResponse
     */
    data: Lead;
}
export declare function GetLeadResponseFromJSON(json: any): GetLeadResponse;
export declare function GetLeadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLeadResponse;
export declare function GetLeadResponseToJSON(value?: GetLeadResponse | null): any;
