"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = exports.useWindowSize = exports.useWindowDimensions = exports.usePreviousValue = void 0;
/** https://www.tsmean.com/articles/how-to-write-a-typescript-library/ */
var usePreviousValue_1 = require("./values/usePreviousValue");
Object.defineProperty(exports, "usePreviousValue", { enumerable: true, get: function () { return usePreviousValue_1.usePreviousValue; } });
var useWindowDimensions_1 = require("./window-hooks/useWindowDimensions");
Object.defineProperty(exports, "useWindowDimensions", { enumerable: true, get: function () { return useWindowDimensions_1.useWindowDimensions; } });
Object.defineProperty(exports, "useWindowSize", { enumerable: true, get: function () { return useWindowDimensions_1.useWindowSize; } });
var groupBy_1 = require("./arrays/groupBy");
Object.defineProperty(exports, "groupBy", { enumerable: true, get: function () { return groupBy_1.groupBy; } });
