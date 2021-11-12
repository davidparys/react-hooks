"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsync = void 0;
const react_1 = require("react");
const useAsync = (asyncFunction, immediate = true) => {
    const [status, setStatus] = (0, react_1.useState)("idle");
    const [value, setValue] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)(null);
    // The execute function wraps asyncFunction and
    // handles setting state for pending, value, and error.
    // useCallback ensures the below useEffect is not called
    // on every render, but only if asyncFunction changes.
    const execute = (0, react_1.useCallback)(() => {
        setStatus("pending");
        setValue(null);
        setError(null);
        return asyncFunction()
            .then((response) => {
            setValue(response);
            setStatus("success");
        })
            .catch((error) => {
            setError(error);
            setStatus("error");
        });
    }, [asyncFunction]);
    // Call execute if we want to fire it right away.
    // Otherwise execute can be called later, such as
    // in an onClick handler.
    (0, react_1.useEffect)(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);
    return { execute, status, value, error };
};
exports.useAsync = useAsync;
