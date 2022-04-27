/* eslint-disable deprecation/deprecation -- Wait for next major version */

/**
 * @deprecated Use "Accumulator" class instead.
 */
export type ArrayMap<K extends PropertyKey, T> = ReadonlyMap<K, readonly T[]>;

/**
 * @deprecated Use "Accumulator2" class instead.
 */
export type ArrayMap2<
  K extends PropertyKey,
  L extends PropertyKey,
  T
> = ReadonlyMap<K, ReadonlyMap<L, readonly T[]>>;

/**
 * @deprecated Use "Accumulator" class instead.
 */
export type WritableArrayMap<K extends PropertyKey, T> = Map<K, T[]>;

/**
 * @deprecated Use "Accumulator2" class instead.
 */
export type WritableArrayMap2<
  K extends PropertyKey,
  L extends PropertyKey,
  T
> = Map<K, Map<L, T[]>>;

/**
 * Extracts array from array map.
 *
 * @param key - Key.
 * @param map - Array map.
 * @returns Array.
 * @deprecated Use "Accumulator" class instead.
 */
export function get<K extends PropertyKey, T>(
  key: K,
  map: ArrayMap<K, T>
): readonly T[] {
  return map.get(key) ?? [];
}

/**
 * Extracts array from array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param map - Array map.
 * @returns Array.
 * @deprecated Use "Accumulator2" class instead.
 */
export function get2<K extends PropertyKey, L extends PropertyKey, T>(
  key1: K,
  key2: L,
  map: ArrayMap2<K, L, T>
): readonly T[] {
  return map.get(key1)?.get(key2) ?? [];
}

/**
 * Pushes value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 * @deprecated Use "Accumulator" class instead.
 */
export function push<K extends PropertyKey, T>(
  key: K,
  value: T,
  mutableMap: WritableArrayMap<K, T>
): void {
  const arr = mutableMap.get(key);

  if (arr) arr.push(value);
  else mutableMap.set(key, [value]);
}

/**
 * Pushes value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 * @deprecated Use "Accumulator2" class instead.
 */
export function push2<K extends PropertyKey, L extends PropertyKey, T>(
  key1: K,
  key2: L,
  value: T,
  mutableMap: WritableArrayMap2<K, L, T>
): void {
  const map = mutableMap.get(key1);

  if (map) push(key2, value, map);
  else mutableMap.set(key1, new Map([[key2, [value]]]));
}

/**
 * Unshifts value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 * @deprecated Use "Accumulator" class instead.
 */
export function unshift<K extends PropertyKey, T>(
  key: K,
  value: T,
  mutableMap: WritableArrayMap<K, T>
): void {
  const arr = mutableMap.get(key);

  if (arr) arr.unshift(value);
  else mutableMap.set(key, [value]);
}

/**
 * Unshifts value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 * @deprecated Use "Accumulator2" class instead.
 */
export function unshift2<K extends PropertyKey, L extends PropertyKey, T>(
  key1: K,
  key2: L,
  value: T,
  mutableMap: WritableArrayMap2<K, L, T>
): void {
  const map = mutableMap.get(key1);

  if (map) unshift(key2, value, map);
  else mutableMap.set(key1, new Map([[key2, [value]]]));
}
