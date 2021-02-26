import { UnifiedId } from './';
/**
 *
 * @export
 * @interface CreateContactResponse
 */
export interface CreateContactResponse {
    /**
     * HTTP Response Status Code
     * @type {number}
     * @memberof CreateContactResponse
     */
    statusCode: number;
    /**
     * HTTP Response Status
     * @type {string}
     * @memberof CreateContactResponse
     */
    status: string;
    /**
     * Apideck ID of service provider
     * @type {string}
     * @memberof CreateContactResponse
     */
    service: string;
    /**
     * Unified API resource name
     * @type {string}
     * @memberof CreateContactResponse
     */
    resource: string;
    /**
     * Operation performed
     * @type {string}
     * @memberof CreateContactResponse
     */
    operation: string;
    /**
     *
     * @type {UnifiedId}
     * @memberof CreateContactResponse
     */
    data: UnifiedId;
}
export declare function CreateContactResponseFromJSON(json: any): CreateContactResponse;
export declare function CreateContactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateContactResponse;
export declare function CreateContactResponseToJSON(value?: CreateContactResponse | null): any;
