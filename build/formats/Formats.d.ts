import { MpColumnFormat, MpColumnFormatter } from "./../types/Table";
export declare function rawValueKey(key: string): string;
export declare function getRawValue(item: any, key: string): any;
export declare const formatMap: Record<MpColumnFormat, MpColumnFormatter>;
