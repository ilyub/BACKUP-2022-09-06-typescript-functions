"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.object] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfreeze = exports.sort = exports.some = exports.size = exports.removeUndefinedKeys = exports.omit = exports.merge = exports.map = exports.hasOwnProp = exports.getPrototypeOf = exports.get = exports.freeze = exports.filter = exports.every = exports.clone = exports.values = exports.keys = exports.fromEntries = exports.extend = exports.defineProperty = exports.assign = exports.entries = void 0;
const tslib_1 = require("tslib");
const Accumulator_1 = require("./Accumulator");
const a = tslib_1.__importStar(require("./array"));
const assert = tslib_1.__importStar(require("./assertions"));
const is = tslib_1.__importStar(require("./guards"));
const reflect = tslib_1.__importStar(require("./reflect"));
/**
 * Typed version of Object.assign.
 *
 * @param mutableTarget - Target.
 * @param sources - Sources.
 * @returns Target.
 */
exports.assign = Object.assign;
/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param descriptor - Descriptor.
 */
exports.defineProperty = Object.defineProperty.bind(Object);
exports.extend = Object.assign;
exports.fromEntries = (0, exports.extend)(
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
(entries) => {
    const result = {};
    for (const entry of entries)
        result[entry[0]] = entry[1];
    return result;
}, {
    /**
     * Creates object from entries.
     *
     * @param entries - Entries.
     * @returns Object.
     */
    exhaustive(entries) {
        const result = {};
        for (const entry of entries)
            result[entry[0]] = entry[1];
        // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
        return result;
    }
});
exports.keys = Object.keys;
exports.values = Object.values;
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
/**
 * Checks if every object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
function every(obj, predicate) {
    return _entries(obj).every(([key, value]) => predicate(value, key));
}
exports.every = every;
/**
 * Filters object by predicate.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
function filter(obj, predicate) {
    const result = {};
    for (const [key, value] of _entries(obj))
        if (predicate(value, key))
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
 * Returns object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard for type T.
 * @returns Object property if its type is T.
 * @throws AssertionError otherwise.
 */
function get(obj, key, guard) {
    const value = reflect.get(obj, key);
    assert.byGuard(value, guard);
    return value;
}
exports.get = get;
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
 * Checks if object has property.
 *
 * @param key - Key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
function hasOwnProp(key, obj) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
exports.hasOwnProp = hasOwnProp;
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
function map(obj, callback) {
    return exports.fromEntries.exhaustive(_entries(obj).map(([key, value]) => [key, callback(value, key)]));
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
    const result = new Accumulator_1.Accumulator();
    for (const obj of objects)
        for (const [key, value] of _entries(obj))
            result.push(key, value);
    return (0, exports.fromEntries)(a
        .fromIterable(result)
        .map(([key, arr]) => [key, arr.length === 1 ? arr[0] : arr]));
}
exports.merge = merge;
/**
 * Removes keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to omit.
 * @returns New object.
 */
function omit(obj, ...exclude) {
    const excludeSet = new Set(exclude);
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
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
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
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
    return (0, exports.keys)(obj).length;
}
exports.size = size;
/**
 * Checks if some object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
function some(obj, predicate) {
    return _entries(obj).some(([key, value]) => predicate(value, key));
}
exports.some = some;
function sort(obj, compareFn) {
    return exports.fromEntries.exhaustive(a.sort(_entries(obj), compareFn
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
const _entries = Object.entries;
exports.entries = _entries;
//# sourceMappingURL=object.js.map