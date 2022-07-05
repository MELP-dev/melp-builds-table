import { MpBreadcrumbFilterData } from "../../types/Filter";
export declare const getNestedElementsMapReduce: (data: MpBreadcrumbFilterData, selection: {
    [key: string]: {
        id: string | undefined;
        name: string | undefined;
    };
}) => void | {
    [key: string]: MpBreadcrumbFilterData[];
};
