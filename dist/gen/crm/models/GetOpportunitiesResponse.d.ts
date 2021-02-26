import { Links, Meta, Opportunity } from './';
/**
 *
 * @export
 * @interface GetOpportunitiesResponse
 */
export interface GetOpportunitiesResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof GetOpportunitiesResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof GetOpportunitiesResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof GetOpportunitiesResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof GetOpportunitiesResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof GetOpportunitiesResponse
     */
    operation: string;
    /**
     *
     * @type {Array<Opportunity>}
     * @memberof GetOpportunitiesResponse
     */
    data: Array<Opportunity>;
    /**
     *
     * @type {Meta}
     * @memberof GetOpportunitiesResponse
     */
    meta?: Meta;
    /**
     *
     * @type {Links}
     * @memberof GetOpportunitiesResponse
     */
    links?: Links;
}
export declare function GetOpportunitiesResponseFromJSON(json: any): GetOpportunitiesResponse;
export declare function GetOpportunitiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOpportunitiesResponse;
export declare function GetOpportunitiesResponseToJSON(value?: GetOpportunitiesResponse | null): any;
