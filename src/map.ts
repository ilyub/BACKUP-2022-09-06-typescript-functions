/**
 * Removes key.
 *
 * @param map - Map.
 * @param key - Key.
 * @returns Map with key removed.
 */
export function _delete<K, V>(
  map: ReadonlyMap<K, V>,
  key: K
): ReadonlyMap<K, V> {
  const result = new Map(map);

  result.delete(key);

  return result;
}

export { _delete as delete };

/**
 * Checks that map has key.
 *
 * @param map - Map.
 * @param key - Key.
 * @returns _True_ if map has key, _false_ otherwise.
 */
export function has(map: ReadonlyMap<unknown, unknown>, key: unknown): boolean {
  return map.has(key);
}

/**
 * Sets key to value.
 *
 * @param map - Map.
 * @param key - Key.
 * @param value - Value.
 * @returns Map with key set to value.
 */
export function set<K, V>(
  map: ReadonlyMap<K, V>,
  key: K,
  value: V
): ReadonlyMap<K, V> {
  const result = new Map(map);

  result.set(key, value);

  return result;
}
