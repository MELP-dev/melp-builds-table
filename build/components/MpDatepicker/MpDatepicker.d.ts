import { PopperProps } from "@mui/material";
import React from "react";
import { Datepicker, DatepickerListItem, FromToFilterProps } from "../../types/Datepicker";
import { MpTableTranslations } from "../../types/Table";
interface Props {
    items?: DatepickerListItem[];
    placement?: PopperProps["placement"];
    translations?: MpTableTranslations;
    FromToFilter?: React.ComponentType<FromToFilterProps>;
    onGetData: (data: Datepicker) => void;
}
export default function MpDatepicker({ items, placement, translations, FromToFilter, onGetData, }: Props): JSX.Element;
export {};
