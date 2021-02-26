import { UnifiedId } from './';
/**
 *
 * @export
 * @interface DeleteLeadResponse
 */
export interface DeleteLeadResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof DeleteLeadResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof DeleteLeadResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof DeleteLeadResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof DeleteLeadResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof DeleteLeadResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof DeleteLeadResponse
     */
    data: UnifiedId;
}
export declare function DeleteLeadResponseFromJSON(json: any): DeleteLeadResponse;
export declare function DeleteLeadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteLeadResponse;
export declare function DeleteLeadResponseToJSON(value?: DeleteLeadResponse | null): any;
