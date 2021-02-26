/* tslint:disable */
/* eslint-disable */

import * as runtime from '../runtime';
import {
  BadRequest,
  BadRequestFromJSON,
  BadRequestToJSON,
  CreateOpportunityResponse,
  CreateOpportunityResponseFromJSON,
  CreateOpportunityResponseToJSON,
  DeleteOpportunityResponse,
  DeleteOpportunityResponseFromJSON,
  DeleteOpportunityResponseToJSON,
  GetOpportunitiesResponse,
  GetOpportunitiesResponseFromJSON,
  GetOpportunitiesResponseToJSON,
  GetOpportunityResponse,
  GetOpportunityResponseFromJSON,
  GetOpportunityResponseToJSON,
  NotFoundResponse,
  NotFoundResponseFromJSON,
  NotFoundResponseToJSON,
  Opportunity,
  OpportunityFromJSON,
  OpportunityToJSON,
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
  UpdateOpportunityResponse,
  UpdateOpportunityResponseFromJSON,
  UpdateOpportunityResponseToJSON,
} from '../models';

export {
  OpportunitiesAddRequest,
  OpportunitiesAllRequest,
  OpportunitiesDeleteRequest,
  OpportunitiesOneRequest,
  OpportunitiesUpdateRequest,
} from './OpportunitiesApiInterface';

import {
  OpportunitiesAddRequestInternal,
  OpportunitiesAllRequestInternal,
  OpportunitiesDeleteRequestInternal,
  OpportunitiesOneRequestInternal,
  OpportunitiesUpdateRequestInternal,
} from './OpportunitiesApiInterface';

/**
 *
 */
export class OpportunitiesApi extends runtime.BaseAPI {
  /**
   * Create opportunity
   * Create opportunity
   */
  async opportunitiesAddRaw(
    requestParameters: OpportunitiesAddRequestInternal
  ): Promise<runtime.ApiResponse<CreateOpportunityResponse>> {
    if (
      requestParameters.opportunity === null ||
      requestParameters.opportunity === undefined
    ) {
      throw new runtime.RequiredError(
        'opportunity',
        'Required parameter requestParameters.opportunity was null or undefined when calling opportunitiesAdd.'
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
      path: `/crm/opportunities`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: OpportunityToJSON(requestParameters.opportunity),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateOpportunityResponseFromJSON(jsonValue)
    );
  }

  /**
   * Create opportunity
   * Create opportunity
   */
  async opportunitiesAdd(
    requestParameters: OpportunitiesAddRequestInternal
  ): Promise<CreateOpportunityResponse> {
    const response = await this.opportunitiesAddRaw(requestParameters);
    return await response.value();
  }

  /**
   * List opportunities
   * List opportunities
   */
  async opportunitiesAllRaw(
    requestParameters: OpportunitiesAllRequestInternal
  ): Promise<runtime.ApiResponse<GetOpportunitiesResponse>> {
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
      path: `/crm/opportunities`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetOpportunitiesResponseFromJSON(jsonValue)
    );
  }

  /**
   * List opportunities
   * List opportunities
   */
  async opportunitiesAll(
    requestParameters: OpportunitiesAllRequestInternal
  ): Promise<GetOpportunitiesResponse> {
    const response = await this.opportunitiesAllRaw(requestParameters);
    return await response.value();
  }

  /**
   * Delete opportunity
   * Delete opportunity
   */
  async opportunitiesDeleteRaw(
    requestParameters: OpportunitiesDeleteRequestInternal
  ): Promise<runtime.ApiResponse<DeleteOpportunityResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling opportunitiesDelete.'
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
      path: `/crm/opportunities/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DeleteOpportunityResponseFromJSON(jsonValue)
    );
  }

  /**
   * Delete opportunity
   * Delete opportunity
   */
  async opportunitiesDelete(
    requestParameters: OpportunitiesDeleteRequestInternal
  ): Promise<DeleteOpportunityResponse> {
    const response = await this.opportunitiesDeleteRaw(requestParameters);
    return await response.value();
  }

  /**
   * Get opportunity
   * Get opportunity
   */
  async opportunitiesOneRaw(
    requestParameters: OpportunitiesOneRequestInternal
  ): Promise<runtime.ApiResponse<GetOpportunityResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling opportunitiesOne.'
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
      path: `/crm/opportunities/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetOpportunityResponseFromJSON(jsonValue)
    );
  }

  /**
   * Get opportunity
   * Get opportunity
   */
  async opportunitiesOne(
    requestParameters: OpportunitiesOneRequestInternal
  ): Promise<GetOpportunityResponse> {
    const response = await this.opportunitiesOneRaw(requestParameters);
    return await response.value();
  }

  /**
   * Update opportunity
   * Update opportunity
   */
  async opportunitiesUpdateRaw(
    requestParameters: OpportunitiesUpdateRequestInternal
  ): Promise<runtime.ApiResponse<UpdateOpportunityResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling opportunitiesUpdate.'
      );
    }

    if (
      requestParameters.opportunity === null ||
      requestParameters.opportunity === undefined
    ) {
      throw new runtime.RequiredError(
        'opportunity',
        'Required parameter requestParameters.opportunity was null or undefined when calling opportunitiesUpdate.'
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
      path: `/crm/opportunities/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: OpportunityToJSON(requestParameters.opportunity),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpdateOpportunityResponseFromJSON(jsonValue)
    );
  }

  /**
   * Update opportunity
   * Update opportunity
   */
  async opportunitiesUpdate(
    requestParameters: OpportunitiesUpdateRequestInternal
  ): Promise<UpdateOpportunityResponse> {
    const response = await this.opportunitiesUpdateRaw(requestParameters);
    return await response.value();
  }
}
