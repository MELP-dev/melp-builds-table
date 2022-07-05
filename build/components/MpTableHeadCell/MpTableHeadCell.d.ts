/// <reference types="react" />
import { TableCommonProps } from "react-table";
import { MpTableClasses, RtMpColumnInstance } from "../../types/Table";
import { MpTableOverridablesMap } from "../../types/Overridables";
interface Props extends TableCommonProps {
    column: RtMpColumnInstance;
    variant?: "simple" | "extended";
    overridables: MpTableOverridablesMap;
    clearFiltersEvent?: string[];
    clearColumnFilters?: boolean;
    classes?: MpTableClasses;
}
export default function MpTableHeadCell({ column, variant, overridables, clearFiltersEvent, clearColumnFilters, classes: overrideClasses, }: Props): JSX.Element;
export {};
