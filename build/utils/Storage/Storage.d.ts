/// <reference types="react" />
export declare const getFromStorage: (key: string, storage?: Storage) => any;
export declare const useStorage: <T>(key: string, storage?: Storage) => [T | undefined, (value: T) => void];
export declare const useStoredState: <T = any>(key: string, defaultValue: T) => [T, import("react").Dispatch<import("react").SetStateAction<T>>];
