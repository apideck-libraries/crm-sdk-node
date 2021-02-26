/* tslint:disable */
/* eslint-disable */

import * as runtime from '../runtime';
import {
  BadRequest,
  BadRequestFromJSON,
  BadRequestToJSON,
  Contact,
  ContactFromJSON,
  ContactToJSON,
  CreateContactResponse,
  CreateContactResponseFromJSON,
  CreateContactResponseToJSON,
  DeleteContactResponse,
  DeleteContactResponseFromJSON,
  DeleteContactResponseToJSON,
  GetContactResponse,
  GetContactResponseFromJSON,
  GetContactResponseToJSON,
  GetContactsResponse,
  GetContactsResponseFromJSON,
  GetContactsResponseToJSON,
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
  UpdateContactResponse,
  UpdateContactResponseFromJSON,
  UpdateContactResponseToJSON,
} from '../models';

export {
  ContactsAddRequest,
  ContactsAllRequest,
  ContactsDeleteRequest,
  ContactsOneRequest,
  ContactsUpdateRequest,
} from './ContactsApiInterface';

import {
  ContactsAddRequestInternal,
  ContactsAllRequestInternal,
  ContactsDeleteRequestInternal,
  ContactsOneRequestInternal,
  ContactsUpdateRequestInternal,
} from './ContactsApiInterface';

/**
 *
 */
export class ContactsApi extends runtime.BaseAPI {
  /**
   * Create contact
   * Create contact
   */
  async contactsAddRaw(
    requestParameters: ContactsAddRequestInternal
  ): Promise<runtime.ApiResponse<CreateContactResponse>> {
    if (
      requestParameters.contact === null ||
      requestParameters.contact === undefined
    ) {
      throw new runtime.RequiredError(
        'contact',
        'Required parameter requestParameters.contact was null or undefined when calling contactsAdd.'
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
      path: `/crm/contacts`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: ContactToJSON(requestParameters.contact),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateContactResponseFromJSON(jsonValue)
    );
  }

  /**
   * Create contact
   * Create contact
   */
  async contactsAdd(
    requestParameters: ContactsAddRequestInternal
  ): Promise<CreateContactResponse> {
    const response = await this.contactsAddRaw(requestParameters);
    return await response.value();
  }

  /**
   * List contacts
   * List contacts
   */
  async contactsAllRaw(
    requestParameters: ContactsAllRequestInternal
  ): Promise<runtime.ApiResponse<GetContactsResponse>> {
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
      path: `/crm/contacts`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetContactsResponseFromJSON(jsonValue)
    );
  }

  /**
   * List contacts
   * List contacts
   */
  async contactsAll(
    requestParameters: ContactsAllRequestInternal
  ): Promise<GetContactsResponse> {
    const response = await this.contactsAllRaw(requestParameters);
    return await response.value();
  }

  /**
   * Delete contact
   * Delete contact
   */
  async contactsDeleteRaw(
    requestParameters: ContactsDeleteRequestInternal
  ): Promise<runtime.ApiResponse<DeleteContactResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling contactsDelete.'
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
      path: `/crm/contacts/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DeleteContactResponseFromJSON(jsonValue)
    );
  }

  /**
   * Delete contact
   * Delete contact
   */
  async contactsDelete(
    requestParameters: ContactsDeleteRequestInternal
  ): Promise<DeleteContactResponse> {
    const response = await this.contactsDeleteRaw(requestParameters);
    return await response.value();
  }

  /**
   * Get contact
   * Get contact
   */
  async contactsOneRaw(
    requestParameters: ContactsOneRequestInternal
  ): Promise<runtime.ApiResponse<GetContactResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling contactsOne.'
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
      path: `/crm/contacts/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetContactResponseFromJSON(jsonValue)
    );
  }

  /**
   * Get contact
   * Get contact
   */
  async contactsOne(
    requestParameters: ContactsOneRequestInternal
  ): Promise<GetContactResponse> {
    const response = await this.contactsOneRaw(requestParameters);
    return await response.value();
  }

  /**
   * Update contact
   * Update contact
   */
  async contactsUpdateRaw(
    requestParameters: ContactsUpdateRequestInternal
  ): Promise<runtime.ApiResponse<UpdateContactResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling contactsUpdate.'
      );
    }

    if (
      requestParameters.contact === null ||
      requestParameters.contact === undefined
    ) {
      throw new runtime.RequiredError(
        'contact',
        'Required parameter requestParameters.contact was null or undefined when calling contactsUpdate.'
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
      path: `/crm/contacts/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: ContactToJSON(requestParameters.contact),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpdateContactResponseFromJSON(jsonValue)
    );
  }

  /**
   * Update contact
   * Update contact
   */
  async contactsUpdate(
    requestParameters: ContactsUpdateRequestInternal
  ): Promise<UpdateContactResponse> {
    const response = await this.contactsUpdateRaw(requestParameters);
    return await response.value();
  }
}
