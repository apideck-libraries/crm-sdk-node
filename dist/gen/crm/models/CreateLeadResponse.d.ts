import { UnifiedId } from './';
/**
 *
 * @export
 * @interface CreateLeadResponse
 */
export interface CreateLeadResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof CreateLeadResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof CreateLeadResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof CreateLeadResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof CreateLeadResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof CreateLeadResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof CreateLeadResponse
     */
    data: UnifiedId;
}
export declare function CreateLeadResponseFromJSON(json: any): CreateLeadResponse;
export declare function CreateLeadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLeadResponse;
export declare function CreateLeadResponseToJSON(value?: CreateLeadResponse | null): any;
