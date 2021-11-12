export declare const useLocalStorage: <T extends {}>(key: string, initialValue: T) => readonly [T, (value: T | ((val: T) => T)) => void];
