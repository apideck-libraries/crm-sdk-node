/* tslint:disable */
/* eslint-disable */

import {
  BadRequest,
  Contact,
  CreateContactResponse,
  DeleteContactResponse,
  GetContactResponse,
  GetContactsResponse,
  NotFoundResponse,
  PaymentRequired,
  Unauthorized,
  UnexpectedError,
  Unprocessable,
  UpdateContactResponse,
} from '../models';

export interface ContactsAddRequestInternal {
  contact: Contact;
  raw?: boolean;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
}

export interface ContactsAllRequestInternal {
  raw?: boolean;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
  cursor?: string | null;
  limit?: number;
}

export interface ContactsDeleteRequestInternal {
  id: string;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
  raw?: boolean;
}

export interface ContactsOneRequestInternal {
  id: string;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
  raw?: boolean;
}

export interface ContactsUpdateRequestInternal {
  id: string;
  contact: Contact;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
  raw?: boolean;
}

export type ContactsAddRequest = Omit<
  ContactsAddRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type ContactsAllRequest = Omit<
  ContactsAllRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type ContactsDeleteRequest = Omit<
  ContactsDeleteRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type ContactsOneRequest = Omit<
  ContactsOneRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type ContactsUpdateRequest = Omit<
  ContactsUpdateRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};
