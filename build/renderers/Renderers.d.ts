import { ComponentType } from "react";
import { CellProps } from "react-table";
import { MpColumnRender } from "../types/Table";
export declare const rendererMap: Record<MpColumnRender, ComponentType<CellProps<{}>>>;
