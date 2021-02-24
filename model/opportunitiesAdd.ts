/**
 * CRM API
 * ## Welcome to the CRM API.  You can use this API to access all CRM endpoints.  If you are working with APIs, you are probably already familiar with Postman, a development tool that enables you to configure and run API requests. Click the button below to run the collection.  [![Run our CRM API in Postman](https://app.apideck.com/images/postman-button.svg)](https://www.postman.com/apideck/workspace/unified-apis/overview)  ## Base URL  The base URL for all API requests is `https://unify.apideck.com/crm`  ## GraphQL  Use the [GraphQL playground](https://unify.apideck.com/graphql) to test out the GraphQL API.  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description                                                                                                                                                    | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      | | x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             | | Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |  ## Authorization  You can interact with the API through the authorization methods below.  <!-- ReDoc-Inject: <security-definitions> -->  ## Connectors  Supported connectors and endpoints  | Service ID                                                      | Status            | v*         | Custom fields | Webhooks  | | --------------------------------------------------------------- | ----------------- | ---------- | ------------- | --------- | | [ActiveCampaign](https://www.activecampaign.com/)               | &#128736;&#65039; | 3          | &#128284;     | &#128284; | | [Auth0](https://auth0.com)                                      | &#128736;&#65039; | 2          | &#128284;     | &#128284; | | [Close](https://close.com)                                      | &#128736;&#65039; | 1.0.0      | &#128284;     | &#128284; | | [Copper](https://www.copper.com/)                               | &#9989;           | 1.0.0      | &#9989;       | &#128284; | | [Customer.io](https://customer.io/)                             | &#128736;&#65039; |            | &#128284;     | &#128284; | | [HubSpot](https://www.hubspot.com/)                             | &#128736;&#65039; | 1.0.0      | &#128284;     | &#128284; | | [Microsoft Dynamics CRM](https://dynamics.microsoft.com/en-us/) | &#128736;&#65039; | 1          | &#128284;     | &#128284; | | [Mixmax](https://mixmax.com)                                    | &#128736;&#65039; | 0.1.0      | &#128284;     | &#128284; | | [Pipedrive](https://www.pipedrive.com/)                         | &#128736;&#65039; | 1.0.0      | &#128284;     | &#128284; | | [Reply](https://reply.io)                                       | &#128736;&#65039; | 1.0        | &#128284;     | &#128284; | | [Salesflare](https://salesflare.com)                            | &#128736;&#65039; | 0.0.1      | &#128284;     | &#128284; | | [Salesforce](https://www.salesforce.com)                        | &#9989;           | v39.0      | &#9989;       | &#128284; | | [Teamleader](https://www.teamleader.eu/)                        | &#128736;&#65039; | 2019-01-24 | &#128284;     | &#128284; | | [Zendesk Sell](https://www.zendesk.com/sell/)                   | &#128736;&#65039; | 2.0        | &#128284;     | &#128284; | | [Zoho CRM](https://www.zoho.com/crm/)                           | &#9989;           | 2.0        | &#9989;       | &#128284; |  | &#9989; <span style=\"font-size:0.75em\">Available for implementation</span> | - <span style=\"font-size:0.75em\">Not Supported</span>        | &#128736;&#65039; <span style=\"font-size:0.75em\">In Development</span> | | -------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------- | | * <span style=\"font-size:0.75em\">Latest supported API version</span>       | &#128284; <span style=\"font-size:0.75em\">Coming Soon!</span> |                                                                        |  ## SDKs and API Clients  Upcoming. [Request the SDK of your choice](https://integrations.apideck.com/request).  ## Debugging  Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.  ## Errors  The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.  | Code | Title                | Description                                                                                                                                                                                              | | ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                | | 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              | | 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          | | 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. | | 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              | | 402  | Payment Required     | Subscription data is incomplete or out of date. You\'ll need to provide payment details to continue.                                                                                                      | | 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            | | 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           | | 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      | | 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     | | 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |  ### Handling errors  The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.  ### Error Types  #### MissingParamsError  Request is missing parameters from either path of body. Missing required params are described in the error detail of response.  #### MissingHeadersError  Request was made missing one of the required headers. Missing headers are described in the error detail of response. Check the documentation for the request you are making. One or more of the following will be required: `x-apideck-app-id`, `x-apideck-consumer-id`, `x-apideck-service-id`  #### SpecRequestValidationError  Input variables are not aligned with the open-api spec. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the the specification.  #### ConnectorExecutionError  A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.  #### UnauthorizedError  We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: \'Bearer sk_live_***\'`  #### ConnectorCredentialsError  A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.  #### ConnectorDisabledError  A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.  #### RequestLimitError  You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.  #### EntityNotFoundError  You\'ve made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.  #### CredentialsNotFoundError  When adding a connector integration that implement OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.  #### IntegrationNotFoundError  The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.  #### ConnectionNotFoundError  A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.  #### ConnectorNotFoundError  A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.  #### RedirectUriError  A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.  #### InvalidStateError  The state param is required and is used to ensure the outgoing authorization state has not been altered before user id redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.  #### AuthCodeExchangeError  When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.  #### MappingError  There was an error attempting to retrieve the mapping for a given attribute. We\'ve been notified and are working to fix this issue.  #### ConnectorMappingNotFoundError  It seems the implementation for this connector is incomplete. It\'s possible this connector is in `beta` or still under development. We\'ve been notified and are working to fix this issue.  #### ConnectorResponseMappingNotFoundError  We were unable to retrieve the response mapping for this connector. It\'s possible this connector is in `beta` or still under development. We\'ve been notified and are working to fix this issue.  #### ConnectorOperationMappingNotFoundError  Connector mapping has not been implemented for the requested operation. It\'s possible this connector is in `beta` or still under development. We\'ve been notified and are working to fix this issue.  #### ConnectorWorkflowMappingError  The composite api calls required for this operation have not been mapped entirely. It\'s possible this connector is in `beta` or still under development. We\'ve been notified and are working to fix this issue.  ## API Design  ### API Styles and data formats  #### REST API  The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.  ##### Available HTTP methods  The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \\_method.  ``` POST /messages GET /messages GET /messages/{messageId} PATCH /messages/{messageId} DELETE /messages/{messageId} ```  Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.  ### Schema  All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.  ### Meta  Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.  ### Idempotence (upcoming)  To prevent the creation of duplicate resources, every POST method (such as one that creates a consumer record) must specify a unique value for the X-Unique-Transaction-ID header name. Uniquely identifying each unique POST request ensures that the API processes a given request once and only once.  Uniquely identifying new resource-creation POSTs is especially important when the outcome of a response is ambiguous because of a transient service interruption, such as a server-side timeout or network disruption. If a service interruption occurs, then the client application can safely retry the uniquely identified request without creating duplicate operations. (API endpoints that guarantee that every uniquely identified request is processed only once no matter how many times that uniquely identifiable request is made are described as idempotent.)  ### Request IDs  Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.  ### Fixed field types  #### Dates  The dates returned by the API are all represented in UTC (ISO8601 format).  This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced \"Zulu\" per military/aviation tradition.  The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.  #### Prices and Currencies  All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).  For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.  All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).  ## Support  If you have problems or need help with your case, you can always reach out to our Support. 
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: hello@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CustomFields } from './customFields';

export class OpportunitiesAdd {
    'title': string;
    'description'?: string;
    'monetaryAmount'?: number;
    'currency'?: string | null;
    'winProbability'?: number | null;
    'closeDate'?: string | null;
    'lossReasonId'?: string | null;
    'pipelineId'?: string | null;
    'pipelineStageId'?: string | null;
    'sourceId'?: string;
    'primaryContactId': string;
    'leadId'?: string | null;
    'contactId'?: string | null;
    'companyId'?: string | null;
    'companyName'?: string;
    'ownerId'?: string | null;
    'priority'?: string;
    'status'?: string | null;
    'statusId'?: string | null;
    'tags'?: Array<string>;
    'customFields'?: CustomFields;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "monetaryAmount",
            "baseName": "monetary_amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "winProbability",
            "baseName": "win_probability",
            "type": "number"
        },
        {
            "name": "closeDate",
            "baseName": "close_date",
            "type": "string"
        },
        {
            "name": "lossReasonId",
            "baseName": "loss_reason_id",
            "type": "string"
        },
        {
            "name": "pipelineId",
            "baseName": "pipeline_id",
            "type": "string"
        },
        {
            "name": "pipelineStageId",
            "baseName": "pipeline_stage_id",
            "type": "string"
        },
        {
            "name": "sourceId",
            "baseName": "source_id",
            "type": "string"
        },
        {
            "name": "primaryContactId",
            "baseName": "primary_contact_id",
            "type": "string"
        },
        {
            "name": "leadId",
            "baseName": "lead_id",
            "type": "string"
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "company_id",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "company_name",
            "type": "string"
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "statusId",
            "baseName": "status_id",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "CustomFields"
        }    ];

    static getAttributeTypeMap() {
        return OpportunitiesAdd.attributeTypeMap;
    }
}

