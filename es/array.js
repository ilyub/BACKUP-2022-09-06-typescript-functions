/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[array] */
import * as _ from "lodash-es";
import * as assert from "./assertions";
import * as is from "./guards";
import * as o from "./object";
import * as reflect from "./reflect";
/**
 * Creates an array of pairs [x1, x2], [x2, x3]...
 *
 * @param arr - Array.
 * @returns An array of pairs.
 */
export function chain(arr) {
    const result = [];
    let prev = first(arr);
    for (const next of arr.slice(1)) {
        result.push([prev, next]);
        prev = next;
    }
    return result;
}
export function clone(arr) {
    return [...arr];
}
/**
 * Removes element from an array.
 *
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
export function drop(arr, index) {
    assert.toBeTrue(index >= 0 && index < arr.length, "Invalid index");
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
/**
 * Finds element matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns The first element matching value if available, _undefined_ otherwise.
 */
export function findBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    return arr.find(element => reduce(element) === reduce(value));
}
/**
 * Gets the first element.
 *
 * @param arr - Array.
 * @returns The first element if available.
 * @throws Error otherwise.
 */
export function first(arr) {
    return get(arr, 0);
}
/**
 * Creates array from iterable.
 *
 * @param iterable - Iterable.
 * @returns Array.
 */
export function fromIterable(iterable) {
    return is.callable(iterable) ? [...iterable()] : [...iterable];
}
/**
 * Creates array from range.
 *
 * @param from - Starting number.
 * @param to - Upper limit (inclusive).
 * @param step - Step.
 * @returns Array of numbers.
 */
export function fromRange(from, to, step = 1) {
    const result = [];
    for (let i = from; i <= to; i += step)
        result.push(i);
    return result;
}
/**
 * Gets element by index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @returns Array element if available.
 * @throws Error otherwise.
 */
export function get(arr, index) {
    assert.toBeTrue(o.hasOwnProp(index, arr), "Invalid index");
    return arr[index];
}
/**
 * Checks that array contains element matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns _True_ if array contains element matching value, _false_ otherwise.
 */
export function includesBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    return arr.some(element => reduce(element) === reduce(value));
}
/**
 * Gets the last element.
 *
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
export function last(arr) {
    return get(arr, arr.length - 1);
}
/**
 * Adds element to the end of array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function push(arr, value) {
    return [...arr, value];
}
/**
 * Picks random element from an array.
 *
 * @param arr - Array.
 * @returns Random element.
 */
export function random(arr) {
    return get(arr, _.random(0, arr.length - 1));
}
/**
 * Removes elements matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements removed.
 */
export function removeBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    return arr.filter(element => reduce(element) !== reduce(value));
}
/**
 * Replaces element.
 *
 * @param arr - Array.
 * @param index - Index to be replaced.
 * @param value - New value.
 * @returns New array with one element replaced.
 */
export function replace(arr, index, value) {
    assert.toBeTrue(index >= 0 && index < arr.length, "Invalid index");
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}
/**
 * Reverses array.
 *
 * @param arr - Array.
 * @returns New reversed array.
 */
export function reverse(arr) {
    return clone(arr).reverse();
}
/**
 * Sorts array.
 *
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New sorted array.
 */
export function sort(arr, compareFn) {
    return clone(arr).sort(compareFn);
}
/**
 * Truncates array.
 *
 * @param mutableArray - Array.
 */
export function truncate(mutableArray) {
    mutableArray.length = 0;
}
/**
 * Creates an array of unique elements.
 *
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns An array of unique elements.
 */
export function uniqueBy(arr, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    const cache = new Set();
    return arr.filter(element => {
        const reduced = reduce(element);
        if (cache.has(reduced))
            return false;
        cache.add(reduced);
        return true;
    });
}
/**
 * Adds element to the beginning of the array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function unshift(arr, value) {
    return [value, ...arr];
}
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
/**
 * Creates reduce function.
 *
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Reduce function.
 */
function toReduce(keyOrReduce) {
    return is.callable(keyOrReduce)
        ? keyOrReduce
        : (obj) => reflect.get(obj, keyOrReduce);
}
//# sourceMappingURL=array.js.map