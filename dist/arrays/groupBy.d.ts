export declare const groupBy: <T, K extends string | number | symbol>(list: T[], getKey: (item: T) => K) => Record<K, T[]>;
