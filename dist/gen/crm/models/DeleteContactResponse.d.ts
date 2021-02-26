import { UnifiedId } from './';
/**
 *
 * @export
 * @interface DeleteContactResponse
 */
export interface DeleteContactResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof DeleteContactResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof DeleteContactResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof DeleteContactResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof DeleteContactResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof DeleteContactResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof DeleteContactResponse
     */
    data: UnifiedId;
}
export declare function DeleteContactResponseFromJSON(json: any): DeleteContactResponse;
export declare function DeleteContactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteContactResponse;
export declare function DeleteContactResponseToJSON(value?: DeleteContactResponse | null): any;
