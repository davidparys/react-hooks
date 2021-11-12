"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyPress = void 0;
const react_1 = require("react");
const useKeyPress = (targetKey) => {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = (0, react_1.useState)(false);
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
    // Add event listeners
    (0, react_1.useEffect)(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
};
exports.useKeyPress = useKeyPress;
