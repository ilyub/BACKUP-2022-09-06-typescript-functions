/**
 * Removes key.
 *
 * @param map - Map.
 * @param key - Key.
 * @returns Map with key removed.
 */
export function mapDelete(map, key) {
    const result = new Map(map);
    result.delete(key);
    return result;
}
export { mapDelete as delete };
/**
 * Sets key to value.
 *
 * @param map - Map.
 * @param key - Key.
 * @param value - Value.
 * @returns Map with key set to value.
 */
export function set(map, key, value) {
    const result = new Map(map);
    result.set(key, value);
    return result;
}
//# sourceMappingURL=map.js.map