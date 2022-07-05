/// <reference types="react" />
import { DatepickerListItem } from "../../types/Datepicker";
interface IProps {
    data: DatepickerListItem[];
    onClick: (value: string, key: string) => void;
    date: string | null;
}
export default function MpDatepickerItem({ data, onClick, date }: IProps): JSX.Element;
export {};
