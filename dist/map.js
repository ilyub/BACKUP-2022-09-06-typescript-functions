"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.delete = exports._delete = void 0;
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
exports._delete = _delete;
exports.delete = _delete;
/**
 * Sets key to value.
 *
 * @param map - Map.
 * @param key - Key.
 * @param value - Value.
 * @returns Map with key set to value.
 */
function set(map, key, value) {
    const result = new Map(map);
    result.set(key, value);
    return result;
}
exports.set = set;
//# sourceMappingURL=map.js.map