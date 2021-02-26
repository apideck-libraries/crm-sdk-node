/**
 *
 * @export
 * @interface PaymentRequired
 */
export interface PaymentRequired {
    /**
     * HTTP status code
     * @type {number}
     * @memberof PaymentRequired
     */
    statusCode?: number;
    /**
     * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
     * @type {string}
     * @memberof PaymentRequired
     */
    error?: string;
    /**
     * The type of error returned
     * @type {string}
     * @memberof PaymentRequired
     */
    typeName?: string;
    /**
     * A human-readable message providing more details about the error.
     * @type {string}
     * @memberof PaymentRequired
     */
    message?: string;
    /**
     * Contains parameter or domain specific information related to the error and why it occured.
     * @type {string}
     * @memberof PaymentRequired
     */
    detail?: string;
    /**
     * Link to documentation of error type
     * @type {string}
     * @memberof PaymentRequired
     */
    ref?: string;
}
export declare function PaymentRequiredFromJSON(json: any): PaymentRequired;
export declare function PaymentRequiredFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequired;
export declare function PaymentRequiredToJSON(value?: PaymentRequired | null): any;
