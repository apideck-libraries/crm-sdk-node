import { Opportunity } from './';
/**
 *
 * @export
 * @interface GetOpportunityResponse
 */
export interface GetOpportunityResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof GetOpportunityResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof GetOpportunityResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof GetOpportunityResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof GetOpportunityResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof GetOpportunityResponse
     */
    operation: string;
    /**
     *
     * @type {Opportunity}
     * @memberof GetOpportunityResponse
     */
    data: Opportunity;
}
export declare function GetOpportunityResponseFromJSON(json: any): GetOpportunityResponse;
export declare function GetOpportunityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOpportunityResponse;
export declare function GetOpportunityResponseToJSON(value?: GetOpportunityResponse | null): any;
