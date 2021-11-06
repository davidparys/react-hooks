"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCompareSizes = void 0;
// return a boolean to determine if the current window size is bigger or smaller than the defined size
const useCompareSizes = (size, width) => {
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
    return width < checkSizes(size);
};
exports.useCompareSizes = useCompareSizes;
