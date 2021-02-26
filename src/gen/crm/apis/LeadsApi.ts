/* tslint:disable */
/* eslint-disable */

import * as runtime from '../runtime';
import {
  BadRequest,
  BadRequestFromJSON,
  BadRequestToJSON,
  CreateLeadResponse,
  CreateLeadResponseFromJSON,
  CreateLeadResponseToJSON,
  DeleteLeadResponse,
  DeleteLeadResponseFromJSON,
  DeleteLeadResponseToJSON,
  GetLeadResponse,
  GetLeadResponseFromJSON,
  GetLeadResponseToJSON,
  GetLeadsResponse,
  GetLeadsResponseFromJSON,
  GetLeadsResponseToJSON,
  Lead,
  LeadFromJSON,
  LeadToJSON,
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
  UpdateLeadResponse,
  UpdateLeadResponseFromJSON,
  UpdateLeadResponseToJSON,
} from '../models';

export {
  LeadsAddRequest,
  LeadsAllRequest,
  LeadsDeleteRequest,
  LeadsOneRequest,
  LeadsUpdateRequest,
} from './LeadsApiInterface';

import {
  LeadsAddRequestInternal,
  LeadsAllRequestInternal,
  LeadsDeleteRequestInternal,
  LeadsOneRequestInternal,
  LeadsUpdateRequestInternal,
} from './LeadsApiInterface';

/**
 *
 */
export class LeadsApi extends runtime.BaseAPI {
  /**
   * Create lead
   * Create lead
   */
  async leadsAddRaw(
    requestParameters: LeadsAddRequestInternal
  ): Promise<runtime.ApiResponse<CreateLeadResponse>> {
    if (
      requestParameters.lead === null ||
      requestParameters.lead === undefined
    ) {
      throw new runtime.RequiredError(
        'lead',
        'Required parameter requestParameters.lead was null or undefined when calling leadsAdd.'
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
      path: `/crm/leads`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: LeadToJSON(requestParameters.lead),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateLeadResponseFromJSON(jsonValue)
    );
  }

  /**
   * Create lead
   * Create lead
   */
  async leadsAdd(
    requestParameters: LeadsAddRequestInternal
  ): Promise<CreateLeadResponse> {
    const response = await this.leadsAddRaw(requestParameters);
    return await response.value();
  }

  /**
   * List leads
   * List leads
   */
  async leadsAllRaw(
    requestParameters: LeadsAllRequestInternal
  ): Promise<runtime.ApiResponse<GetLeadsResponse>> {
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
      path: `/crm/leads`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetLeadsResponseFromJSON(jsonValue)
    );
  }

  /**
   * List leads
   * List leads
   */
  async leadsAll(
    requestParameters: LeadsAllRequestInternal
  ): Promise<GetLeadsResponse> {
    const response = await this.leadsAllRaw(requestParameters);
    return await response.value();
  }

  /**
   * Delete lead
   * Delete lead
   */
  async leadsDeleteRaw(
    requestParameters: LeadsDeleteRequestInternal
  ): Promise<runtime.ApiResponse<DeleteLeadResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling leadsDelete.'
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
      path: `/crm/leads/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DeleteLeadResponseFromJSON(jsonValue)
    );
  }

  /**
   * Delete lead
   * Delete lead
   */
  async leadsDelete(
    requestParameters: LeadsDeleteRequestInternal
  ): Promise<DeleteLeadResponse> {
    const response = await this.leadsDeleteRaw(requestParameters);
    return await response.value();
  }

  /**
   * Get lead
   * Get lead
   */
  async leadsOneRaw(
    requestParameters: LeadsOneRequestInternal
  ): Promise<runtime.ApiResponse<GetLeadResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling leadsOne.'
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
      path: `/crm/leads/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetLeadResponseFromJSON(jsonValue)
    );
  }

  /**
   * Get lead
   * Get lead
   */
  async leadsOne(
    requestParameters: LeadsOneRequestInternal
  ): Promise<GetLeadResponse> {
    const response = await this.leadsOneRaw(requestParameters);
    return await response.value();
  }

  /**
   * Update lead
   * Update lead
   */
  async leadsUpdateRaw(
    requestParameters: LeadsUpdateRequestInternal
  ): Promise<runtime.ApiResponse<UpdateLeadResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling leadsUpdate.'
      );
    }

    if (
      requestParameters.lead === null ||
      requestParameters.lead === undefined
    ) {
      throw new runtime.RequiredError(
        'lead',
        'Required parameter requestParameters.lead was null or undefined when calling leadsUpdate.'
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
      path: `/crm/leads/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: LeadToJSON(requestParameters.lead),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpdateLeadResponseFromJSON(jsonValue)
    );
  }

  /**
   * Update lead
   * Update lead
   */
  async leadsUpdate(
    requestParameters: LeadsUpdateRequestInternal
  ): Promise<UpdateLeadResponse> {
    const response = await this.leadsUpdateRaw(requestParameters);
    return await response.value();
  }
}
