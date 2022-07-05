/// <reference types="react" />
import { MpBreadcrumbFilterData } from "../../types/Filter";
import { MpTableTranslations } from "../../types/Table";
interface IProps {
    selectedKey: string;
    items: MpBreadcrumbFilterData[];
    onMouseEnter: (key: string, id: string, name: string) => void;
    onClick: (selectedKey: string) => void;
    selectedId: string | undefined;
    translations?: MpTableTranslations;
}
export default function BreadcrumbList({ selectedKey, items, onMouseEnter, selectedId, translations, onClick, }: IProps): JSX.Element;
export {};
