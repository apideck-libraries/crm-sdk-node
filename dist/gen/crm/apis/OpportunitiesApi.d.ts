import * as runtime from '../runtime';
import { CreateOpportunityResponse, DeleteOpportunityResponse, GetOpportunitiesResponse, GetOpportunityResponse, UpdateOpportunityResponse } from '../models';
export { OpportunitiesAddRequest, OpportunitiesAllRequest, OpportunitiesDeleteRequest, OpportunitiesOneRequest, OpportunitiesUpdateRequest, } from './OpportunitiesApiInterface';
import { OpportunitiesAddRequestInternal, OpportunitiesAllRequestInternal, OpportunitiesDeleteRequestInternal, OpportunitiesOneRequestInternal, OpportunitiesUpdateRequestInternal } from './OpportunitiesApiInterface';
/**
 *
 */
export declare class OpportunitiesApi extends runtime.BaseAPI {
    /**
     * Create opportunity
     * Create opportunity
     */
    opportunitiesAddRaw(requestParameters: OpportunitiesAddRequestInternal): Promise<runtime.ApiResponse<CreateOpportunityResponse>>;
    /**
     * Create opportunity
     * Create opportunity
     */
    opportunitiesAdd(requestParameters: OpportunitiesAddRequestInternal): Promise<CreateOpportunityResponse>;
    /**
     * List opportunities
     * List opportunities
     */
    opportunitiesAllRaw(requestParameters: OpportunitiesAllRequestInternal): Promise<runtime.ApiResponse<GetOpportunitiesResponse>>;
    /**
     * List opportunities
     * List opportunities
     */
    opportunitiesAll(requestParameters: OpportunitiesAllRequestInternal): Promise<GetOpportunitiesResponse>;
    /**
     * Delete opportunity
     * Delete opportunity
     */
    opportunitiesDeleteRaw(requestParameters: OpportunitiesDeleteRequestInternal): Promise<runtime.ApiResponse<DeleteOpportunityResponse>>;
    /**
     * Delete opportunity
     * Delete opportunity
     */
    opportunitiesDelete(requestParameters: OpportunitiesDeleteRequestInternal): Promise<DeleteOpportunityResponse>;
    /**
     * Get opportunity
     * Get opportunity
     */
    opportunitiesOneRaw(requestParameters: OpportunitiesOneRequestInternal): Promise<runtime.ApiResponse<GetOpportunityResponse>>;
    /**
     * Get opportunity
     * Get opportunity
     */
    opportunitiesOne(requestParameters: OpportunitiesOneRequestInternal): Promise<GetOpportunityResponse>;
    /**
     * Update opportunity
     * Update opportunity
     */
    opportunitiesUpdateRaw(requestParameters: OpportunitiesUpdateRequestInternal): Promise<runtime.ApiResponse<UpdateOpportunityResponse>>;
    /**
     * Update opportunity
     * Update opportunity
     */
    opportunitiesUpdate(requestParameters: OpportunitiesUpdateRequestInternal): Promise<UpdateOpportunityResponse>;
}
