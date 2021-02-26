/* tslint:disable */
/* eslint-disable */

import {
  BadRequest,
  Company,
  CreateCompanyResponse,
  DeleteCompanyResponse,
  GetCompaniesResponse,
  GetCompanyResponse,
  NotFoundResponse,
  PaymentRequired,
  Unauthorized,
  UnexpectedError,
  Unprocessable,
  UpdateCompanyResponse,
} from '../models';

export interface CompaniesAddRequestInternal {
  company: Company;
  raw?: boolean;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
}

export interface CompaniesAllRequestInternal {
  raw?: boolean;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
  cursor?: string | null;
  limit?: number;
}

export interface CompaniesDeleteRequestInternal {
  id: string;
  raw?: boolean;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
}

export interface CompaniesOneRequestInternal {
  id: string;
  raw?: boolean;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
}

export interface CompaniesUpdateRequestInternal {
  id: string;
  company: Company;
  raw?: boolean;
  xApideckConsumerId?: string;
  xApideckAppId?: string;
  xApideckServiceId?: string;
}

export type CompaniesAddRequest = Omit<
  CompaniesAddRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type CompaniesAllRequest = Omit<
  CompaniesAllRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type CompaniesDeleteRequest = Omit<
  CompaniesDeleteRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type CompaniesOneRequest = Omit<
  CompaniesOneRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};

export type CompaniesUpdateRequest = Omit<
  CompaniesUpdateRequestInternal,
  'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'
> & {
  applicationId?: string;
  consumerId?: string;
  serviceId?: string;
};
