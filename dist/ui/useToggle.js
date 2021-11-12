"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
const react_1 = require("react");
// DESCRIPTION
/**
 *
 * Basically, what this hook does is that, it takes a parameter with value true or false and toggles that value to opposite.
 * It's useful when we want to take some action into it's opposite action, for example: show and hide modal, show more/show less text, open/close side menu.
 */
// Usage
// function App() {
//     // Call the hook which returns, current value and the toggler function
//     const [isTextChanged, setIsTextChanged] = useToggle();
//     return (
//         <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
//     );
// }
// Hook
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
