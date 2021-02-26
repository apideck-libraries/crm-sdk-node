/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
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

export function BankAccountFromJSON(json: any): BankAccount {
  return BankAccountFromJSONTyped(json, false);
}

export function BankAccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BankAccount {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    iban: !exists(json, 'iban') ? undefined : json['iban'],
    bic: !exists(json, 'bic') ? undefined : json['bic'],
  };
}

export function BankAccountToJSON(value?: BankAccount | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    iban: value.iban,
    bic: value.bic,
  };
}
