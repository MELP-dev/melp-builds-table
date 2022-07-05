import { MpTableOverridablesMap } from "../../types/Overridables";
import { MpColumn } from "../../types/Table";
export declare const getFooterValue: (key: string) => () => string | null;
export declare const convertMpToColumn: (overridables?: Partial<MpTableOverridablesMap> | undefined, disableSorting?: boolean | undefined) => <ItemType extends Object = any>(column: MpColumn) => (import("react-table").ColumnInterface<ItemType> & import("react-table").ColumnInterfaceBasedOnValue<ItemType, any> & {
    Header: string;
} & {
    accessor?: (keyof ItemType extends never ? string | Extract<keyof ItemType, string> | import("react-table").Accessor<ItemType> : import("react-table").Accessor<ItemType>) | undefined;
} & Partial<{
    defaultCanSort: boolean;
    disableSortBy: boolean;
    sortDescFirst: boolean;
    sortInverted: boolean;
    sortType: string | import("react-table").SortByFn<{}>;
}> & Partial<{
    Filter: import("react-table").Renderer<import("react-table").HeaderProps<{}>>;
    disableFilters: boolean;
    defaultCanFilter: boolean;
    filter: string | import("react-table").FilterType<{}>;
}> & {
    mpColumn: MpColumn;
    Footer?: any;
}) | (import("react-table").ColumnInterface<ItemType> & import("react-table").ColumnInterfaceBasedOnValue<ItemType, any> & {
    accessor: keyof ItemType extends never ? import("react-table").IdType<ItemType> : never;
} & {
    accessor?: (keyof ItemType extends never ? string | Extract<keyof ItemType, string> | import("react-table").Accessor<ItemType> : import("react-table").Accessor<ItemType>) | undefined;
} & Partial<{
    defaultCanSort: boolean;
    disableSortBy: boolean;
    sortDescFirst: boolean;
    sortInverted: boolean;
    sortType: string | import("react-table").SortByFn<{}>;
}> & Partial<{
    Filter: import("react-table").Renderer<import("react-table").HeaderProps<{}>>;
    disableFilters: boolean;
    defaultCanFilter: boolean;
    filter: string | import("react-table").FilterType<{}>;
}> & {
    mpColumn: MpColumn;
    Footer?: any;
}) | (import("react-table").ColumnInterface<ItemType> & { [K in keyof ItemType]: {
    accessor: K;
} & import("react-table").ColumnInterfaceBasedOnValue<ItemType, ItemType[K]>; }[keyof ItemType] & Partial<{
    defaultCanSort: boolean;
    disableSortBy: boolean;
    sortDescFirst: boolean;
    sortInverted: boolean;
    sortType: string | import("react-table").SortByFn<{}>;
}> & Partial<{
    Filter: import("react-table").Renderer<import("react-table").HeaderProps<{}>>;
    disableFilters: boolean;
    defaultCanFilter: boolean;
    filter: string | import("react-table").FilterType<{}>;
}> & {
    mpColumn: MpColumn;
    Footer?: any;
});
