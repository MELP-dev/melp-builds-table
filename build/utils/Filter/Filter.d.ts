import { MpGlobalFilters, MpUseGlobalFilters } from "./../../types/Filter";
import { MpFilter, MpFilterItem } from "../../types/Filter";
import { MpColumn, RtMpColumnInstance } from "../../types/Table";
export declare function useFilterOptions({ filter }: MpColumn): MpFilter | undefined;
export declare function useFilterItems(column: RtMpColumnInstance, filter?: MpFilter): {
    loading?: boolean;
    items?: MpFilterItem[];
    getItems(search?: string): void;
};
export declare const useGlobalFilters: (initialValue: MpGlobalFilters | undefined) => MpUseGlobalFilters;
export declare const useRemoteFilters: (mpColumns: MpColumn[]) => MpColumn[];
export declare function useClearFilters(): {
    clearFiltersEvent: string[] | undefined;
    clearFilters: (filters?: string[] | undefined) => void;
};
