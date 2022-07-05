import { Dispatch, SetStateAction } from "react";
import { MpTableOverridablesMap } from "../../types/Overridables";
import { RtMpColumnInstance } from "../../types/Table";
interface Props {
    column: RtMpColumnInstance;
    anchorEl?: Element | null;
    canSort?: boolean;
    onClose(): void;
    isSortedDesc?: boolean;
    doSorting(): void;
    overridables: MpTableOverridablesMap;
    clearFiltersEvent?: string[];
    value?: any;
    setValue: Dispatch<SetStateAction<any | undefined>>;
}
export default function MpTableHeadCellOptions({ column, anchorEl, canSort, onClose, isSortedDesc, doSorting, overridables, clearFiltersEvent, value, setValue, }: Props): JSX.Element;
export {};
