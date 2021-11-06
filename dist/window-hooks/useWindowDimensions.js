"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowDimensions = exports.useWindowSize = void 0;
const react_1 = require("react");
const getWindowDimensions = () => {
    if (typeof window !== "undefined") {
        const { innerWidth: width } = window;
        return width;
    }
    return 0;
};
/*
1. First, we’re importing the getWindowDimensions function from the utils folder.
2. Next, we’re exporting a function called useWindowSize.
3. This function returns the window dimensions.
4. We’re using the useState hook to store the window dimensions.
5. We’re using the getWindowDimensions function to get the window dimensions.
6. We’re returning the window dimensions.
*/
const useWindowSize = () => {
    return getWindowDimensions();
};
exports.useWindowSize = useWindowSize;
const useWindowDimensions = (size) => {
    const checkSizes = (checkSize) => {
        switch (checkSize) {
            case "sm":
                return 640;
            case "md":
                return 768;
            case "lg":
                return 1024;
            case "xl":
                return 1280;
            case "2xl":
                return 1536;
        }
    };
    const [windowDimensions, setWindowDimensions] = (0, react_1.useState)(getWindowDimensions());
    (0, react_1.useEffect)(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    //   console.log("check width sys", checkSizes(size) <= windowDimensions);
    return Boolean(checkSizes(size) >= windowDimensions);
};
exports.useWindowDimensions = useWindowDimensions;
