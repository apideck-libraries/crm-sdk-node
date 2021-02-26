/**
 *
 * @export
 * @interface Unprocessable
 */
export interface Unprocessable {
    /**
     * HTTP status code
     * @type {number}
     * @memberof Unprocessable
     */
    statusCode?: number;
    /**
     * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
     * @type {string}
     * @memberof Unprocessable
     */
    error?: string;
    /**
     * The type of error returned
     * @type {string}
     * @memberof Unprocessable
     */
    typeName?: string;
    /**
     * A human-readable message providing more details about the error.
     * @type {string}
     * @memberof Unprocessable
     */
    message?: string;
    /**
     * Contains parameter or domain specific information related to the error and why it occured.
     * @type {string}
     * @memberof Unprocessable
     */
    detail?: string;
    /**
     * Link to documentation of error type
     * @type {string}
     * @memberof Unprocessable
     */
    ref?: string;
}
export declare function UnprocessableFromJSON(json: any): Unprocessable;
export declare function UnprocessableFromJSONTyped(json: any, ignoreDiscriminator: boolean): Unprocessable;
export declare function UnprocessableToJSON(value?: Unprocessable | null): any;
