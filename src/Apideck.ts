import * as Crm from './gen/crm';

export class Mapper {
  public static toInternal(
    requestParameters:
      | Crm.CompaniesAllRequest
      | Crm.CompaniesOneRequest
      | Crm.CompaniesAddRequest
      | Crm.CompaniesUpdateRequest
      | Crm.CompaniesDeleteRequest
  ): any {
    const mappedRequestParameters = {
      ...requestParameters,
      xApideckAppId: requestParameters.applicationId,
      xApideckConsumerId: requestParameters.consumerId,
      xApideckServiceId: requestParameters.serviceId,
    };

    return mappedRequestParameters;
  }
}

export class CompaniesApi {
  private companies: Crm.CompaniesApi;
  constructor(readonly config: Crm.Configuration) {
    this.companies = new Crm.CompaniesApi(config);
  }

  async list(parameters: Crm.CompaniesAllRequest) {
    return this.companies.companiesAll(
      Mapper.toInternal(parameters) as Crm.CompaniesAllRequestInternal
    );
  }

  async retrieve(parameters: Crm.CompaniesOneRequest) {
    return this.companies.companiesOne(
      Mapper.toInternal(parameters as Crm.CompaniesOneRequestInternal)
    );
  }

  async create(parameters: Crm.CompaniesAddRequest) {
    return this.companies.companiesAdd(
      Mapper.toInternal(parameters as Crm.CompaniesAddRequestInternal)
    );
  }

  async update(parameters: Crm.CompaniesUpdateRequest) {
    return this.companies.companiesUpdate(
      Mapper.toInternal(parameters) as Crm.CompaniesUpdateRequestInternal
    );
  }

  async delete(parameters: Crm.CompaniesDeleteRequest) {
    return this.companies.companiesDelete(
      Mapper.toInternal(parameters) as Crm.CompaniesDeleteRequestInternal
    );
  }
}
export class ContactsApi {
  private contacts: Crm.ContactsApi;
  constructor(readonly config: Crm.Configuration) {
    this.contacts = new Crm.ContactsApi(config);
  }

  async list(parameters: Crm.ContactsAllRequest) {
    return this.contacts.contactsAll(
      Mapper.toInternal(parameters) as Crm.ContactsAllRequestInternal
    );
  }

  async retrieve(parameters: Crm.ContactsOneRequest) {
    return this.contacts.contactsOne(
      Mapper.toInternal(parameters as Crm.ContactsOneRequestInternal)
    );
  }

  async create(parameters: Crm.ContactsAddRequest) {
    return this.contacts.contactsAdd(
      Mapper.toInternal(parameters as Crm.ContactsAddRequestInternal)
    );
  }

  async update(parameters: Crm.ContactsUpdateRequest) {
    return this.contacts.contactsUpdate(
      Mapper.toInternal(parameters) as Crm.ContactsUpdateRequestInternal
    );
  }

  async delete(parameters: Crm.ContactsDeleteRequest) {
    return this.contacts.contactsDelete(
      Mapper.toInternal(parameters) as Crm.ContactsDeleteRequestInternal
    );
  }
}
export class LeadsApi {
  private leads: Crm.LeadsApi;
  constructor(readonly config: Crm.Configuration) {
    this.leads = new Crm.LeadsApi(config);
  }

  async list(parameters: Crm.LeadsAllRequest) {
    return this.leads.leadsAll(
      Mapper.toInternal(parameters) as Crm.LeadsAllRequestInternal
    );
  }

  async retrieve(parameters: Crm.LeadsOneRequest) {
    return this.leads.leadsOne(
      Mapper.toInternal(parameters as Crm.LeadsOneRequestInternal)
    );
  }

  async create(parameters: Crm.LeadsAddRequest) {
    return this.leads.leadsAdd(
      Mapper.toInternal(parameters as Crm.LeadsAddRequestInternal)
    );
  }

  async update(parameters: Crm.LeadsUpdateRequest) {
    return this.leads.leadsUpdate(
      Mapper.toInternal(parameters) as Crm.LeadsUpdateRequestInternal
    );
  }

  async delete(parameters: Crm.LeadsDeleteRequest) {
    return this.leads.leadsDelete(
      Mapper.toInternal(parameters) as Crm.LeadsDeleteRequestInternal
    );
  }
}
export class OpportunitiesApi {
  private opportunities: Crm.OpportunitiesApi;
  constructor(readonly config: Crm.Configuration) {
    this.opportunities = new Crm.OpportunitiesApi(config);
  }

  async list(parameters: Crm.OpportunitiesAllRequest) {
    return this.opportunities.opportunitiesAll(
      Mapper.toInternal(parameters) as Crm.OpportunitiesAllRequestInternal
    );
  }

  async retrieve(parameters: Crm.OpportunitiesOneRequest) {
    return this.opportunities.opportunitiesOne(
      Mapper.toInternal(parameters as Crm.OpportunitiesOneRequestInternal)
    );
  }

  async create(parameters: Crm.OpportunitiesAddRequest) {
    return this.opportunities.opportunitiesAdd(
      Mapper.toInternal(parameters as Crm.OpportunitiesAddRequestInternal)
    );
  }

  async update(parameters: Crm.OpportunitiesUpdateRequest) {
    return this.opportunities.opportunitiesUpdate(
      Mapper.toInternal(parameters) as Crm.OpportunitiesUpdateRequestInternal
    );
  }

  async delete(parameters: Crm.OpportunitiesDeleteRequest) {
    return this.opportunities.opportunitiesDelete(
      Mapper.toInternal(parameters) as Crm.OpportunitiesDeleteRequestInternal
    );
  }
}

export class CrmApi {
  readonly companies: CompaniesApi;
  readonly contacts: ContactsApi;
  readonly leads: LeadsApi;
  readonly opportunities: OpportunitiesApi;

  constructor(readonly configParameters: Crm.ConfigurationParameters) {
    const config = new Crm.Configuration(configParameters);
    this.companies = new CompaniesApi(config);
    this.contacts = new ContactsApi(config);
    this.leads = new LeadsApi(config);
    this.opportunities = new OpportunitiesApi(config);
  }
}

export class Apideck {
  readonly crm: CrmApi;
  constructor(readonly config: Crm.ConfigurationParameters) {
    this.crm = new CrmApi(config);
  }
}
