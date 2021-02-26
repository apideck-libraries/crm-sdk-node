import { Company } from '../models';
export interface CompaniesAddRequestInternal {
    company: Company;
    raw?: boolean;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
}
export interface CompaniesAllRequestInternal {
    raw?: boolean;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
    cursor?: string | null;
    limit?: number;
}
export interface CompaniesDeleteRequestInternal {
    id: string;
    raw?: boolean;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
}
export interface CompaniesOneRequestInternal {
    id: string;
    raw?: boolean;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
}
export interface CompaniesUpdateRequestInternal {
    id: string;
    company: Company;
    raw?: boolean;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
}
export declare type CompaniesAddRequest = Omit<CompaniesAddRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type CompaniesAllRequest = Omit<CompaniesAllRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type CompaniesDeleteRequest = Omit<CompaniesDeleteRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type CompaniesOneRequest = Omit<CompaniesOneRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type CompaniesUpdateRequest = Omit<CompaniesUpdateRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
