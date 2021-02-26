/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  Address,
  AddressFromJSON,
  AddressFromJSONTyped,
  AddressToJSON,
  BankAccount,
  BankAccountFromJSON,
  BankAccountFromJSONTyped,
  BankAccountToJSON,
  CustomField,
  CustomFieldFromJSON,
  CustomFieldFromJSONTyped,
  CustomFieldToJSON,
  Email,
  EmailFromJSON,
  EmailFromJSONTyped,
  EmailToJSON,
  PhoneNumber,
  PhoneNumberFromJSON,
  PhoneNumberFromJSONTyped,
  PhoneNumberToJSON,
  SocialLink,
  SocialLinkFromJSON,
  SocialLinkFromJSONTyped,
  SocialLinkToJSON,
  Website,
  WebsiteFromJSON,
  WebsiteFromJSONTyped,
  WebsiteToJSON,
} from './';

/**
 *
 * @export
 * @interface Company
 */
export interface Company {
  /**
   *
   * @type {string}
   * @memberof Company
   */
  readonly id?: string;
  /**
   *
   * @type {number}
   * @memberof Company
   */
  readonly interactionCount?: number | null;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  ownerId?: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  imageUrl?: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  description?: string | null;
  /**
   * VAT number
   * @type {string}
   * @memberof Company
   */
  vatNumber?: string | null;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  currency?: string | null;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  fax?: string | null;
  /**
   *
   * @type {Array<BankAccount>}
   * @memberof Company
   */
  bankAccounts?: Array<BankAccount>;
  /**
   *
   * @type {Array<Website>}
   * @memberof Company
   */
  websites?: Array<Website>;
  /**
   *
   * @type {Array<Address>}
   * @memberof Company
   */
  addresses?: Array<Address>;
  /**
   *
   * @type {Array<SocialLink>}
   * @memberof Company
   */
  socialLinks?: Array<SocialLink>;
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Company
   */
  phoneNumbers?: Array<PhoneNumber>;
  /**
   *
   * @type {Array<Email>}
   * @memberof Company
   */
  emails?: Array<Email>;
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Company
   */
  customFields?: Array<CustomField>;
  /**
   *
   * @type {Array<string>}
   * @memberof Company
   */
  tags?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  readonly updatedBy?: string | null;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  readonly createdBy?: string | null;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  readonly updatedAt?: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  readonly createdAt?: string;
}

export function CompanyFromJSON(json: any): Company {
  return CompanyFromJSONTyped(json, false);
}

export function CompanyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Company {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    interactionCount: !exists(json, 'interaction_count')
      ? undefined
      : json['interaction_count'],
    name: json['name'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    imageUrl: !exists(json, 'image_url') ? undefined : json['image_url'],
    description: !exists(json, 'description') ? undefined : json['description'],
    vatNumber: !exists(json, 'vat_number') ? undefined : json['vat_number'],
    currency: !exists(json, 'currency') ? undefined : json['currency'],
    fax: !exists(json, 'fax') ? undefined : json['fax'],
    bankAccounts: !exists(json, 'bank_accounts')
      ? undefined
      : (json['bank_accounts'] as Array<any>).map(BankAccountFromJSON),
    websites: !exists(json, 'websites')
      ? undefined
      : (json['websites'] as Array<any>).map(WebsiteFromJSON),
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    socialLinks: !exists(json, 'social_links')
      ? undefined
      : (json['social_links'] as Array<any>).map(SocialLinkFromJSON),
    phoneNumbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails')
      ? undefined
      : (json['emails'] as Array<any>).map(EmailFromJSON),
    customFields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    tags: !exists(json, 'tags') ? undefined : json['tags'],
    updatedBy: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    createdBy: !exists(json, 'created_by') ? undefined : json['created_by'],
    updatedAt: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    createdAt: !exists(json, 'created_at') ? undefined : json['created_at'],
  };
}

export function CompanyToJSON(value?: Company | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    owner_id: value.ownerId,
    image_url: value.imageUrl,
    description: value.description,
    vat_number: value.vatNumber,
    currency: value.currency,
    fax: value.fax,
    bank_accounts:
      value.bankAccounts === undefined
        ? undefined
        : (value.bankAccounts as Array<any>).map(BankAccountToJSON),
    websites:
      value.websites === undefined
        ? undefined
        : (value.websites as Array<any>).map(WebsiteToJSON),
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    social_links:
      value.socialLinks === undefined
        ? undefined
        : (value.socialLinks as Array<any>).map(SocialLinkToJSON),
    phone_numbers:
      value.phoneNumbers === undefined
        ? undefined
        : (value.phoneNumbers as Array<any>).map(PhoneNumberToJSON),
    emails:
      value.emails === undefined
        ? undefined
        : (value.emails as Array<any>).map(EmailToJSON),
    custom_fields:
      value.customFields === undefined
        ? undefined
        : (value.customFields as Array<any>).map(CustomFieldToJSON),
    tags: value.tags,
  };
}
