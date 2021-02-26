/**
 *
 * @export
 * @interface NotImplemented
 */
export interface NotImplemented {
    /**
     * HTTP status code
     * @type {number}
     * @memberof NotImplemented
     */
    statusCode?: number;
    /**
     * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
     * @type {string}
     * @memberof NotImplemented
     */
    error?: string;
    /**
     * The type of error returned
     * @type {string}
     * @memberof NotImplemented
     */
    typeName?: string;
    /**
     * A human-readable message providing more details about the error.
     * @type {string}
     * @memberof NotImplemented
     */
    message?: string;
    /**
     * Contains parameter or domain specific information related to the error and why it occured.
     * @type {string | object}
     * @memberof NotImplemented
     */
    detail?: string | object;
    /**
     * Link to documentation of error type
     * @type {string}
     * @memberof NotImplemented
     */
    ref?: string;
}
export declare function NotImplementedFromJSON(json: any): NotImplemented;
export declare function NotImplementedFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotImplemented;
export declare function NotImplementedToJSON(value?: NotImplemented | null): any;
