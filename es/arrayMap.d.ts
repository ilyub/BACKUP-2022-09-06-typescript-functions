/**
 * Gets values from array map.
 *
 * @param key - Key.
 * @param map - Array map.
 * @returns Values.
 */
export declare function get<K extends PropertyKey, T>(key: K, map: ReadonlyMap<K, readonly T[]>): readonly T[];
/**
 * Gets values from array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param map - Array map.
 * @returns Values.
 */
export declare function get2<K extends PropertyKey, L extends PropertyKey, T>(key1: K, key2: L, map: ReadonlyMap<K, ReadonlyMap<L, readonly T[]>>): readonly T[];
/**
 * Pushes value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export declare function push<K extends PropertyKey, T>(key: K, value: T, mutableMap: Map<K, T[]>): void;
/**
 * Pushes value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export declare function push2<K extends PropertyKey, L extends PropertyKey, T>(key1: K, key2: L, value: T, mutableMap: Map<K, Map<L, T[]>>): void;
/**
 * Unshift value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export declare function unshift<K extends PropertyKey, T>(key: K, value: T, mutableMap: Map<K, T[]>): void;
/**
 * Pushes value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export declare function unshift2<K extends PropertyKey, L extends PropertyKey, T>(key1: K, key2: L, value: T, mutableMap: Map<K, Map<L, T[]>>): void;
//# sourceMappingURL=arrayMap.d.ts.map