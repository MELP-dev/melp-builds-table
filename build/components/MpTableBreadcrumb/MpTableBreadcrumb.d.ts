/// <reference types="react" />
import { MpBreadcrumbFilterData } from "../../types/Filter";
import { MpTableGlobalFilterProps } from "../../types/Overridables";
interface IProps extends MpTableGlobalFilterProps {
    data: MpBreadcrumbFilterData;
}
export default function MpTableBreadcrumb({ data, translations, onGlobalFilter, globalFilters, }: IProps): JSX.Element;
export {};
