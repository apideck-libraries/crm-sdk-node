/**
 *
 * @export
 * @interface BankAccount
 */
export interface BankAccount {
    /**
     *
     * @type {string}
     * @memberof BankAccount
     */
    iban?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankAccount
     */
    bic?: string | null;
}
export declare function BankAccountFromJSON(json: any): BankAccount;
export declare function BankAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccount;
export declare function BankAccountToJSON(value?: BankAccount | null): any;
