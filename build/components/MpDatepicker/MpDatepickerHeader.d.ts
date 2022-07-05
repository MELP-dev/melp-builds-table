import React from "react";
import { MpTableTranslations } from "../../types/Table";
import { FromToFilterProps } from "../../types/Datepicker";
interface Props {
    onSelectAll: () => void;
    date: string | null;
    translations?: MpTableTranslations;
    FromToFilter?: React.ComponentType<FromToFilterProps>;
    filterProps: FromToFilterProps;
}
export default function MpDatepickerHeader({ date, onSelectAll, translations, FromToFilter, filterProps, }: Props): JSX.Element;
export {};
