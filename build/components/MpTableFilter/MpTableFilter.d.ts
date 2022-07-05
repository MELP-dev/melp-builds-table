import { Dispatch, SetStateAction } from "react";
import { MpTableOverridablesMap } from "../../types/Overridables";
import { RtMpColumnInstance } from "../../types/Table";
interface Props {
    column: RtMpColumnInstance;
    value?: any;
    setValue: Dispatch<SetStateAction<any | undefined>>;
    overridables: MpTableOverridablesMap;
    doFiltering(immediateValue?: any): void;
}
export default function MpTableFilter({ column, value, setValue, overridables, doFiltering, }: Props): JSX.Element | null;
export {};
