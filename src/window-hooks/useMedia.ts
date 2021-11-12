import { useState, useEffect } from "react";

// DESCRIPTION
/**
 *
 * This hook makes it super easy to utilize media queries in your component logic.
 * In our example below we render a different number of columns depending on which media query matches the current screen width, and then distribute images amongst the columns in a way that limits column height difference (we don't want one column way longer than the rest).
 * You could create a hook that directly measures screen width instead of using media queries, but this method is nice because it makes it easy to share media queries between JS and your stylesheet.
 */
// USAGE
// function App() {
//   const columnCount = useMedia<number>(
//     // Media queries
//     ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
//     // Column counts (relates to above media queries by array index)
//     [5, 4, 3],
//     // Default column count
//     2
//   );
//   // Create array of column heights (start at 0)
//   let columnHeights = new Array(columnCount).fill(0);
//   // Create array of arrays that will hold each column's items
//   let columns = new Array(columnCount).fill().map(() => []) as Array<
//     DataProps[]
//   >;
//   (data as DataProps[]).forEach((item) => {
//     // Get index of shortest column
//     const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
//     // Add item
//     columns[shortColumnIndex].push(item);
//     // Update height
//     columnHeights[shortColumnIndex] += item.height;
//   });
//   // Render columns and items
//   return (
//     <div className="App">
//       <div className=        ))}
//       </div>
//     </div>
//   );
// }
// Hook
export const useMedia = <T>(
  queries: string[],
  values: T[],
  defaultValue: T
) => {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    // Return related value or defaultValue if none
    return values?.[index] || defaultValue;
  };
  // State and setter for matched value
  const [value, setValue] = useState<T>(getValue);
  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach((mql) => mql.addListener(handler));
      // Remove listeners on cleanup
      return () =>
        mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return value;
};
