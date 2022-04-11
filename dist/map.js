"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.delete = void 0;
/**
 * Sets key.
 *
 * @param map - Map.
 * @param key - Key.
 * @param value - Value.
 * @returns Map with key set.
 */
function set(map, key, value) {
    const result = new Map(map);
    result.set(key, value);
    return result;
}
exports.set = set;
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
exports.delete = _delete;
//# sourceMappingURL=map.js.map