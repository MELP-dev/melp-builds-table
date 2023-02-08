import { Row } from "react-table";
import { MpTableHighlights } from "../../types/Table";
export declare function useRowHighlights(row: Row, highlights?: MpTableHighlights): {
    inactive: boolean;
    primary: boolean;
    secondary: boolean;
    error: boolean;
    warning: boolean;
    success: boolean;
};
