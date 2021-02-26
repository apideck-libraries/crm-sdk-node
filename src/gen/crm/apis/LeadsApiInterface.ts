/* tslint:disable */
/* eslint-disable */

import {
  BadRequest,
  CreateLeadResponse,
  DeleteLeadResponse,
  GetLeadResponse,
  GetLeadsResponse,
  Lead,
  NotFoundResponse,
  PaymentRequired,
  Unauthorized,
  UnexpectedError,
  Unprocessable,
  UpdateLeadResponse,
} from '../models';

export interface LeadsAddRequestInternal {
  lead: Lead;
  raw?: boolean;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
}

export interface LeadsAllRequestInternal {
  raw?: boolean;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
  cursor?: string | null;
  limit?: number;
}

export interface LeadsDeleteRequestInternal {
  id: string;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
  raw?: boolean;
}

export interface LeadsOneRequestInternal {
  id: string;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
  raw?: boolean;
}

export interface LeadsUpdateRequestInternal {
  id: string;
  lead: Lead;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
  raw?: boolean;
}

export type LeadsAddRequest = Omit<
  LeadsAddRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type LeadsAllRequest = Omit<
  LeadsAllRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type LeadsDeleteRequest = Omit<
  LeadsDeleteRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type LeadsOneRequest = Omit<
  LeadsOneRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type LeadsUpdateRequest = Omit<
  LeadsUpdateRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};
