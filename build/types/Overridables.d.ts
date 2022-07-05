import React, { ComponentType, Dispatch, SetStateAction } from "react";
import { CellProps, IdType, Row } from "react-table";
import { MpBulkActionMethods, MpActions } from "./Actions";
import { FilterFunction, MpFilterProps, MpGlobalFilter, MpGlobalFilters, MpBreadcrumbFilterData } from "./Filter";
import { MpFilterTypes, MpTableTranslations, RtMpColumnInstance } from "./Table";
export interface MpTablePaginatorProps {
    pageSize: number;
    pageCount?: number;
    itemCount?: number;
    pageIndex: number;
    previousPage(): void;
    nextPage(): void;
    gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
    loading?: boolean;
    selectedCount?: number;
    translations?: MpTableTranslations;
}
export interface MpTableHeadFilterProps {
    column: RtMpColumnInstance;
    canSort?: boolean;
    isSortedDesc?: boolean;
    doSorting(): void;
    doFiltering(immediateValue?: any): void;
    value?: any;
    setValue: Dispatch<SetStateAction<any | undefined>>;
    overridables: MpTableOverridablesMap;
}
export interface MpTableHeadIndicatorProps {
    canSort: boolean;
    isExtended: boolean;
    filterSet: boolean;
    isSortedDesc?: boolean;
    isHoveredCell?: boolean;
    hasClear?: boolean;
    clearFilters?: (e: React.MouseEvent<SVGElement>) => void;
}
export interface MpTableBulkActionProps {
    selectedRows: Array<Row<{}>>;
    selectedRowIds: Record<IdType<{}>, boolean>;
    actions: MpActions;
    methods: MpBulkActionMethods;
    translations?: MpTableTranslations;
}
export interface MpTableGlobalFilterProps {
    onGlobalFilter: (filter: MpGlobalFilter) => void;
    translations?: MpTableTranslations;
    globalFilters?: MpGlobalFilters;
}
export interface MpTableGlobalActionProps extends MpTableBulkActionProps, MpTableGlobalFilterProps {
    breadcrumbFilterData?: MpBreadcrumbFilterData;
}
export interface MpTableOverridablesMap {
    paginator: ComponentType<MpTablePaginatorProps>;
    headFilter: ComponentType<MpTableHeadFilterProps>;
    headIndicator: ComponentType<MpTableHeadIndicatorProps>;
    renderers?: Record<string, ComponentType<CellProps<{}>>>;
    filters?: Record<string, ComponentType<MpFilterProps>>;
    filterFunctions?: Record<string, MpFilterTypes | FilterFunction>;
    globalActions: ComponentType<MpTableGlobalActionProps>;
}
