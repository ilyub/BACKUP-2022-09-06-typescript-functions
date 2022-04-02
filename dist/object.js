"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.object] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.unfreeze = exports.sort = exports.some = exports.size = exports.removeUndefinedKeys = exports.omit = exports.merge = exports.map = exports.keys = exports.hasOwnProp = exports.getPrototypeOf = exports.fromEntries = exports.freeze = exports.filter = exports.extend = exports.every = exports.entries = exports.defineProperty = exports.clone = exports.assign = void 0;
const tslib_1 = require("tslib");
const a = tslib_1.__importStar(require("./array"));
const is = tslib_1.__importStar(require("./guards"));
exports.assign = Object.assign;
/**
 * Clones object.
 *
 * @param obj - Object.
 * @returns New object.
 */
function clone(obj) {
    return Object.assign({}, obj);
}
exports.clone = clone;
exports.defineProperty = Object.defineProperty.bind(Object);
/**
 * Typed version of Object.entries.
 *
 * @param obj - Object.
 * @returns Object entries.
 */
const _entries = Object.entries;
exports.entries = _entries;
/**
 * Checks that every object property satisfies condition.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
function every(obj, callback) {
    return _entries(obj).every(([key, value]) => callback(value, key));
}
exports.every = every;
exports.extend = Object.assign;
/**
 * Filters object by callback.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
function filter(obj, callback) {
    const result = {};
    for (const [key, value] of _entries(obj))
        if (callback(value, key))
            result[key] = value;
    return result;
}
exports.filter = filter;
/**
 * Marks object as readonly.
 *
 * @param obj - Object.
 * @returns Object.
 */
function freeze(obj) {
    return obj;
}
exports.freeze = freeze;
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
function fromEntries(entries) {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    const result = {};
    for (const entry of entries)
        result[entry[0]] = entry[1];
    return result;
}
exports.fromEntries = fromEntries;
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
fromEntries.exhaustive = (entries) => {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    const result = {};
    for (const entry of entries)
        result[entry[0]] = entry[1];
    return result;
};
/**
 * Returns object prototype.
 *
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
function getPrototypeOf(obj) {
    const prototype = Object.getPrototypeOf(obj);
    return is.object(prototype) ? prototype : undefined;
}
exports.getPrototypeOf = getPrototypeOf;
/**
 * Checks that object has property.
 *
 * @param key - Property key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
function hasOwnProp(key, obj) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
exports.hasOwnProp = hasOwnProp;
exports.keys = Object.keys;
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
function map(obj, callback) {
    return fromEntries.exhaustive(_entries(obj).map(([key, value]) => [key, callback(value, key)]));
}
exports.map = map;
/**
 * Merges objects.
 * If more than one object has the same key, respective values are combined into array.
 *
 * @param objects - Objects.
 * @returns Merged object.
 */
function merge(...objects) {
    const result = new Map();
    for (const obj of objects)
        for (const [key, value] of Object.entries(obj)) {
            const arr = result.get(key);
            if (arr)
                arr.push(value);
            else
                result.set(key, [value]);
        }
    return fromEntries(a
        .fromIterable(result.entries())
        .map(([key, arr]) => [
        key,
        arr.length === 1 ? arr[0] : arr
    ]));
}
exports.merge = merge;
/**
 * Removes keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to remove.
 * @returns New object with given keys omitted.
 */
function omit(obj, ...exclude) {
    const excludeSet = new Set(exclude);
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    return filter(obj, (_value, key) => !excludeSet.has(key));
}
exports.omit = omit;
/**
 * Removes undefined keys.
 *
 * @param obj - Object.
 * @returns New object with undefined keys removed.
 */
function removeUndefinedKeys(obj) {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    return filter(obj, is.not.empty);
}
exports.removeUndefinedKeys = removeUndefinedKeys;
/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
function size(obj) {
    return Object.keys(obj).length;
}
exports.size = size;
/**
 * Checks that some object property satisfies condition.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
function some(obj, callback) {
    return _entries(obj).some(([key, value]) => callback(value, key));
}
exports.some = some;
/**
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
function sort(obj, compareFn) {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    return fromEntries(a.sort(_entries(obj), compareFn
        ? (entry1, entry2) => compareFn(entry1[1], entry2[1], entry1[0], entry2[0])
        : undefined));
}
exports.sort = sort;
/**
 * Marks object as writable.
 *
 * @param obj - Object.
 * @returns Object.
 */
function unfreeze(obj) {
    return obj;
}
exports.unfreeze = unfreeze;
exports.values = Object.values;
//# sourceMappingURL=object.js.map