/* tslint:disable */
/* eslint-disable */

import * as runtime from '../runtime';
import {
  BadRequest,
  BadRequestFromJSON,
  BadRequestToJSON,
  Company,
  CompanyFromJSON,
  CompanyToJSON,
  CreateCompanyResponse,
  CreateCompanyResponseFromJSON,
  CreateCompanyResponseToJSON,
  DeleteCompanyResponse,
  DeleteCompanyResponseFromJSON,
  DeleteCompanyResponseToJSON,
  GetCompaniesResponse,
  GetCompaniesResponseFromJSON,
  GetCompaniesResponseToJSON,
  GetCompanyResponse,
  GetCompanyResponseFromJSON,
  GetCompanyResponseToJSON,
  NotFoundResponse,
  NotFoundResponseFromJSON,
  NotFoundResponseToJSON,
  PaymentRequired,
  PaymentRequiredFromJSON,
  PaymentRequiredToJSON,
  Unauthorized,
  UnauthorizedFromJSON,
  UnauthorizedToJSON,
  UnexpectedError,
  UnexpectedErrorFromJSON,
  UnexpectedErrorToJSON,
  Unprocessable,
  UnprocessableFromJSON,
  UnprocessableToJSON,
  UpdateCompanyResponse,
  UpdateCompanyResponseFromJSON,
  UpdateCompanyResponseToJSON,
} from '../models';

export {
  CompaniesAddRequest,
  CompaniesAllRequest,
  CompaniesDeleteRequest,
  CompaniesOneRequest,
  CompaniesUpdateRequest,
} from './CompaniesApiInterface';

import {
  CompaniesAddRequestInternal,
  CompaniesAllRequestInternal,
  CompaniesDeleteRequestInternal,
  CompaniesOneRequestInternal,
  CompaniesUpdateRequestInternal,
} from './CompaniesApiInterface';

/**
 *
 */
