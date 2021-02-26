import * as runtime from '../runtime';
import { CreateContactResponse, DeleteContactResponse, GetContactResponse, GetContactsResponse, UpdateContactResponse } from '../models';
export { ContactsAddRequest, ContactsAllRequest, ContactsDeleteRequest, ContactsOneRequest, ContactsUpdateRequest, } from './ContactsApiInterface';
import { ContactsAddRequestInternal, ContactsAllRequestInternal, ContactsDeleteRequestInternal, ContactsOneRequestInternal, ContactsUpdateRequestInternal } from './ContactsApiInterface';
/**
 *
 */
export declare class ContactsApi extends runtime.BaseAPI {
    /**
     * Create contact
     * Create contact
     */
    contactsAddRaw(requestParameters: ContactsAddRequestInternal): Promise<runtime.ApiResponse<CreateContactResponse>>;
    /**
     * Create contact
     * Create contact
     */
    contactsAdd(requestParameters: ContactsAddRequestInternal): Promise<CreateContactResponse>;
    /**
     * List contacts
     * List contacts
     */
    contactsAllRaw(requestParameters: ContactsAllRequestInternal): Promise<runtime.ApiResponse<GetContactsResponse>>;
    /**
     * List contacts
     * List contacts
     */
    contactsAll(requestParameters: ContactsAllRequestInternal): Promise<GetContactsResponse>;
    /**
     * Delete contact
     * Delete contact
     */
    contactsDeleteRaw(requestParameters: ContactsDeleteRequestInternal): Promise<runtime.ApiResponse<DeleteContactResponse>>;
    /**
     * Delete contact
     * Delete contact
     */
    contactsDelete(requestParameters: ContactsDeleteRequestInternal): Promise<DeleteContactResponse>;
    /**
     * Get contact
     * Get contact
     */
    contactsOneRaw(requestParameters: ContactsOneRequestInternal): Promise<runtime.ApiResponse<GetContactResponse>>;
    /**
     * Get contact
     * Get contact
     */
    contactsOne(requestParameters: ContactsOneRequestInternal): Promise<GetContactResponse>;
    /**
     * Update contact
     * Update contact
     */
    contactsUpdateRaw(requestParameters: ContactsUpdateRequestInternal): Promise<runtime.ApiResponse<UpdateContactResponse>>;
    /**
     * Update contact
     * Update contact
     */
    contactsUpdate(requestParameters: ContactsUpdateRequestInternal): Promise<UpdateContactResponse>;
}
