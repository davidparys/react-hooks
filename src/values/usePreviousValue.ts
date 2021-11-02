import { useEffect, useRef } from "react";

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
export const usePreviousValue = <T extends {}>(value: T): T => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref: any = useRef<T>();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
};
