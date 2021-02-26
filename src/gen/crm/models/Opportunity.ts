/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import {
  CustomField,
  CustomFieldFromJSON,
  CustomFieldFromJSONTyped,
  CustomFieldToJSON,
} from './';

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

export function OpportunityFromJSON(json: any): Opportunity {
  return OpportunityFromJSONTyped(json, false);
}

export function OpportunityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Opportunity {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    title: json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    monetaryAmount: !exists(json, 'monetary_amount')
      ? undefined
      : json['monetary_amount'],
    currency: !exists(json, 'currency') ? undefined : json['currency'],
    winProbability: !exists(json, 'win_probability')
      ? undefined
      : json['win_probability'],
    closeDate: !exists(json, 'close_date')
      ? undefined
      : json['close_date'] === null
      ? null
      : new Date(json['close_date']),
    lossReasonId: !exists(json, 'loss_reason_id')
      ? undefined
      : json['loss_reason_id'],
    pipelineId: !exists(json, 'pipeline_id') ? undefined : json['pipeline_id'],
    pipelineStageId: !exists(json, 'pipeline_stage_id')
      ? undefined
      : json['pipeline_stage_id'],
    sourceId: !exists(json, 'source_id') ? undefined : json['source_id'],
    primaryContactId: json['primary_contact_id'],
    leadId: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    contactId: !exists(json, 'contact_id') ? undefined : json['contact_id'],
    companyId: !exists(json, 'company_id') ? undefined : json['company_id'],
    companyName: !exists(json, 'company_name')
      ? undefined
      : json['company_name'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    priority: !exists(json, 'priority') ? undefined : json['priority'],
    status: !exists(json, 'status') ? undefined : json['status'],
    statusId: !exists(json, 'status_id') ? undefined : json['status_id'],
    tags: !exists(json, 'tags') ? undefined : json['tags'],
    interactionCount: !exists(json, 'interaction_count')
      ? undefined
      : json['interaction_count'],
    customFields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    dateStageChanged: !exists(json, 'date_stage_changed')
      ? undefined
      : json['date_stage_changed'] === null
      ? null
      : new Date(json['date_stage_changed']),
    dateLastContacted: !exists(json, 'date_last_contacted')
      ? undefined
      : json['date_last_contacted'] === null
      ? null
      : new Date(json['date_last_contacted']),
    dateLeadCreated: !exists(json, 'date_lead_created')
      ? undefined
      : json['date_lead_created'] === null
      ? null
      : new Date(json['date_lead_created']),
    updatedBy: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    createdBy: !exists(json, 'created_by') ? undefined : json['created_by'],
    updatedAt: !exists(json, 'updated_at')
      ? undefined
      : new Date(json['updated_at']),
    createdAt: !exists(json, 'created_at')
      ? undefined
      : new Date(json['created_at']),
  };
}

export function OpportunityToJSON(value?: Opportunity | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    title: value.title,
    description: value.description,
    monetary_amount: value.monetaryAmount,
    currency: value.currency,
    win_probability: value.winProbability,
    close_date:
      value.closeDate === undefined
        ? undefined
        : value.closeDate === null
        ? null
        : value.closeDate.toISOString().substr(0, 10),
    loss_reason_id: value.lossReasonId,
    pipeline_id: value.pipelineId,
    pipeline_stage_id: value.pipelineStageId,
    source_id: value.sourceId,
    primary_contact_id: value.primaryContactId,
    lead_id: value.leadId,
    contact_id: value.contactId,
    company_id: value.companyId,
    company_name: value.companyName,
    owner_id: value.ownerId,
    priority: value.priority,
    status: value.status,
    status_id: value.statusId,
    tags: value.tags,
    custom_fields:
      value.customFields === undefined
        ? undefined
        : (value.customFields as Array<any>).map(CustomFieldToJSON),
  };
}
