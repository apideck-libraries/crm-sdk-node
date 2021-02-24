import localVarRequest from 'request';

export * from './companies';
export * from './companiesAdd';
export * from './companiesAddBankAccounts';
export * from './companiesAddResponse';
export * from './companiesDeleteResponse';
export * from './companiesUpdate';
export * from './companiesUpdateResponse';
export * from './company';
export * from './companyData';
export * from './contact';
export * from './contacts';
export * from './contactsAdd';
export * from './contactsAddAddresses';
export * from './contactsAddCustomFields';
export * from './contactsAddEmails';
export * from './contactsAddPhoneNumbers';
export * from './contactsAddResponse';
export * from './contactsAddSocialLinks';
export * from './contactsAddWebsites';
export * from './contactsDeleteResponse';
export * from './contactsUpdate';
export * from './contactsUpdateResponse';
export * from './lead';
export * from './leads';
export * from './leadsAdd';
export * from './leadsAddAddresses';
export * from './leadsAddPhoneNumbers';
export * from './leadsAddResponse';
export * from './leadsAddWebsites';
export * from './leadsDeleteResponse';
export * from './leadsUpdate';
export * from './leadsUpdateResponse';
export * from './modelError';
export * from './opportunities';
export * from './opportunitiesAdd';
export * from './opportunitiesAddResponse';
export * from './opportunitiesDeleteResponse';
export * from './opportunitiesUpdate';
export * from './opportunitiesUpdateResponse';
export * from './opportunity';
export * from './opportunityData';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Companies } from './companies';
import { CompaniesAdd } from './companiesAdd';
import { CompaniesAddBankAccounts } from './companiesAddBankAccounts';
import { CompaniesAddResponse } from './companiesAddResponse';
import { CompaniesDeleteResponse } from './companiesDeleteResponse';
import { CompaniesUpdate } from './companiesUpdate';
import { CompaniesUpdateResponse } from './companiesUpdateResponse';
import { Company } from './company';
import { CompanyData } from './companyData';
import { Contact } from './contact';
import { Contacts } from './contacts';
import { ContactsAdd } from './contactsAdd';
import { ContactsAddAddresses } from './contactsAddAddresses';
import { ContactsAddCustomFields } from './contactsAddCustomFields';
import { ContactsAddEmails } from './contactsAddEmails';
import { ContactsAddPhoneNumbers } from './contactsAddPhoneNumbers';
import { ContactsAddResponse } from './contactsAddResponse';
import { ContactsAddSocialLinks } from './contactsAddSocialLinks';
import { ContactsAddWebsites } from './contactsAddWebsites';
import { ContactsDeleteResponse } from './contactsDeleteResponse';
import { ContactsUpdate } from './contactsUpdate';
import { ContactsUpdateResponse } from './contactsUpdateResponse';
import { Lead } from './lead';
import { Leads } from './leads';
import { LeadsAdd } from './leadsAdd';
import { LeadsAddAddresses } from './leadsAddAddresses';
import { LeadsAddPhoneNumbers } from './leadsAddPhoneNumbers';
import { LeadsAddResponse } from './leadsAddResponse';
import { LeadsAddWebsites } from './leadsAddWebsites';
import { LeadsDeleteResponse } from './leadsDeleteResponse';
import { LeadsUpdate } from './leadsUpdate';
import { LeadsUpdateResponse } from './leadsUpdateResponse';
import { ModelError } from './modelError';
import { Opportunities } from './opportunities';
import { OpportunitiesAdd } from './opportunitiesAdd';
import { OpportunitiesAddResponse } from './opportunitiesAddResponse';
import { OpportunitiesDeleteResponse } from './opportunitiesDeleteResponse';
import { OpportunitiesUpdate } from './opportunitiesUpdate';
import { OpportunitiesUpdateResponse } from './opportunitiesUpdateResponse';
import { Opportunity } from './opportunity';
import { OpportunityData } from './opportunityData';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ContactsAdd.GenderEnum": ContactsAdd.GenderEnum,
        "ContactsAddAddresses.TypeEnum": ContactsAddAddresses.TypeEnum,
        "ContactsAddPhoneNumbers.PhoneTypeEnum": ContactsAddPhoneNumbers.PhoneTypeEnum,
        "ContactsUpdate.GenderEnum": ContactsUpdate.GenderEnum,
        "LeadsAddAddresses.TypeEnum": LeadsAddAddresses.TypeEnum,
        "LeadsAddPhoneNumbers.PhoneTypeEnum": LeadsAddPhoneNumbers.PhoneTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Companies": Companies,
    "CompaniesAdd": CompaniesAdd,
    "CompaniesAddBankAccounts": CompaniesAddBankAccounts,
    "CompaniesAddResponse": CompaniesAddResponse,
    "CompaniesDeleteResponse": CompaniesDeleteResponse,
    "CompaniesUpdate": CompaniesUpdate,
    "CompaniesUpdateResponse": CompaniesUpdateResponse,
    "Company": Company,
    "CompanyData": CompanyData,
    "Contact": Contact,
    "Contacts": Contacts,
    "ContactsAdd": ContactsAdd,
    "ContactsAddAddresses": ContactsAddAddresses,
    "ContactsAddCustomFields": ContactsAddCustomFields,
    "ContactsAddEmails": ContactsAddEmails,
    "ContactsAddPhoneNumbers": ContactsAddPhoneNumbers,
    "ContactsAddResponse": ContactsAddResponse,
    "ContactsAddSocialLinks": ContactsAddSocialLinks,
    "ContactsAddWebsites": ContactsAddWebsites,
    "ContactsDeleteResponse": ContactsDeleteResponse,
    "ContactsUpdate": ContactsUpdate,
    "ContactsUpdateResponse": ContactsUpdateResponse,
    "Lead": Lead,
    "Leads": Leads,
    "LeadsAdd": LeadsAdd,
    "LeadsAddAddresses": LeadsAddAddresses,
    "LeadsAddPhoneNumbers": LeadsAddPhoneNumbers,
    "LeadsAddResponse": LeadsAddResponse,
    "LeadsAddWebsites": LeadsAddWebsites,
    "LeadsDeleteResponse": LeadsDeleteResponse,
    "LeadsUpdate": LeadsUpdate,
    "LeadsUpdateResponse": LeadsUpdateResponse,
    "ModelError": ModelError,
    "Opportunities": Opportunities,
    "OpportunitiesAdd": OpportunitiesAdd,
    "OpportunitiesAddResponse": OpportunitiesAddResponse,
    "OpportunitiesDeleteResponse": OpportunitiesDeleteResponse,
    "OpportunitiesUpdate": OpportunitiesUpdate,
    "OpportunitiesUpdateResponse": OpportunitiesUpdateResponse,
    "Opportunity": Opportunity,
    "OpportunityData": OpportunityData,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
