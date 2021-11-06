"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowDimensions = exports.useCompareSizes = exports.usePreviousValue = exports.groupBy = void 0;
/** https://www.tsmean.com/articles/how-to-write-a-typescript-library/ */
var groupBy_1 = require("./arrays/groupBy");
Object.defineProperty(exports, "groupBy", { enumerable: true, get: function () { return groupBy_1.groupBy; } });
var usePreviousValue_1 = require("./values/usePreviousValue");
Object.defineProperty(exports, "usePreviousValue", { enumerable: true, get: function () { return usePreviousValue_1.usePreviousValue; } });
var useCompareSizes_1 = require("./window-hooks/useCompareSizes");
Object.defineProperty(exports, "useCompareSizes", { enumerable: true, get: function () { return useCompareSizes_1.useCompareSizes; } });
var useWindowDimensions_1 = require("./window-hooks/useWindowDimensions");
Object.defineProperty(exports, "useWindowDimensions", { enumerable: true, get: function () { return useWindowDimensions_1.useWindowDimensions; } });
