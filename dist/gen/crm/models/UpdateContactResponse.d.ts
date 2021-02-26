import { UnifiedId } from './';
/**
 *
 * @export
 * @interface UpdateContactResponse
 */
export interface UpdateContactResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof UpdateContactResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof UpdateContactResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof UpdateContactResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof UpdateContactResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof UpdateContactResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof UpdateContactResponse
     */
    data: UnifiedId;
}
export declare function UpdateContactResponseFromJSON(json: any): UpdateContactResponse;
export declare function UpdateContactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateContactResponse;
export declare function UpdateContactResponseToJSON(value?: UpdateContactResponse | null): any;
