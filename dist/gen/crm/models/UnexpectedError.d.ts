/**
 *
 * @export
 * @interface UnexpectedError
 */
export interface UnexpectedError {
    /**
     * HTTP status code
     * @type {number}
     * @memberof UnexpectedError
     */
    statusCode?: number;
    /**
     * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
     * @type {string}
     * @memberof UnexpectedError
     */
    error?: string;
    /**
     * The type of error returned
     * @type {string}
     * @memberof UnexpectedError
     */
    typeName?: string;
    /**
     * A human-readable message providing more details about the error.
     * @type {string}
     * @memberof UnexpectedError
     */
    message?: string;
    /**
     * Contains parameter or domain specific information related to the error and why it occured.
     * @type {string | object}
     * @memberof UnexpectedError
     */
    detail?: string | object;
    /**
     * Link to documentation of error type
     * @type {string}
     * @memberof UnexpectedError
     */
    ref?: string;
}
export declare function UnexpectedErrorFromJSON(json: any): UnexpectedError;
export declare function UnexpectedErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnexpectedError;
export declare function UnexpectedErrorToJSON(value?: UnexpectedError | null): any;
