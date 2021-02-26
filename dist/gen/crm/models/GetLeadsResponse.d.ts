import { Lead, Links, Meta } from './';
/**
 *
 * @export
 * @interface GetLeadsResponse
 */
export interface GetLeadsResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof GetLeadsResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof GetLeadsResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof GetLeadsResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof GetLeadsResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof GetLeadsResponse
     */
    operation: string;
    /**
     *
     * @type {Array<Lead>}
     * @memberof GetLeadsResponse
     */
    data: Array<Lead>;
    /**
     *
     * @type {Meta}
     * @memberof GetLeadsResponse
     */
    meta?: Meta;
    /**
     *
     * @type {Links}
     * @memberof GetLeadsResponse
     */
    links?: Links;
}
export declare function GetLeadsResponseFromJSON(json: any): GetLeadsResponse;
export declare function GetLeadsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLeadsResponse;
export declare function GetLeadsResponseToJSON(value?: GetLeadsResponse | null): any;
