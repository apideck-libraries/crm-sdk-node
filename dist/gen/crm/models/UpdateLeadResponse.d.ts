import { UnifiedId } from './';
/**
 *
 * @export
 * @interface UpdateLeadResponse
 */
export interface UpdateLeadResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof UpdateLeadResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof UpdateLeadResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof UpdateLeadResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof UpdateLeadResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof UpdateLeadResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof UpdateLeadResponse
     */
    data: UnifiedId;
}
export declare function UpdateLeadResponseFromJSON(json: any): UpdateLeadResponse;
export declare function UpdateLeadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLeadResponse;
export declare function UpdateLeadResponseToJSON(value?: UpdateLeadResponse | null): any;
