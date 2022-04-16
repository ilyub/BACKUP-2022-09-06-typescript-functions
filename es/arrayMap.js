/* eslint-disable deprecation/deprecation -- Wait for next major version */
/**
 * Extracts array from array map.
 *
 * @param key - Key.
 * @param map - Array map.
 * @returns Array.
 * @deprecated Use "Accumulator" class instead.
 */
export function get(key, map) {
    var _a;
    return (_a = map.get(key)) !== null && _a !== void 0 ? _a : [];
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
export function get2(key1, key2, map) {
    var _a, _b;
    return (_b = (_a = map.get(key1)) === null || _a === void 0 ? void 0 : _a.get(key2)) !== null && _b !== void 0 ? _b : [];
}
/**
 * Pushes value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 * @deprecated Use "Accumulator" class instead.
 */
export function push(key, value, mutableMap) {
    const arr = mutableMap.get(key);
    if (arr)
        arr.push(value);
    else
        mutableMap.set(key, [value]);
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
export function push2(key1, key2, value, mutableMap) {
    const map = mutableMap.get(key1);
    if (map)
        push(key2, value, map);
    else
        mutableMap.set(key1, new Map([[key2, [value]]]));
}
/**
 * Unshifts value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 * @deprecated Use "Accumulator" class instead.
 */
export function unshift(key, value, mutableMap) {
    const arr = mutableMap.get(key);
    if (arr)
        arr.unshift(value);
    else
        mutableMap.set(key, [value]);
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
export function unshift2(key1, key2, value, mutableMap) {
    const map = mutableMap.get(key1);
    if (map)
        unshift(key2, value, map);
    else
        mutableMap.set(key1, new Map([[key2, [value]]]));
}
//# sourceMappingURL=arrayMap.js.map