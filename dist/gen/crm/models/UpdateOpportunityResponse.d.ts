import { UnifiedId } from './';
/**
 *
 * @export
 * @interface UpdateOpportunityResponse
 */
export interface UpdateOpportunityResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof UpdateOpportunityResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof UpdateOpportunityResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof UpdateOpportunityResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof UpdateOpportunityResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof UpdateOpportunityResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof UpdateOpportunityResponse
     */
    data: UnifiedId;
}
export declare function UpdateOpportunityResponseFromJSON(json: any): UpdateOpportunityResponse;
export declare function UpdateOpportunityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOpportunityResponse;
export declare function UpdateOpportunityResponseToJSON(value?: UpdateOpportunityResponse | null): any;
