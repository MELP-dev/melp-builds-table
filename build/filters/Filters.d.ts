import { ComponentType } from "react";
import { MpFilterTypes } from "../types/Table";
import { FilterFunction, MpFilterProps, MpFilterType } from "../types/Filter";
export declare const filterMap: Record<MpFilterType, ComponentType<MpFilterProps>>;
export declare const filterTypeMap: Record<MpFilterType, MpFilterTypes | FilterFunction>;
