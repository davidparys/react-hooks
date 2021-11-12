export declare const useAsync: <T, E = string>(asyncFunction: () => Promise<T>, immediate?: boolean) => {
    execute: () => Promise<void>;
    status: "error" | "idle" | "pending" | "success";
    value: T;
    error: E;
};