export class CompaniesApi extends runtime.BaseAPI {
  /**
   * Create company
   * Create company
   */
  async companiesAddRaw(
    requestParameters: CompaniesAddRequestInternal
  ): Promise<runtime.ApiResponse<CreateCompanyResponse>> {
    if (
      requestParameters.company === null ||
      requestParameters.company === undefined
    ) {
      throw new runtime.RequiredError(
        'company',
        'Required parameter requestParameters.company was null or undefined when calling companiesAdd.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (
      requestParameters.xApideckConsumerId !== undefined &&
      requestParameters.xApideckConsumerId !== null
    ) {
      headerParameters['x-apideck-consumer-id'] = String(
        requestParameters.xApideckConsumerId
      );
    }

    if (
      requestParameters.xApideckAppId !== undefined &&
      requestParameters.xApideckAppId !== null
    ) {
      headerParameters['x-apideck-app-id'] = String(
        requestParameters.xApideckAppId
      );
    }

    if (
      requestParameters.xApideckServiceId !== undefined &&
      requestParameters.xApideckServiceId !== null
    ) {
      headerParameters['x-apideck-service-id'] = String(
        requestParameters.xApideckServiceId
      );
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = `Bearer ${this.configuration.apiKey}`;
    }

    if (this.configuration && this.configuration.applicationId) {
      headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
    }

    if (this.configuration && this.configuration.consumerId) {
      headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
    }

    const response = await this.request({
      path: `/crm/companies`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: CompanyToJSON(requestParameters.company),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateCompanyResponseFromJSON(jsonValue)
    );
  }

  /**
   * Create company
   * Create company
   */
  async companiesAdd(
    requestParameters: CompaniesAddRequestInternal
  ): Promise<CreateCompanyResponse> {
    const response = await this.companiesAddRaw(requestParameters);
    return await response.value();
  }

  /**
   * List companies
   * List companies
   */
  async companiesAllRaw(
    requestParameters: CompaniesAllRequestInternal
  ): Promise<runtime.ApiResponse<GetCompaniesResponse>> {
    const queryParameters: any = {};

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw;
    }

    if (requestParameters.cursor !== undefined) {
      queryParameters['cursor'] = requestParameters.cursor;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.xApideckConsumerId !== undefined &&
      requestParameters.xApideckConsumerId !== null
    ) {
      headerParameters['x-apideck-consumer-id'] = String(
        requestParameters.xApideckConsumerId
      );
    }

    if (
      requestParameters.xApideckAppId !== undefined &&
      requestParameters.xApideckAppId !== null
    ) {
      headerParameters['x-apideck-app-id'] = String(
        requestParameters.xApideckAppId
      );
    }

    if (
      requestParameters.xApideckServiceId !== undefined &&
      requestParameters.xApideckServiceId !== null
    ) {
      headerParameters['x-apideck-service-id'] = String(
        requestParameters.xApideckServiceId
      );
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = `Bearer ${this.configuration.apiKey}`;
    }

    if (this.configuration && this.configuration.applicationId) {
      headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
    }

    if (this.configuration && this.configuration.consumerId) {
      headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
    }

    const response = await this.request({
      path: `/crm/companies`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetCompaniesResponseFromJSON(jsonValue)
    );
  }

  /**
   * List companies
   * List companies
   */
  async companiesAll(
    requestParameters: CompaniesAllRequestInternal
  ): Promise<GetCompaniesResponse> {
    const response = await this.companiesAllRaw(requestParameters);
    return await response.value();
  }

  /**
   * Delete company
   * Delete company
   */
  async companiesDeleteRaw(
    requestParameters: CompaniesDeleteRequestInternal
  ): Promise<runtime.ApiResponse<DeleteCompanyResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling companiesDelete.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.xApideckConsumerId !== undefined &&
      requestParameters.xApideckConsumerId !== null
    ) {
      headerParameters['x-apideck-consumer-id'] = String(
        requestParameters.xApideckConsumerId
      );
    }

    if (
      requestParameters.xApideckAppId !== undefined &&
      requestParameters.xApideckAppId !== null
    ) {
      headerParameters['x-apideck-app-id'] = String(
        requestParameters.xApideckAppId
      );
    }

    if (
      requestParameters.xApideckServiceId !== undefined &&
      requestParameters.xApideckServiceId !== null
    ) {
      headerParameters['x-apideck-service-id'] = String(
        requestParameters.xApideckServiceId
      );
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = `Bearer ${this.configuration.apiKey}`;
    }

    if (this.configuration && this.configuration.applicationId) {
      headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
    }

    if (this.configuration && this.configuration.consumerId) {
      headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
    }

    const response = await this.request({
      path: `/crm/companies/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DeleteCompanyResponseFromJSON(jsonValue)
    );
  }

  /**
   * Delete company
   * Delete company
   */
  async companiesDelete(
    requestParameters: CompaniesDeleteRequestInternal
  ): Promise<DeleteCompanyResponse> {
    const response = await this.companiesDeleteRaw(requestParameters);
    return await response.value();
  }

  /**
   * Get company
   * Get company
   */
  async companiesOneRaw(
    requestParameters: CompaniesOneRequestInternal
  ): Promise<runtime.ApiResponse<GetCompanyResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling companiesOne.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.xApideckConsumerId !== undefined &&
      requestParameters.xApideckConsumerId !== null
    ) {
      headerParameters['x-apideck-consumer-id'] = String(
        requestParameters.xApideckConsumerId
      );
    }

    if (
      requestParameters.xApideckAppId !== undefined &&
      requestParameters.xApideckAppId !== null
    ) {
      headerParameters['x-apideck-app-id'] = String(
        requestParameters.xApideckAppId
      );
    }

    if (
      requestParameters.xApideckServiceId !== undefined &&
      requestParameters.xApideckServiceId !== null
    ) {
      headerParameters['x-apideck-service-id'] = String(
        requestParameters.xApideckServiceId
      );
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = `Bearer ${this.configuration.apiKey}`;
    }

    if (this.configuration && this.configuration.applicationId) {
      headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
    }

    if (this.configuration && this.configuration.consumerId) {
      headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
    }

    const response = await this.request({
      path: `/crm/companies/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetCompanyResponseFromJSON(jsonValue)
    );
  }

  /**
   * Get company
   * Get company
   */
  async companiesOne(
    requestParameters: CompaniesOneRequestInternal
  ): Promise<GetCompanyResponse> {
    const response = await this.companiesOneRaw(requestParameters);
    return await response.value();
  }

  /**
   * Update company
   * Update company
   */
  async companiesUpdateRaw(
    requestParameters: CompaniesUpdateRequestInternal
  ): Promise<runtime.ApiResponse<UpdateCompanyResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling companiesUpdate.'
      );
    }

    if (
      requestParameters.company === null ||
      requestParameters.company === undefined
    ) {
      throw new runtime.RequiredError(
        'company',
        'Required parameter requestParameters.company was null or undefined when calling companiesUpdate.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (
      requestParameters.xApideckConsumerId !== undefined &&
      requestParameters.xApideckConsumerId !== null
    ) {
      headerParameters['x-apideck-consumer-id'] = String(
        requestParameters.xApideckConsumerId
      );
    }

    if (
      requestParameters.xApideckAppId !== undefined &&
      requestParameters.xApideckAppId !== null
    ) {
      headerParameters['x-apideck-app-id'] = String(
        requestParameters.xApideckAppId
      );
    }

    if (
      requestParameters.xApideckServiceId !== undefined &&
      requestParameters.xApideckServiceId !== null
    ) {
      headerParameters['x-apideck-service-id'] = String(
        requestParameters.xApideckServiceId
      );
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = `Bearer ${this.configuration.apiKey}`;
    }

    if (this.configuration && this.configuration.applicationId) {
      headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
    }

    if (this.configuration && this.configuration.consumerId) {
      headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
    }

    const response = await this.request({
      path: `/crm/companies/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: CompanyToJSON(requestParameters.company),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpdateCompanyResponseFromJSON(jsonValue)
    );
  }

  /**
   * Update company
   * Update company
   */
  async companiesUpdate(
    requestParameters: CompaniesUpdateRequestInternal
  ): Promise<UpdateCompanyResponse> {
    const response = await this.companiesUpdateRaw(requestParameters);
    return await response.value();
  }
}
