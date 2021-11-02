"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePreviousValue = void 0;
const react_1 = require("react");
/*
1. We create a ref object that holds the current value.
2. We use useEffect to store the current value in the ref object.
3. We return the previous value from the ref object.
*/
/*
Use the `useRef` hook to create a mutable ref object that you can use to store state across re-renders.

Args:
  value: The value to be stored in the ref object.
  ref: A mutable ref object whose current property can be assigned a new value.
Returns:
  The previous value of the input.
Usage:
  const prevValue: number = usePreviousValue<number>(scrollYValue);
*/
const usePreviousValue = (value) => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = (0, react_1.useRef)();
    // Store current value in ref
    (0, react_1.useEffect)(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
};
exports.usePreviousValue = usePreviousValue;
