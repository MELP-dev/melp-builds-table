/// <reference types="react" />
import { MpColumn } from "../../types/Table";
export declare function useDataFormatters<ItemType>(data: ItemType[], columns: MpColumn[], locale?: string): [ItemType[], (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number, id: string | number) => void];
