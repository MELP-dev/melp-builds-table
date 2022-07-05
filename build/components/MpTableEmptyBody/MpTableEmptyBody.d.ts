import React from "react";
interface Props {
    cellCount?: number;
    loading?: boolean;
    emptyChildren?: React.ReactNode;
    loadingComponent?: React.ReactNode;
}
export default function MpTableEmptyBody({ cellCount, loading, emptyChildren, loadingComponent, }: Props): JSX.Element;
export {};
