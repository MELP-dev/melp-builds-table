export declare type DatepickerKey = "month" | "year" | "quarter" | "dateFrom" | "dateTo";
export interface Datepicker {
    dateFrom?: string;
    dateTo?: string;
}
export interface DatepickerListItem {
    key: DatepickerKey | string;
    label: string;
    value: string;
    items?: DatepickerListItem[];
}
export interface Months {
    q1: DatepickerListItem[];
    q2: DatepickerListItem[];
    q3: DatepickerListItem[];
    q4: DatepickerListItem[];
}
export interface FromToFilterProps {
    onFilter: () => void;
    onDateChange: (value: string, key: "dateFrom" | "dateTo", callback: (data: Datepicker | null) => void) => void;
    dateFrom: string | null;
    dateTo: string | null;
    onGetData: (data: Datepicker | null) => void;
}
