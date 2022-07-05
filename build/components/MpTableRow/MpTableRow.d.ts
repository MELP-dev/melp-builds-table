/// <reference types="react" />
import { Row, UseRowSelectRowProps } from "react-table";
import { MpTableClasses, MpTableHighlights } from "../../types/Table";
interface Props {
    row: Row & UseRowSelectRowProps<{}>;
    selection?: "single" | "multiple";
    classes?: MpTableClasses;
    highlights?: MpTableHighlights;
    toggleAllRowsSelected: (value?: boolean) => void;
    onRowClick?: (row?: Row & UseRowSelectRowProps<{}>) => void;
}
export default function MpTableRow({ row, selection, classes: overrideClasses, toggleAllRowsSelected, highlights, onRowClick, }: Props): JSX.Element;
export {};
