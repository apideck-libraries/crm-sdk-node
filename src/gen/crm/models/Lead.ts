/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  Address,
  AddressFromJSON,
  AddressFromJSONTyped,
  AddressToJSON,
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
 * @interface Lead
 */
export interface Lead {
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  readonly id?: string;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  ownerId?: string;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  companyId?: string | null;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  companyName: string | null;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  firstName?: string;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  lastName?: string | null;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  prefix?: string;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  status?: string;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  fax?: string | null;
  /**
   *
   * @type {Array<Website>}
   * @memberof Lead
   */
  websites?: Array<Website>;
  /**
   *
   * @type {Array<Address>}
   * @memberof Lead
   */
  addresses?: Array<Address>;
  /**
   *
   * @type {Array<SocialLink>}
   * @memberof Lead
   */
  socialLinks?: Array<SocialLink>;
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Lead
   */
  phoneNumbers?: Array<PhoneNumber>;
  /**
   *
   * @type {Array<Email>}
   * @memberof Lead
   */
  emails?: Array<Email>;
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Lead
   */
  customFields?: Array<CustomField>;
  /**
   *
   * @type {Array<string>}
   * @memberof Lead
   */
  tags?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  readonly updatedAt?: string;
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  readonly createdAt?: string;
}

export function LeadFromJSON(json: any): Lead {
  return LeadFromJSONTyped(json, false);
}

export function LeadFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Lead {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    companyId: !exists(json, 'company_id') ? undefined : json['company_id'],
    companyName: json['company_name'],
    name: json['name'],
    firstName: !exists(json, 'first_name') ? undefined : json['first_name'],
    lastName: !exists(json, 'last_name') ? undefined : json['last_name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    prefix: !exists(json, 'prefix') ? undefined : json['prefix'],
    title: !exists(json, 'title') ? undefined : json['title'],
    status: !exists(json, 'status') ? undefined : json['status'],
    fax: !exists(json, 'fax') ? undefined : json['fax'],
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
    updatedAt: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    createdAt: !exists(json, 'created_at') ? undefined : json['created_at'],
  };
}

export function LeadToJSON(value?: Lead | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    owner_id: value.ownerId,
    company_id: value.companyId,
    company_name: value.companyName,
    name: value.name,
    first_name: value.firstName,
    last_name: value.lastName,
    description: value.description,
    prefix: value.prefix,
    title: value.title,
    status: value.status,
    fax: value.fax,
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
