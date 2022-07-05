import { Datepicker, DatepickerListItem, Months } from "./../../types/Datepicker";
export declare const getMonths: (year: number) => Months;
export declare const getQuarters: (year: number, months: Months) => {
    key: string;
    label: string;
    value: string;
    items: DatepickerListItem[];
}[];
export declare const useDatepickerData: () => DatepickerListItem[];
export default function useDatepicker(): {
    date: string | null;
    setDatepickerValues: (value: string, key: string, callback: (data: Datepicker | null) => void) => void;
    dateFilter: Datepicker | null;
    clearSelected: (callback: (data: Datepicker | null) => void) => void;
    handleFilterClick: () => void;
    dateFrom: string | null;
    dateTo: string | null;
};
