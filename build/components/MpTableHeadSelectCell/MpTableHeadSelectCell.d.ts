/// <reference types="react" />
import { MpTableClasses } from "../../types/Table";
import { TableToggleRowsSelectedProps } from "react-table";
interface Props extends TableToggleRowsSelectedProps {
    classes?: MpTableClasses;
    selection: "single" | "multiple";
}
export default function MpTableHeadSelectCell({ classes: overrideClasses, selection, onChange, ...props }: Props): JSX.Element;
export {};
