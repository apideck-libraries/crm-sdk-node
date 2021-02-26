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
 * @interface Contact
 */
export interface Contact {
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  readonly id?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  ownerId?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  companyId?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  leadId?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  firstName?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  middleName?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  lastName?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  prefix?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  suffix?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  title?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  department?: string | null;
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof Contact
   */
  language?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  gender?: ContactGender;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  birthday?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  image?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  leadSource?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  fax?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  description?: string | null;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  status?: string;
  /**
   *
   * @type {Array<Website>}
   * @memberof Contact
   */
  websites?: Array<Website>;
  /**
   *
   * @type {Array<Address>}
   * @memberof Contact
   */
  addresses?: Array<Address>;
  /**
   *
   * @type {Array<SocialLink>}
   * @memberof Contact
   */
  socialLinks?: Array<SocialLink>;
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Contact
   */
  phoneNumbers?: Array<PhoneNumber>;
  /**
   *
   * @type {Array<Email>}
   * @memberof Contact
   */
  emails?: Array<Email>;
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Contact
   */
  customFields?: Array<CustomField>;
  /**
   *
   * @type {Array<string>}
   * @memberof Contact
   */
  tags?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  readonly updatedAt?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  readonly createdAt?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum ContactGender {
  Male = 'male',
  Female = 'female',
  Unisex = 'unisex',
}

export function ContactFromJSON(json: any): Contact {
  return ContactFromJSONTyped(json, false);
}

export function ContactFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Contact {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    companyId: !exists(json, 'company_id') ? undefined : json['company_id'],
    leadId: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    name: json['name'],
    firstName: !exists(json, 'first_name') ? undefined : json['first_name'],
    middleName: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    lastName: !exists(json, 'last_name') ? undefined : json['last_name'],
    prefix: !exists(json, 'prefix') ? undefined : json['prefix'],
    suffix: !exists(json, 'suffix') ? undefined : json['suffix'],
    title: !exists(json, 'title') ? undefined : json['title'],
    department: !exists(json, 'department') ? undefined : json['department'],
    language: !exists(json, 'language') ? undefined : json['language'],
    gender: !exists(json, 'gender') ? undefined : json['gender'],
    birthday: !exists(json, 'birthday') ? undefined : json['birthday'],
    image: !exists(json, 'image') ? undefined : json['image'],
    leadSource: !exists(json, 'lead_source') ? undefined : json['lead_source'],
    fax: !exists(json, 'fax') ? undefined : json['fax'],
    description: !exists(json, 'description') ? undefined : json['description'],
    status: !exists(json, 'status') ? undefined : json['status'],
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

export function ContactToJSON(value?: Contact | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    owner_id: value.ownerId,
    company_id: value.companyId,
    lead_id: value.leadId,
    name: value.name,
    first_name: value.firstName,
    middle_name: value.middleName,
    last_name: value.lastName,
    prefix: value.prefix,
    suffix: value.suffix,
    title: value.title,
    department: value.department,
    language: value.language,
    gender: value.gender,
    birthday: value.birthday,
    image: value.image,
    lead_source: value.leadSource,
    fax: value.fax,
    description: value.description,
    status: value.status,
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
