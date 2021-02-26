import { UnifiedId } from './';
/**
 *
 * @export
 * @interface CreateCompanyResponse
 */
export interface CreateCompanyResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof CreateCompanyResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof CreateCompanyResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof CreateCompanyResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof CreateCompanyResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof CreateCompanyResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof CreateCompanyResponse
     */
    data: UnifiedId;
}
export declare function CreateCompanyResponseFromJSON(json: any): CreateCompanyResponse;
export declare function CreateCompanyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCompanyResponse;
export declare function CreateCompanyResponseToJSON(value?: CreateCompanyResponse | null): any;
