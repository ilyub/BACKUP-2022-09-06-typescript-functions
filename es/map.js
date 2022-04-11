export { _delete as delete };
/**
 * Sets key.
 *
 * @param map - Map.
 * @param key - Key.
 * @param value - Value.
 * @returns Map with key set.
 */
export function set(map, key, value) {
    const result = new Map(map);
    result.set(key, value);
    return result;
}
/**
 * Removes key.
 *
 * @param map - Map.
 * @param key - Key.
 * @returns Map with key removed.
 */
function _delete(map, key) {
    const result = new Map(map);
    result.delete(key);
    return result;
}
//# sourceMappingURL=map.js.map