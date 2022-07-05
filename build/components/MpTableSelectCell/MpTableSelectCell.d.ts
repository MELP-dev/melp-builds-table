/// <reference types="react" />
import { Row, UseRowSelectRowProps } from "react-table";
import { MpTableClasses } from "../../types/Table";
interface Props {
    row: Row & UseRowSelectRowProps<{}>;
    classes?: MpTableClasses;
    selection: "single" | "multiple";
    toggleAllRowsSelected: (value?: boolean) => void;
}
export default function MpTableSelectCell({ row, selection, toggleAllRowsSelected, classes: overrideClasses, }: Props): JSX.Element;
export {};
