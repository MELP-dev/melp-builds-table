import { Row, IdType } from "react-table";
declare type MpAction = {
    slug: string;
    label: string;
};
export interface MpActions extends Array<MpAction> {
}
export interface MpBulkActionParameters {
    selectedRows?: Array<Row>;
    selectedIds?: Record<IdType<{}>, boolean>;
}
export declare type MpBulkActionCallback = (selected: MpBulkActionParameters) => void;
export interface MpBulkActionClickParams {
    slug: string;
    methods: MpBulkActionMethods;
    selectedRows: Array<Row<{}>>;
    selectedRowIds: Record<IdType<{}>, boolean>;
}
export interface MpBulkActionMethods {
    [slug: string]: MpBulkActionCallback;
}
export interface MpRowActionItem {
    label?: string;
    icon?: string;
    value: number | string;
    color?: string;
    textColor?: string;
}
export interface MpRowAction {
    slug: string;
    label?: string;
    icon?: string;
    value?: number | string;
    color?: string;
    variant?: string;
    labelLeft?: string;
    labelRight?: string;
    iconLeft?: string;
    iconRight?: string;
    textColor?: string;
    items?: MpRowActionItem[];
    defaultValue?: number | string;
}
export interface MpRowActionParameters {
    rowId?: string | number;
    row?: any;
    value?: string | number;
}
export interface MpRowActionHandlerParams {
    slug: string;
    row: any;
    rowId: any;
    value?: string | number | boolean | undefined;
    methods: MpRowActionMethods;
}
export declare type MpRowActionCallback = (current: MpRowActionParameters) => void;
export interface MpRowActionMethods {
    [slug: string]: MpRowActionCallback;
}
export {};
