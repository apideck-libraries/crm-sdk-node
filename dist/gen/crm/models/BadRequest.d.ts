/**
 *
 * @export
 * @interface BadRequest
 */
export interface BadRequest {
    /**
     * HTTP status code
     * @type {number}
     * @memberof BadRequest
     */
    statusCode?: number;
    /**
     * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
     * @type {string}
     * @memberof BadRequest
     */
    error?: string;
    /**
     * The type of error returned
     * @type {string}
     * @memberof BadRequest
     */
    typeName?: string;
    /**
     * A human-readable message providing more details about the error.
     * @type {string}
     * @memberof BadRequest
     */
    message?: string;
    /**
     * Contains parameter or domain specific information related to the error and why it occured.
     * @type {string | object}
     * @memberof BadRequest
     */
    detail?: string | object;
    /**
     * Link to documentation of error type
     * @type {string}
     * @memberof BadRequest
     */
    ref?: string;
}
export declare function BadRequestFromJSON(json: any): BadRequest;
export declare function BadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadRequest;
export declare function BadRequestToJSON(value?: BadRequest | null): any;
