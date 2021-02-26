import { Lead } from '../models';
export interface LeadsAddRequestInternal {
    lead: Lead;
    raw?: boolean;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
}
export interface LeadsAllRequestInternal {
    raw?: boolean;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
    cursor?: string | null;
    limit?: number;
}
export interface LeadsDeleteRequestInternal {
    id: string;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
    raw?: boolean;
}
export interface LeadsOneRequestInternal {
    id: string;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
    raw?: boolean;
}
export interface LeadsUpdateRequestInternal {
    id: string;
    lead: Lead;
    xApideckConsumerId?: string;
    xApideckAppId?: string;
    xApideckServiceId?: string;
    raw?: boolean;
}
export declare type LeadsAddRequest = Omit<LeadsAddRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type LeadsAllRequest = Omit<LeadsAllRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type LeadsDeleteRequest = Omit<LeadsDeleteRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type LeadsOneRequest = Omit<LeadsOneRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
export declare type LeadsUpdateRequest = Omit<LeadsUpdateRequestInternal, 'xApideckServiceId' | 'xApideckConsumerId' | 'xApideckAppId'> & {
    applicationId?: string;
    consumerId?: string;
    serviceId?: string;
};
