"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
const react_1 = require("react");
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
    // Initialize the state
    const [state, setState] = (0, react_1.useState)(initialState);
    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = (0, react_1.useCallback)(() => setState((state) => !state), []);
    return [state, toggle];
};
exports.useToggle = useToggle;
