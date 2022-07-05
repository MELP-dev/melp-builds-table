import { MpColumn } from "./../../types/Table";
import { MpGlobalFilters } from "./../../types/Filter";
import { ColumnInstance, TableState, UseFiltersState, UsePaginationState, UseSortByState } from "react-table";
import { MpTableDataArguments } from "../../types/Table";
interface Options {
    state: TableState & UsePaginationState<{}> & UseSortByState<{}> & UseFiltersState<{}>;
    visibleColumns: ColumnInstance<any>[];
    rowIdKey: string;
    localFiltering?: boolean;
    localPagination?: boolean;
    localSorting?: boolean;
    globalFilters?: MpGlobalFilters;
    remoteFiltersColumns?: MpColumn[];
}
export declare function useDataArguments({ state, visibleColumns, localFiltering, localSorting, rowIdKey, localPagination, globalFilters, remoteFiltersColumns, }: Options): MpTableDataArguments;
export {};
