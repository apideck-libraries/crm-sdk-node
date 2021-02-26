import { UnifiedId } from './';
/**
 *
 * @export
 * @interface CreateOpportunityResponse
 */
export interface CreateOpportunityResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof CreateOpportunityResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof CreateOpportunityResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof CreateOpportunityResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof CreateOpportunityResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof CreateOpportunityResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof CreateOpportunityResponse
     */
    data: UnifiedId;
}
export declare function CreateOpportunityResponseFromJSON(json: any): CreateOpportunityResponse;
export declare function CreateOpportunityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOpportunityResponse;
export declare function CreateOpportunityResponseToJSON(value?: CreateOpportunityResponse | null): any;
