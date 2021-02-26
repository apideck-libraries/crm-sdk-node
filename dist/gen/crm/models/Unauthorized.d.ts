/**
 *
 * @export
 * @interface Unauthorized
 */
export interface Unauthorized {
    /**
     * HTTP status code
     * @type {number}
     * @memberof Unauthorized
     */
    statusCode?: number;
    /**
     * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
     * @type {string}
     * @memberof Unauthorized
     */
    error?: string;
    /**
     * The type of error returned
     * @type {string}
     * @memberof Unauthorized
     */
    typeName?: string;
    /**
     * A human-readable message providing more details about the error.
     * @type {string}
     * @memberof Unauthorized
     */
    message?: string;
    /**
     * Contains parameter or domain specific information related to the error and why it occured.
     * @type {string | object}
     * @memberof Unauthorized
     */
    detail?: string | object;
    /**
     * Link to documentation of error type
     * @type {string}
     * @memberof Unauthorized
     */
    ref?: string;
}
export declare function UnauthorizedFromJSON(json: any): Unauthorized;
export declare function UnauthorizedFromJSONTyped(json: any, ignoreDiscriminator: boolean): Unauthorized;
export declare function UnauthorizedToJSON(value?: Unauthorized | null): any;
