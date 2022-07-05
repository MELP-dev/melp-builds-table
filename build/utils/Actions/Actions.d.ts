import { RtMpColumnInstance } from "./../../types/Table";
import { MpBulkActionClickParams, MpRowActionHandlerParams, MpRowAction } from "./../../types/Actions";
export declare const getColumnAction: (column: RtMpColumnInstance) => MpRowAction;
export declare const handleRowAction: (params: MpRowActionHandlerParams) => void;
export declare const handleBulkAction: (params: MpBulkActionClickParams) => void;
