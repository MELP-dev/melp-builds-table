/// <reference types="react" />
import { MpRowActionMethods } from "./Actions";
import { MpAsyncGetMethod, MpTableTranslations } from "./Table";
export interface Meta<ItemType = any> {
    totalsData?: Partial<Record<keyof ItemType, string>>;
    size?: "small" | "medium";
    rowMethods?: MpRowActionMethods;
    translations?: MpTableTranslations;
    locale?: string;
    asyncGetMethods?: Record<string, MpAsyncGetMethod>;
    localPagination?: boolean;
    localSorting?: boolean;
    localFiltering?: boolean;
    onInputChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number, id: string | number) => void;
}
