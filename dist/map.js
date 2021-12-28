"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.delete = exports.mapDelete = void 0;
/**
 * Removes key.
 *
 * @param map - Map.
 * @param key - Key.
 * @returns Map with key removed.
 */
function mapDelete(map, key) {
    const result = new Map(map);
    result.delete(key);
    return result;
}
exports.mapDelete = mapDelete;
exports.delete = mapDelete;
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