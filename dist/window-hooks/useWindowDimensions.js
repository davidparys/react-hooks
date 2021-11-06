"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowDimensions = void 0;
const react_1 = require("react");
// a React hook function that returns the current window dimensions in tailwind's responsive terms
const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = (0, react_1.useState)({
        width: 0,
        height: 0,
    });
    (0, react_1.useEffect)(() => {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
};
exports.useWindowDimensions = useWindowDimensions;
