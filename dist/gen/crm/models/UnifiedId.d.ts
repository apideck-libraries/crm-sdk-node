/**
 *
 * @export
 * @interface UnifiedId
 */
export interface UnifiedId {
    /**
     *
     * @type {string}
     * @memberof UnifiedId
     */
    readonly id: string;
}
export declare function UnifiedIdFromJSON(json: any): UnifiedId;
export declare function UnifiedIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedId;
export declare function UnifiedIdToJSON(value?: UnifiedId | null): any;
