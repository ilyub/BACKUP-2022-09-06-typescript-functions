"use strict";
/* disable @skylib/functions/no-restricted-syntax[prefer-o-clone] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = exports.some = exports.size = exports.set = exports.removeUndefinedKeys = exports.omit = exports.map = exports.hasOwnProp = exports.getPrototypeOf = exports.get = exports.filter = exports.every = exports.clone = exports.values = exports.keys = exports.fromEntries = exports.extend = exports.entries = exports.defineProperty = exports.assign = void 0;
const tslib_1 = require("tslib");
/* disable @skylib/functions/no-restricted-syntax[prefer-o-getPrototypeOf] */
/* disable @skylib/functions/no-restricted-syntax[prefer-o-hasOwnProp] */
const core_1 = require("./core");
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
    exhaustive: (entries) => {
        const result = {};
        for (const entry of entries)
            result[entry[0]] = entry[1];
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
function get(obj, key, guard = is.unknown, defVal) {
    var _a;
    return as.byGuard((_a = (0, core_1.indexed)(obj)[key]) !== null && _a !== void 0 ? _a : defVal, guard);
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
    return filter(obj, is.not.empty);
}
exports.removeUndefinedKeys = removeUndefinedKeys;
/**
 * Sets object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param value - Value.
 */
function set(obj, key, value) {
    obj[key] = value;
}
exports.set = set;
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
//# sourceMappingURL=object.js.map