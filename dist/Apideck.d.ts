import * as Crm from './gen/crm';
export declare class Mapper {
    static toInternal(requestParameters: Crm.CompaniesAllRequest | Crm.CompaniesOneRequest | Crm.CompaniesAddRequest | Crm.CompaniesUpdateRequest | Crm.CompaniesDeleteRequest): any;
}
export declare class CompaniesApi {
    readonly config: Crm.Configuration;
    private companies;
    constructor(config: Crm.Configuration);
    list(parameters: Crm.CompaniesAllRequest): Promise<Crm.GetCompaniesResponse>;
    retrieve(parameters: Crm.CompaniesOneRequest): Promise<Crm.GetCompanyResponse>;
    create(parameters: Crm.CompaniesAddRequest): Promise<Crm.CreateCompanyResponse>;
    update(parameters: Crm.CompaniesUpdateRequest): Promise<Crm.UpdateCompanyResponse>;
    delete(parameters: Crm.CompaniesDeleteRequest): Promise<Crm.DeleteCompanyResponse>;
}
export declare class ContactsApi {
    readonly config: Crm.Configuration;
    private contacts;
    constructor(config: Crm.Configuration);
    list(parameters: Crm.ContactsAllRequest): Promise<Crm.GetContactsResponse>;
    retrieve(parameters: Crm.ContactsOneRequest): Promise<Crm.GetContactResponse>;
    create(parameters: Crm.ContactsAddRequest): Promise<Crm.CreateContactResponse>;
    update(parameters: Crm.ContactsUpdateRequest): Promise<Crm.UpdateContactResponse>;
    delete(parameters: Crm.ContactsDeleteRequest): Promise<Crm.DeleteContactResponse>;
}
export declare class LeadsApi {
    readonly config: Crm.Configuration;
    private leads;
    constructor(config: Crm.Configuration);
    list(parameters: Crm.LeadsAllRequest): Promise<Crm.GetLeadsResponse>;
    retrieve(parameters: Crm.LeadsOneRequest): Promise<Crm.GetLeadResponse>;
    create(parameters: Crm.LeadsAddRequest): Promise<Crm.CreateLeadResponse>;
    update(parameters: Crm.LeadsUpdateRequest): Promise<Crm.UpdateLeadResponse>;
    delete(parameters: Crm.LeadsDeleteRequest): Promise<Crm.DeleteLeadResponse>;
}
export declare class OpportunitiesApi {
    readonly config: Crm.Configuration;
    private opportunities;
    constructor(config: Crm.Configuration);
    list(parameters: Crm.OpportunitiesAllRequest): Promise<Crm.GetOpportunitiesResponse>;
    retrieve(parameters: Crm.OpportunitiesOneRequest): Promise<Crm.GetOpportunityResponse>;
    create(parameters: Crm.OpportunitiesAddRequest): Promise<Crm.CreateOpportunityResponse>;
    update(parameters: Crm.OpportunitiesUpdateRequest): Promise<Crm.UpdateOpportunityResponse>;
    delete(parameters: Crm.OpportunitiesDeleteRequest): Promise<Crm.DeleteOpportunityResponse>;
}
export declare class CrmApi {
    readonly configParameters: Crm.ConfigurationParameters;
    readonly companies: CompaniesApi;
    readonly contacts: ContactsApi;
    readonly leads: LeadsApi;
    readonly opportunities: OpportunitiesApi;
    constructor(configParameters: Crm.ConfigurationParameters);
}
export declare class Apideck {
    readonly config: Crm.ConfigurationParameters;
    readonly crm: CrmApi;
    constructor(config: Crm.ConfigurationParameters);
}
