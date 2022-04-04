export declare type ArrayMap<K extends PropertyKey, T> = ReadonlyMap<K, readonly T[]>;
export declare type ArrayMap2<K extends PropertyKey, L extends PropertyKey, T> = ReadonlyMap<K, ReadonlyMap<L, readonly T[]>>;
export declare type WritableArrayMap<K extends PropertyKey, T> = Map<K, T[]>;
export declare type WritableArrayMap2<K extends PropertyKey, L extends PropertyKey, T> = Map<K, Map<L, T[]>>;
/**
 * Extracts array from array map.
 *
 * @param key - Key.
 * @param map - Array map.
 * @returns Array.
 */
export declare function get<K extends PropertyKey, T>(key: K, map: ArrayMap<K, T>): readonly T[];
/**
 * Extracts array from array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param map - Array map.
 * @returns Array.
 */
export declare function get2<K extends PropertyKey, L extends PropertyKey, T>(key1: K, key2: L, map: ArrayMap2<K, L, T>): readonly T[];
/**
 * Pushes value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export declare function push<K extends PropertyKey, T>(key: K, value: T, mutableMap: WritableArrayMap<K, T>): void;
/**
 * Pushes value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export declare function push2<K extends PropertyKey, L extends PropertyKey, T>(key1: K, key2: L, value: T, mutableMap: WritableArrayMap2<K, L, T>): void;
/**
 * Unshifts value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export declare function unshift<K extends PropertyKey, T>(key: K, value: T, mutableMap: WritableArrayMap<K, T>): void;
/**
 * Unshifts value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export declare function unshift2<K extends PropertyKey, L extends PropertyKey, T>(key1: K, key2: L, value: T, mutableMap: WritableArrayMap2<K, L, T>): void;
//# sourceMappingURL=arrayMap.d.ts.map