import { UnifiedId } from './';
/**
 *
 * @export
 * @interface DeleteOpportunityResponse
 */
export interface DeleteOpportunityResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof DeleteOpportunityResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof DeleteOpportunityResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof DeleteOpportunityResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof DeleteOpportunityResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof DeleteOpportunityResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof DeleteOpportunityResponse
     */
    data: UnifiedId;
}
export declare function DeleteOpportunityResponseFromJSON(json: any): DeleteOpportunityResponse;
export declare function DeleteOpportunityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteOpportunityResponse;
export declare function DeleteOpportunityResponseToJSON(value?: DeleteOpportunityResponse | null): any;
