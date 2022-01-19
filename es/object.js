/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[object] */
import * as a from "./array";
import * as is from "./guards";
/**
 * Typed version of Object.assign.
 *
 * @param mutableTarget - Target object.
 * @param sources - Sources.
 * @returns Target.
 */
export function assign(mutableTarget, ...sources) {
    return Object.assign(mutableTarget, ...sources);
}
/**
 * Creates object copy.
 *
 * @param obj - Object.
 * @returns Object copy.
 */
export function clone(obj) {
    return Object.assign({}, obj);
}
/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Property name.
 * @param descriptor - Descriptor.
 */
export function defineProperty(obj, key, descriptor) {
    Object.defineProperty(obj, key, descriptor);
}
/**
 * Typed version of Object.entries.
 *
 * @param obj - Object.
 * @returns Object entries.
 */
function getEntries(obj) {
    return Object.entries(obj);
}
export { getEntries as entries };
export function extend(target, ...sources) {
    return Object.assign(target, ...sources);
}
/**
 * Filters object by callback.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New filtered object.
 */
export function filter(obj, callback) {
    const result = {};
    for (const [key, value] of getEntries(obj))
        if (callback(value, key))
            result[key] = value;
    return result;
}
/**
 * Marks object as readonly.
 *
 * @param obj - Object.
 * @returns Object marked as readonly.
 */
export function freeze(obj) {
    return obj;
}
/**
 * Marks object as deep readonly.
 *
 * @param obj - Object.
 * @returns Object marked as deep readonly.
 */
export function freezeDeep(obj) {
    return obj;
}
freeze.deep = freezeDeep;
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
fromEntries.exhaustive = fromEntries;
/**
 * Typed version of Object.getPrototypeOf.
 *
 * @param obj - Object.
 * @returns Prototype if available, _undefined_ otherwise.
 */
export function getPrototypeOf(obj) {
    const prototype = Object.getPrototypeOf(obj);
    return is.object(prototype) ? prototype : undefined;
}
/**
 * Alias of Object.prototype.hasOwnProperty.
 *
 * @param key - Property name.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export function hasOwnProp(key, obj) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
/**
 * Typed version of Object.keys.
 *
 * @param obj - Object.
 * @returns Object keys.
 */
export function keys(obj) {
    return Object.keys(obj);
}
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export function map(obj, callback) {
    return fromEntries.exhaustive(Object.entries(obj).map(([key, value]) => [
        key,
        callback(value, key)
    ]));
}
/**
 * Merges several objects.
 * If more than one object has the same key, respective values are combined into array.
 *
 * @param objects - Objects.
 * @returns Merged object.
 */
export function merge(...objects) {
    const pool = {};
    for (const obj of objects)
        for (const [key, value] of Object.entries(obj)) {
            const valuesByKey = pool[key];
            if (valuesByKey)
                valuesByKey.push(value);
            else
                pool[key] = [value];
        }
    return fromEntries(Object.entries(pool).map(([key, valuesByKey]) => [
        key,
        valuesByKey.length === 1 ? valuesByKey[0] : valuesByKey
    ]));
}
/**
 * Omits keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to exclude.
 * @returns New object with given keys omitted.
 */
export function omit(obj, ...exclude) {
    const keysSet = new Set(exclude);
    return filter(obj, (_value, key) => !keysSet.has(key));
}
export function removeUndefinedKeys(obj) {
    return filter(obj, is.not.empty);
}
/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export function size(obj) {
    return Object.keys(obj).length;
}
/**
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export function sort(obj, compareFn) {
    return fromEntries(a.sort(getEntries(obj), compareFn));
}
/**
 * Marks object as writable.
 *
 * @param obj - Object.
 * @returns Object marked as writable.
 */
export function unfreeze(obj) {
    return obj;
}
/**
 * Marks object as deep writable.
 *
 * @param obj - Object.
 * @returns Object marked as deep writable.
 */
export function unfreezeDeep(obj) {
    return obj;
}
unfreeze.deep = unfreezeDeep;
/**
 * Typed version of Object.values.
 *
 * @param obj - Object.
 * @returns Object values.
 */
export function values(obj) {
    return Object.values(obj);
}
//# sourceMappingURL=object.js.map