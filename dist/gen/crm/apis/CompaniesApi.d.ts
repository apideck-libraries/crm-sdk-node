import * as runtime from '../runtime';
import { CreateCompanyResponse, DeleteCompanyResponse, GetCompaniesResponse, GetCompanyResponse, UpdateCompanyResponse } from '../models';
export { CompaniesAddRequest, CompaniesAllRequest, CompaniesDeleteRequest, CompaniesOneRequest, CompaniesUpdateRequest, } from './CompaniesApiInterface';
import { CompaniesAddRequestInternal, CompaniesAllRequestInternal, CompaniesDeleteRequestInternal, CompaniesOneRequestInternal, CompaniesUpdateRequestInternal } from './CompaniesApiInterface';
/**
 *
 */
export declare class CompaniesApi extends runtime.BaseAPI {
    /**
     * Create company
     * Create company
     */
    companiesAddRaw(requestParameters: CompaniesAddRequestInternal): Promise<runtime.ApiResponse<CreateCompanyResponse>>;
    /**
     * Create company
     * Create company
     */
    companiesAdd(requestParameters: CompaniesAddRequestInternal): Promise<CreateCompanyResponse>;
    /**
     * List companies
     * List companies
     */
    companiesAllRaw(requestParameters: CompaniesAllRequestInternal): Promise<runtime.ApiResponse<GetCompaniesResponse>>;
    /**
     * List companies
     * List companies
     */
    companiesAll(requestParameters: CompaniesAllRequestInternal): Promise<GetCompaniesResponse>;
    /**
     * Delete company
     * Delete company
     */
    companiesDeleteRaw(requestParameters: CompaniesDeleteRequestInternal): Promise<runtime.ApiResponse<DeleteCompanyResponse>>;
    /**
     * Delete company
     * Delete company
     */
    companiesDelete(requestParameters: CompaniesDeleteRequestInternal): Promise<DeleteCompanyResponse>;
    /**
     * Get company
     * Get company
     */
    companiesOneRaw(requestParameters: CompaniesOneRequestInternal): Promise<runtime.ApiResponse<GetCompanyResponse>>;
    /**
     * Get company
     * Get company
     */
    companiesOne(requestParameters: CompaniesOneRequestInternal): Promise<GetCompanyResponse>;
    /**
     * Update company
     * Update company
     */
    companiesUpdateRaw(requestParameters: CompaniesUpdateRequestInternal): Promise<runtime.ApiResponse<UpdateCompanyResponse>>;
    /**
     * Update company
     * Update company
     */
    companiesUpdate(requestParameters: CompaniesUpdateRequestInternal): Promise<UpdateCompanyResponse>;
}
