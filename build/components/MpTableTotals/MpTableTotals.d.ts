import { RefObject } from "react";
import { HeaderGroup } from "react-table";
import { MpTableClasses } from "../../types/Table";
interface Props {
    footerGroups: HeaderGroup<{}>[];
    hasSelection?: boolean;
    stickyTotals?: boolean;
    classes?: MpTableClasses;
    bodyRef: RefObject<HTMLTableSectionElement>;
}
export default function MpTableTotals({ footerGroups, hasSelection, stickyTotals, classes: overrideClasses, bodyRef, }: Props): JSX.Element;
export {};
