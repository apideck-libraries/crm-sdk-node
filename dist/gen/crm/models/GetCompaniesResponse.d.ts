import { Company, Links, Meta } from './';
/**
 *
 * @export
 * @interface GetCompaniesResponse
 */
export interface GetCompaniesResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof GetCompaniesResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof GetCompaniesResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof GetCompaniesResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof GetCompaniesResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof GetCompaniesResponse
     */
    operation: string;
    /**
     *
     * @type {Array<Company>}
     * @memberof GetCompaniesResponse
     */
    data: Array<Company>;
    /**
     *
     * @type {Meta}
     * @memberof GetCompaniesResponse
     */
    meta?: Meta;
    /**
     *
     * @type {Links}
     * @memberof GetCompaniesResponse
     */
    links?: Links;
}
export declare function GetCompaniesResponseFromJSON(json: any): GetCompaniesResponse;
export declare function GetCompaniesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCompaniesResponse;
export declare function GetCompaniesResponseToJSON(value?: GetCompaniesResponse | null): any;
