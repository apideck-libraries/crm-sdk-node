export * from './companiesApi';
import { CompaniesApi } from './companiesApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './leadsApi';
import { LeadsApi } from './leadsApi';
export * from './opportunitiesApi';
import { OpportunitiesApi } from './opportunitiesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CompaniesApi, ContactsApi, LeadsApi, OpportunitiesApi];
