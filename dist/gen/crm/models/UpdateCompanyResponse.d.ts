import { UnifiedId } from './';
/**
 *
 * @export
 * @interface UpdateCompanyResponse
 */
export interface UpdateCompanyResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof UpdateCompanyResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof UpdateCompanyResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof UpdateCompanyResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof UpdateCompanyResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof UpdateCompanyResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof UpdateCompanyResponse
     */
    data: UnifiedId;
}
export declare function UpdateCompanyResponseFromJSON(json: any): UpdateCompanyResponse;
export declare function UpdateCompanyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCompanyResponse;
export declare function UpdateCompanyResponseToJSON(value?: UpdateCompanyResponse | null): any;
