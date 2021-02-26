import { UnifiedId } from './';
/**
 *
 * @export
 * @interface DeleteCompanyResponse
 */
export interface DeleteCompanyResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof DeleteCompanyResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof DeleteCompanyResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof DeleteCompanyResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof DeleteCompanyResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof DeleteCompanyResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof DeleteCompanyResponse
     */
    data: UnifiedId;
}
export declare function DeleteCompanyResponseFromJSON(json: any): DeleteCompanyResponse;
export declare function DeleteCompanyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteCompanyResponse;
export declare function DeleteCompanyResponseToJSON(value?: DeleteCompanyResponse | null): any;
