/// <reference types="react" />
import { InputBaseProps } from "@mui/material";
import { ColumnInstance, DefaultFilterTypes, Row, UseFiltersColumnProps, UseRowSelectRowProps, UseSortByColumnProps } from "react-table";
import { MpBulkActionMethods, MpActions, MpRowActionMethods, MpRowAction } from "./Actions";
import { MpBreadcrumbFilterData, MpFilter, MpFilterType, MpGlobalFilters } from "./Filter";
import { MpTableOverridablesMap } from "./Overridables";
export declare enum MpColumnFormat {
    currency = "currency",
    percent = "percent",
    date = "date",
    dateTime = "dateTime",
    map = "map"
}
export interface MpColumnFormatOptions {
    type: MpColumnFormat;
    valueMap?: Record<string | number, string | number | boolean> | Array<string | number | boolean>;
    modifier?: string;
}
export declare enum MpColumnRender {
    statusPill = "statusPill",
    toggle = "toggle",
    switch = "switch",
    button = "button",
    input = "input"
}
export interface MpColumnRenderOptions {
    type: MpColumnRender;
    valueMap?: Record<string | number, string | number | boolean> | Array<string | number | boolean>;
    styleMap?: Record<string | number, string | number | boolean> | Array<string | number | boolean>;
}
export interface RtMpColumnInstance extends ColumnInstance, UseSortByColumnProps<{}>, UseFiltersColumnProps<{}> {
    mpColumn: MpColumn;
}
export interface MpColumn {
    key: string;
    label?: string;
    filter?: MpFilterType | MpFilter;
    totals?: boolean;
    sort?: boolean;
    format?: MpColumnFormat | MpColumnFormatOptions;
    render?: MpColumnRender | MpColumnRenderOptions;
    action?: MpRowAction;
    inputProps?: Omit<InputBaseProps, "inputComponent" | "inputRef" | "onBlur" | "onChange">;
    width?: number | string;
    fixedHeadWidth?: boolean;
}
export interface MpTableType {
    columns: MpColumn[];
    rowIdKey: string;
    storageIdentifier?: string;
    cacheFilters?: boolean;
    cacheSorting?: boolean;
    cacheGlobalFilter?: boolean;
    localPagination?: boolean;
    localSorting?: boolean;
    localFiltering?: boolean;
    disablePagination?: boolean;
    disableSorting?: boolean;
    enableGlobalActions?: boolean;
    selection?: "single" | "multiple";
    totals?: boolean;
    stickyTotals?: boolean;
    pageSize?: number;
    size?: "small" | "medium";
    filterVariant?: "head" | "pill";
    bulkActions?: MpActions;
    locale?: string;
    highlights?: MpTableHighlights;
    clearColumnFilters?: boolean;
}
export interface MpTableHighlights {
    inactive?: string;
    primary?: string;
    secondary?: string;
}
export interface MpSortRule {
    key: string;
    desc?: boolean;
}
export interface MpTableDataArguments {
    limit?: number;
    cursor?: number;
    columns: string[];
    sort?: MpSortRule[];
    filters?: Record<string, any>;
    globalFilters?: MpGlobalFilters;
}
export declare type OnGetData = (args: MpTableDataArguments) => void;
export interface MpTableProps<ItemType = any> extends MpTableType, MpTableInputProps<ItemType> {
}
interface MpAsyncGetMethodArguments {
    search?: string;
}
export declare type MpAsyncGetMethod = (options?: MpAsyncGetMethodArguments) => Promise<any>;
export interface MpTableInputProps<ItemType = any> {
    data?: ItemType[];
    onGetData: OnGetData;
    totalsData?: Partial<Record<keyof ItemType, string>>;
    loading?: boolean;
    dataCount?: number;
    classes?: MpTableClasses;
    translations?: MpTableTranslations;
    overridables?: Partial<MpTableOverridablesMap>;
    bulkMethods?: MpBulkActionMethods;
    rowMethods?: MpRowActionMethods;
    asyncGetMethods?: Record<string, MpAsyncGetMethod>;
    onRowClick?: (row?: Row & UseRowSelectRowProps<{}>) => void;
    breadcrumbFilterData?: MpBreadcrumbFilterData;
    onEdit?: (data: ItemType[]) => void;
    onRowsSelected?: (selectedRows: Array<Row<{}>>) => void;
    emptyChildren?: React.ReactNode;
    loadingComponent?: React.ReactNode;
    clearFiltersEvent?: string[];
    resetSelectedRows?: boolean;
}
export interface MpTableClasses {
    tableWrapper?: string;
    table?: string;
    headSelectCellCheckbox?: string;
    headSelectCell?: string;
    selectCell?: string;
    selectCellCheckbox?: string;
    totalsSelectCell?: string;
    highlightedInactive?: string;
    highlightedPrimary?: string;
    highlightedSecondary?: string;
    row?: string;
    rowSelected?: string;
    hoveredCellWithFilters?: string;
}
export interface MpTableTranslations {
    of?: string;
    total?: string;
    previousPage?: string;
    nextPage?: string;
    selected?: string;
    actions?: string;
    from?: string;
    to?: string;
    all?: string;
    clear?: string;
    search?: string;
    allTime?: string;
    breadcrumbs?: {
        [key: string]: string | undefined;
    };
}
export declare type MpFilterTypes = DefaultFilterTypes;
export declare type MpColumnFormatter = (params: {
    value: any;
    locale?: string;
    options?: MpColumnFormatOptions;
}) => string | number | null;
export {};
