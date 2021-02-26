import { CustomField } from './';
/**
 *
 * @export
 * @interface Opportunity
 */
export interface Opportunity {
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    readonly id?: string;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    description?: string | null;
    /**
     *
     * @type {number}
     * @memberof Opportunity
     */
    monetaryAmount?: number;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    currency?: string;
    /**
     *
     * @type {number}
     * @memberof Opportunity
     */
    winProbability?: number | null;
    /**
     *
     * @type {Date}
     * @memberof Opportunity
     */
    closeDate?: Date | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    lossReasonId?: string | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    pipelineId?: string | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    pipelineStageId?: string | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    sourceId?: string;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    primaryContactId: string | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    leadId?: string | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    contactId?: string | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    companyId?: string | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    companyName?: string;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    ownerId?: string | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    priority?: string;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    statusId?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof Opportunity
     */
    tags?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof Opportunity
     */
    readonly interactionCount?: number;
    /**
     *
     * @type {Array<CustomField>}
     * @memberof Opportunity
     */
    customFields?: Array<CustomField>;
    /**
     *
     * @type {Date}
     * @memberof Opportunity
     */
    readonly dateStageChanged?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof Opportunity
     */
    readonly dateLastContacted?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof Opportunity
     */
    readonly dateLeadCreated?: Date | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    readonly updatedBy?: string | null;
    /**
     *
     * @type {string}
     * @memberof Opportunity
     */
    readonly createdBy?: string | null;
    /**
     *
     * @type {Date}
     * @memberof Opportunity
     */
    readonly updatedAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Opportunity
     */
    readonly createdAt?: Date;
}
export declare function OpportunityFromJSON(json: any): Opportunity;
export declare function OpportunityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Opportunity;
export declare function OpportunityToJSON(value?: Opportunity | null): any;
