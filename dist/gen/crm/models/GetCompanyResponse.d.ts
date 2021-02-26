import { Company } from './';
/**
 *
 * @export
 * @interface GetCompanyResponse
 */
export interface GetCompanyResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof GetCompanyResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof GetCompanyResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof GetCompanyResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof GetCompanyResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof GetCompanyResponse
     */
    operation: string;
    /**
     *
     * @type {Company}
     * @memberof GetCompanyResponse
     */
    data: Company;
}
export declare function GetCompanyResponseFromJSON(json: any): GetCompanyResponse;
export declare function GetCompanyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCompanyResponse;
export declare function GetCompanyResponseToJSON(value?: GetCompanyResponse | null): any;
