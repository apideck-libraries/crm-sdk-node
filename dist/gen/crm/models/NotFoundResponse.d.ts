/**
 *
 * @export
 * @interface NotFoundResponse
 */
export interface NotFoundResponse {
    /**
     * HTTP status code
     * @type {number}
     * @memberof NotFoundResponse
     */
    statusCode?: number;
    /**
     * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
     * @type {string}
     * @memberof NotFoundResponse
     */
    error?: string;
    /**
     * The type of error returned
     * @type {string}
     * @memberof NotFoundResponse
     */
    typeName?: string;
    /**
     * A human-readable message providing more details about the error.
     * @type {string}
     * @memberof NotFoundResponse
     */
    message?: string;
    /**
     * Contains parameter or domain specific information related to the error and why it occured.
     * @type {string}
     * @memberof NotFoundResponse
     */
    detail?: string;
    /**
     * Link to documentation of error type
     * @type {string}
     * @memberof NotFoundResponse
     */
    ref?: string;
}
export declare function NotFoundResponseFromJSON(json: any): NotFoundResponse;
export declare function NotFoundResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotFoundResponse;
export declare function NotFoundResponseToJSON(value?: NotFoundResponse | null): any;
