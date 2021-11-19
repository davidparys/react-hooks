"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = exports.setCookie = void 0;
const react_1 = require("react");
const isBrowser = typeof window !== "undefined";
const setCookie = (name, value, options) => {
    if (!isBrowser)
        return;
    const optionsWithDefaults = Object.assign({ days: 7, path: "/" }, options);
    const expires = new Date(Date.now() + optionsWithDefaults.days * 864e5).toUTCString();
    document.cookie =
        name +
            "=" +
            encodeURIComponent(value) +
            "; expires=" +
            expires +
            "; path=" +
            optionsWithDefaults.path;
};
exports.setCookie = setCookie;
const getCookie = (name, initialValue) => {
    return ((isBrowser &&
        document.cookie.split("; ").reduce((r, v) => {
            const parts = v.split("=");
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, "")) ||
        initialValue);
};
exports.getCookie = getCookie;
function default_1(key, initialValue) {
    const [item, setItem] = (0, react_1.useState)(() => {
        return (0, exports.getCookie)(key, initialValue);
    });
    const updateItem = (value, options) => {
        setItem(value);
        (0, exports.setCookie)(key, value, options);
    };
    return [item, updateItem];
}
exports.default = default_1;
