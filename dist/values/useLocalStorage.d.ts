/**
 * Sync state to local storage so that it persists through a page refresh.
 * Usage is similar to useState except we pass in a local storage key so that we can default to that value on page load instead of the specified initial value.
 */
export declare const useLocalStorage: <T extends {}>(key: string, initialValue: T) => readonly [T, (value: T | ((val: T) => T)) => void];
