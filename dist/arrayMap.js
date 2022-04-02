"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unshift2 = exports.unshift = exports.push2 = exports.push = exports.get2 = exports.get = void 0;
/**
 * Returns array from array map.
 *
 * @param key - Key.
 * @param map - Array map.
 * @returns Array.
 */
function get(key, map) {
    var _a;
    return (_a = map.get(key)) !== null && _a !== void 0 ? _a : [];
}
exports.get = get;
/**
 * Returns array from array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param map - Array map.
 * @returns Array.
 */
function get2(key1, key2, map) {
    var _a, _b;
    return (_b = (_a = map.get(key1)) === null || _a === void 0 ? void 0 : _a.get(key2)) !== null && _b !== void 0 ? _b : [];
}
exports.get2 = get2;
/**
 * Pushes value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
function push(key, value, mutableMap) {
    const arr = mutableMap.get(key);
    if (arr)
        arr.push(value);
    else
        mutableMap.set(key, [value]);
}
exports.push = push;
/**
 * Pushes value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
function push2(key1, key2, value, mutableMap) {
    const map = mutableMap.get(key1);
    if (map)
        push(key2, value, map);
    else
        mutableMap.set(key1, new Map([[key2, [value]]]));
}
exports.push2 = push2;
/**
 * Unshifts value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
function unshift(key, value, mutableMap) {
    const arr = mutableMap.get(key);
    if (arr)
        arr.unshift(value);
    else
        mutableMap.set(key, [value]);
}
exports.unshift = unshift;
/**
 * Unshifts value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
function unshift2(key1, key2, value, mutableMap) {
    const map = mutableMap.get(key1);
    if (map)
        unshift(key2, value, map);
    else
        mutableMap.set(key1, new Map([[key2, [value]]]));
}
exports.unshift2 = unshift2;
//# sourceMappingURL=arrayMap.js.map