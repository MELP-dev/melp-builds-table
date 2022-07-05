import { Dispatch, SetStateAction } from "react";
import { Row } from "react-table";
import { RtMpColumnInstance } from "./Table";
export declare enum MpFilterType {
    text = "text",
    select = "select",
    searchSelect = "searchSelect",
    numberRange = "numberRange"
}
export declare type FilterFunction = (rows: Row[], columnIds: string[], filterValue: any) => Row[];
export interface MpFilterItem {
    value: string | number | boolean;
    label: string;
}
export interface MpFilter {
    key?: string;
    type: MpFilterType;
    label?: string;
    placeholder?: string;
    unitLabel?: string;
    items?: MpFilterItem[];
    asyncGet?: string;
    format?: string;
    locale?: string;
    remote?: boolean;
}
export interface MpFilterProps {
    column: RtMpColumnInstance;
    value?: any;
    setValue: Dispatch<SetStateAction<any | undefined>>;
    doFiltering(immediateValue?: any): void;
}
export interface MpGlobalFilter {
    key: string;
    value: any;
}
export interface MpGlobalFilters {
    [key: string]: any;
}
export declare type MpUseGlobalFilters = [MpGlobalFilters, {
    setGlobalFilters: (filter: MpGlobalFilter) => void;
}];
export interface MpBreadcrumbFilterData {
    id?: string;
    name?: string;
    [key: string]: MpBreadcrumbFilterData[] | string | undefined;
}
