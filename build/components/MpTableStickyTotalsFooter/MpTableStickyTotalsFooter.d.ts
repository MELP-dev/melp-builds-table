import { TableFooterProps } from "@mui/material";
import { PropsWithChildren, RefObject } from "react";
export default function MpTableStickyTotalsFooter({ children, bodyRef, ...props }: PropsWithChildren<TableFooterProps> & {
    bodyRef: RefObject<HTMLTableSectionElement>;
}): JSX.Element;
