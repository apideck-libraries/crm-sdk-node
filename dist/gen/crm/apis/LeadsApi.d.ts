import * as runtime from '../runtime';
import { CreateLeadResponse, DeleteLeadResponse, GetLeadResponse, GetLeadsResponse, UpdateLeadResponse } from '../models';
export { LeadsAddRequest, LeadsAllRequest, LeadsDeleteRequest, LeadsOneRequest, LeadsUpdateRequest, } from './LeadsApiInterface';
import { LeadsAddRequestInternal, LeadsAllRequestInternal, LeadsDeleteRequestInternal, LeadsOneRequestInternal, LeadsUpdateRequestInternal } from './LeadsApiInterface';
/**
 *
 */
export declare class LeadsApi extends runtime.BaseAPI {
    /**
     * Create lead
     * Create lead
     */
    leadsAddRaw(requestParameters: LeadsAddRequestInternal): Promise<runtime.ApiResponse<CreateLeadResponse>>;
    /**
     * Create lead
     * Create lead
     */
    leadsAdd(requestParameters: LeadsAddRequestInternal): Promise<CreateLeadResponse>;
    /**
     * List leads
     * List leads
     */
    leadsAllRaw(requestParameters: LeadsAllRequestInternal): Promise<runtime.ApiResponse<GetLeadsResponse>>;
    /**
     * List leads
     * List leads
     */
    leadsAll(requestParameters: LeadsAllRequestInternal): Promise<GetLeadsResponse>;
    /**
     * Delete lead
     * Delete lead
     */
    leadsDeleteRaw(requestParameters: LeadsDeleteRequestInternal): Promise<runtime.ApiResponse<DeleteLeadResponse>>;
    /**
     * Delete lead
     * Delete lead
     */
    leadsDelete(requestParameters: LeadsDeleteRequestInternal): Promise<DeleteLeadResponse>;
    /**
     * Get lead
     * Get lead
     */
    leadsOneRaw(requestParameters: LeadsOneRequestInternal): Promise<runtime.ApiResponse<GetLeadResponse>>;
    /**
     * Get lead
     * Get lead
     */
    leadsOne(requestParameters: LeadsOneRequestInternal): Promise<GetLeadResponse>;
    /**
     * Update lead
     * Update lead
     */
    leadsUpdateRaw(requestParameters: LeadsUpdateRequestInternal): Promise<runtime.ApiResponse<UpdateLeadResponse>>;
    /**
     * Update lead
     * Update lead
     */
    leadsUpdate(requestParameters: LeadsUpdateRequestInternal): Promise<UpdateLeadResponse>;
}
