/// <reference types="react" />
import { MpTableOverridablesMap } from "../../types/Overridables";
export declare function useOverridables(overridables?: Partial<MpTableOverridablesMap>): {
    paginator: import("react").ComponentType<import("../../types/Overridables").MpTablePaginatorProps>;
    headFilter: import("react").ComponentType<import("../../types/Overridables").MpTableHeadFilterProps>;
    headIndicator: import("react").ComponentType<import("../../types/Overridables").MpTableHeadIndicatorProps>;
    renderers?: Record<string, import("react").ComponentType<import("react-table").CellProps<{}, any>>> | undefined;
    filters?: Record<string, import("react").ComponentType<import("../..").MpFilterProps>> | undefined;
    filterFunctions?: Record<string, "exact" | "text" | "exactText" | "exactTextCase" | "includes" | "includesAll" | "equals" | "between" | import("../..").FilterFunction> | undefined;
    globalActions: import("react").ComponentType<import("../../types/Overridables").MpTableGlobalActionProps>;
};
