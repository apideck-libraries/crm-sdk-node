import { Opportunity } from '../models';
export interface OpportunitiesAddRequestInternal {
    opportunity: Opportunity;
    raw?: boolean;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
}
export interface OpportunitiesAllRequestInternal {
    raw?: boolean;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
    cursor?: string | null;
    limit?: number;
}
export interface OpportunitiesDeleteRequestInternal {
    id: string;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
    raw?: boolean;
}
export interface OpportunitiesOneRequestInternal {
    id: string;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
    raw?: boolean;
}
export interface OpportunitiesUpdateRequestInternal {
    id: string;
    opportunity: Opportunity;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
    raw?: boolean;
}
export declare type OpportunitiesAddRequest = Omit<OpportunitiesAddRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type OpportunitiesAllRequest = Omit<OpportunitiesAllRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type OpportunitiesDeleteRequest = Omit<OpportunitiesDeleteRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type OpportunitiesOneRequest = Omit<OpportunitiesOneRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type OpportunitiesUpdateRequest = Omit<OpportunitiesUpdateRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
