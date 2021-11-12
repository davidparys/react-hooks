/**
 *
 * This hook makes it super easy to utilize media queries in your component logic.
 * In our example below we render a different number of columns depending on which media query matches the current screen width, and then distribute images amongst the columns in a way that limits column height difference (we don't want one column way longer than the rest).
 * You could create a hook that directly measures screen width instead of using media queries, but this method is nice because it makes it easy to share media queries between JS and your stylesheet.
 */
export declare const useMedia: <T>(queries: string[], values: T[], defaultValue: T) => T;
