"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete = exports.setDelete = exports.add = void 0;
/**
 * Adds value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value added.
 */
function add(set, value) {
    const result = new Set(set);
    result.add(value);
    return result;
}
exports.add = add;
/**
 * Removes value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value removed.
 */
function setDelete(set, value) {
    const result = new Set(set);
    result.delete(value);
    return result;
}
exports.setDelete = setDelete;
exports.delete = setDelete;
//# sourceMappingURL=set.js.map