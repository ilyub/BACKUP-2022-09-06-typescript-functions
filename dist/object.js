"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.array] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfreeze = exports.sort = exports.some = exports.size = exports.removeUndefinedKeys = exports.omit = exports.map = exports.hasOwnProp = exports.getPrototypeOf = exports.get = exports.freeze = exports.filter = exports.every = exports.clone = exports.values = exports.keys = exports.fromEntries = exports.extend = exports.entries = exports.defineProperty = exports.assign = void 0;
const tslib_1 = require("tslib");
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.object] */
const is = tslib_1.__importStar(require("./guards"));
const as = tslib_1.__importStar(require("./inline-assertions"));
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
exports.entries = Object.entries;
exports.extend = Object.assign;
exports.fromEntries = (0, exports.extend)(
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
// eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
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
    // eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
    exhaustive: (entries) => {
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
    return (0, exports.entries)(obj).every(([key, value]) => predicate(value, key));
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
    for (const [key, value] of (0, exports.entries)(obj))
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
function get(obj, key, guard = is.unknown, defVal) {
    var _a;
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
    return as.byGuard((_a = obj[key]) !== null && _a !== void 0 ? _a : defVal, guard);
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
    return exports.fromEntries.exhaustive((0, exports.entries)(obj).map(([key, value]) => [key, callback(value, key)]));
}
exports.map = map;
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
    return (0, exports.entries)(obj).some(([key, value]) => predicate(value, key));
}
exports.some = some;
function sort(obj, compareFn) {
    const arr = (0, exports.entries)(obj);
    arr.sort(compareFn
        ? (entry1, entry2) => compareFn(entry1[1], entry2[1], entry1[0], entry2[0])
        : undefined);
    return exports.fromEntries.exhaustive(arr);
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
//# sourceMappingURL=object.js.map