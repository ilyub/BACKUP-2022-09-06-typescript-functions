/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.object] */
import * as a from "./array";
import * as assert from "./assertions";
import * as is from "./guards";
import * as reflect from "./reflect";
/**
 * Typed version of Object.assign.
 *
 * @param mutableTarget - Target.
 * @param sources - Sources.
 * @returns Target.
 */
export const assign = Object.assign;
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
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param descriptor - Descriptor.
 */
export const defineProperty = Object.defineProperty.bind(Object);
const _entries = Object.entries;
export { _entries as entries };
/**
 * Checks that every object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
export function every(obj, predicate) {
    return _entries(obj).every(([key, value]) => predicate(value, key));
}
export const extend = Object.assign;
/**
 * Filters object by predicate.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export function filter(obj, predicate) {
    const result = {};
    for (const [key, value] of _entries(obj))
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
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
export function fromEntries(entries) {
    const result = {};
    for (const entry of entries)
        result[entry[0]] = entry[1];
    return result;
}
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
fromEntries.exhaustive = (entries) => {
    const result = {};
    for (const entry of entries)
        result[entry[0]] = entry[1];
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
    return result;
};
/**
 * Returns object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard for type T.
 * @returns Object property if its type is T.
 * @throws AssertionError otherwise.
 */
export function get(obj, key, guard) {
    const value = reflect.get(obj, key);
    assert.byGuard(value, guard);
    return value;
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
 * Checks that object has property.
 *
 * @param key - Key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export function hasOwnProp(key, obj) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
export const keys = Object.keys;
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export function map(obj, callback) {
    return fromEntries.exhaustive(_entries(obj).map(([key, value]) => [key, callback(value, key)]));
}
/**
 * Merges objects.
 * If more than one object has the same key, respective values are combined into array.
 *
 * @param objects - Objects.
 * @returns Merged object.
 */
export function merge(...objects) {
    const result = new Map();
    for (const obj of objects)
        for (const [key, value] of _entries(obj)) {
            const arr = result.get(key);
            if (arr)
                arr.push(value);
            else
                result.set(key, [value]);
        }
    return fromEntries(a
        .fromIterable(result)
        // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
        // fixme
        .map(([key, arr]) => [
        key,
        arr.length === 1 ? arr[0] : arr
    ]));
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
 * Checks that some object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
export function some(obj, predicate) {
    return _entries(obj).some(([key, value]) => predicate(value, key));
}
export function sort(obj, compareFn) {
    return fromEntries.exhaustive(a.sort(_entries(obj), compareFn
        ? // eslint-disable-next-line @skylib/prefer-readonly -- Wait for @skylib/eslint-plugin update
            (entry1, entry2) => compareFn(entry1[1], entry2[1], entry1[0], entry2[0])
        : undefined));
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
export const values = Object.values;
//# sourceMappingURL=object.js.map