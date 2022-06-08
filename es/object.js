/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.array] */
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.object] */
import * as is from "./guards";
import * as as from "./inline-assertions";
/**
 * Typed version of Object.assign.
 *
 * @param mutableTarget - Target.
 * @param sources - Sources.
 * @returns Target.
 */
export const assign = Object.assign;
/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param descriptor - Descriptor.
 */
export const defineProperty = Object.defineProperty.bind(Object);
export const entries = Object.entries;
export const extend = Object.assign;
export const fromEntries = extend(
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
export const keys = Object.keys;
export const values = Object.values;
/**
 * Clones object.
 *
 * @param obj - Object.
 * @returns New object.
 */
export function clone(obj) {
    return Object.assign({}, obj);
}
/**
 * Checks if every object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
export function every(obj, predicate) {
    return entries(obj).every(([key, value]) => predicate(value, key));
}
/**
 * Filters object by predicate.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export function filter(obj, predicate) {
    const result = {};
    for (const [key, value] of entries(obj))
        if (predicate(value, key))
            result[key] = value;
    return result;
}
/**
 * Marks object as readonly.
 *
 * @param obj - Object.
 * @returns Object.
 */
export function freeze(obj) {
    return obj;
}
export function get(obj, key, guard = is.unknown, defVal) {
    var _a;
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
    return as.byGuard((_a = obj[key]) !== null && _a !== void 0 ? _a : defVal, guard);
}
/**
 * Returns object prototype.
 *
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
export function getPrototypeOf(obj) {
    const prototype = Object.getPrototypeOf(obj);
    return is.object(prototype) ? prototype : undefined;
}
/**
 * Checks if object has property.
 *
 * @param key - Key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export function hasOwnProp(key, obj) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export function map(obj, callback) {
    return fromEntries.exhaustive(entries(obj).map(([key, value]) => [key, callback(value, key)]));
}
/**
 * Removes keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to omit.
 * @returns New object.
 */
export function omit(obj, ...exclude) {
    const excludeSet = new Set(exclude);
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
    return filter(obj, (_value, key) => !excludeSet.has(key));
}
/**
 * Removes undefined keys.
 *
 * @param obj - Object.
 * @returns New object with undefined keys removed.
 */
export function removeUndefinedKeys(obj) {
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
    return filter(obj, is.not.empty);
}
/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export function size(obj) {
    return keys(obj).length;
}
/**
 * Checks if some object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
export function some(obj, predicate) {
    return entries(obj).some(([key, value]) => predicate(value, key));
}
export function sort(obj, compareFn) {
    const arr = entries(obj);
    arr.sort(compareFn
        ? (entry1, entry2) => compareFn(entry1[1], entry2[1], entry1[0], entry2[0])
        : undefined);
    return fromEntries.exhaustive(arr);
}
/**
 * Marks object as writable.
 *
 * @param obj - Object.
 * @returns Object.
 */
export function unfreeze(obj) {
    return obj;
}
//# sourceMappingURL=object.js.map