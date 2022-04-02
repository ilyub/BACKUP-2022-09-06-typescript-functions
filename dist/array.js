"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.array] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unshiftOrReplaceBy = exports.unshift = exports.uniqueBy = exports.truncate = exports.toggleBy = exports.sort = exports.reverse = exports.replaceBy = exports.replace = exports.removeBy = exports.random = exports.pushOrReplaceBy = exports.push = exports.last = exports.includesBy = exports.get = exports.fromString = exports.fromRange = exports.fromIterable = exports.first = exports.findBy = exports.drop = exports.clone = exports.chain = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash"));
const assert = tslib_1.__importStar(require("./assertions"));
const is = tslib_1.__importStar(require("./guards"));
const o = tslib_1.__importStar(require("./object"));
const reflect = tslib_1.__importStar(require("./reflect"));
/**
 * Creates array of pairs ("[x, y, z]" =\> "[[x, y], [y, z]]").
 *
 * @param arr - Array.
 * @returns Array of pairs.
 */
function chain(arr) {
    const result = [];
    let prev = first(arr);
    for (const next of arr.slice(1)) {
        result.push([prev, next]);
        prev = next;
    }
    return result;
}
exports.chain = chain;
function clone(arr) {
    return [...arr];
}
exports.clone = clone;
/**
 * Removes element from an array.
 *
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
function drop(arr, index) {
    assert.toBeTrue(o.hasOwnProp(index, arr), "Invalid index");
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
exports.drop = drop;
/**
 * Finds element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns The first element matching value if available, _undefined_ otherwise.
 */
function findBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.find(element => reduce(element) === reduced);
}
exports.findBy = findBy;
/**
 * Returns the first element from an array.
 *
 * @param arr - Array.
 * @returns The first element if available.
 * @throws Error otherwise.
 */
function first(arr) {
    return get(arr, 0);
}
exports.first = first;
/**
 * Creates array from iterable.
 *
 * @param iterable - Iterable.
 * @returns Array.
 */
function fromIterable(iterable) {
    return [...iterable];
}
exports.fromIterable = fromIterable;
/**
 * Creates array of numbers.
 *
 * @param from - Lower limit (inclusive).
 * @param to - Upper limit (inclusive).
 * @param step - Step.
 * @returns Array of numbers.
 */
function fromRange(from, to, step = 1) {
    const result = [];
    for (let i = from; i <= to; i += step)
        result.push(i);
    return result;
}
exports.fromRange = fromRange;
/**
 * Creates array from string.
 *
 * @param str - String.
 * @returns Array.
 */
function fromString(str) {
    return [...str];
}
exports.fromString = fromString;
/**
 * Returns element by index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @returns Element if available.
 * @throws Error otherwise.
 */
function get(arr, index) {
    assert.toBeTrue(o.hasOwnProp(index, arr), "Invalid index");
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    return arr[index];
}
exports.get = get;
/**
 * Checks that array contains element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns _True_ if array contains element matching value, _false_ otherwise.
 */
function includesBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.some(element => reduce(element) === reduced);
}
exports.includesBy = includesBy;
/**
 * Returns the last element from an array.
 *
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
function last(arr) {
    return get(arr, arr.length - 1);
}
exports.last = last;
/**
 * Adds element to the end of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function push(arr, value) {
    return [...arr, value];
}
exports.push = push;
/**
 * Replaces elements matching value if found, pushes value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
function pushOrReplaceBy(arr, value, keyOrReduce) {
    return includesBy(arr, value, keyOrReduce)
        ? replaceBy(arr, value, keyOrReduce)
        : push(arr, value);
}
exports.pushOrReplaceBy = pushOrReplaceBy;
/**
 * Picks random element from an array.
 *
 * @param arr - Array.
 * @returns Random element.
 */
function random(arr) {
    return get(arr, _.random(0, arr.length - 1));
}
exports.random = random;
/**
 * Removes elements matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements removed.
 */
function removeBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.filter(element => reduce(element) !== reduced);
}
exports.removeBy = removeBy;
/**
 * Replaces element.
 *
 * @param arr - Array.
 * @param index - Index to be replaced.
 * @param value - Value.
 * @returns New array with one element replaced.
 */
function replace(arr, index, value) {
    assert.toBeTrue(o.hasOwnProp(index, arr), "Invalid index");
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}
exports.replace = replace;
/**
 * Replaces elements matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements replaced.
 */
function replaceBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.map(element => (reduce(element) === reduced ? value : element));
}
exports.replaceBy = replaceBy;
/**
 * Reverses array.
 *
 * @param arr - Array.
 * @returns New array.
 */
function reverse(arr) {
    const result = clone(arr);
    result.reverse();
    return result;
}
exports.reverse = reverse;
/**
 * Sorts array.
 *
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New array.
 */
function sort(arr, compareFn) {
    const result = clone(arr);
    result.sort(compareFn);
    return result;
}
exports.sort = sort;
/**
 * Adds/removes value to/from an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
function toggleBy(arr, value, keyOrReduce) {
    return includesBy(arr, value, keyOrReduce)
        ? removeBy(arr, value, keyOrReduce)
        : push(arr, value);
}
exports.toggleBy = toggleBy;
/**
 * Truncates array.
 *
 * @param mutableArray - Array.
 */
function truncate(mutableArray) {
    mutableArray.length = 0;
}
exports.truncate = truncate;
/**
 * Creates unique array.
 *
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Unique array.
 */
function uniqueBy(arr, keyOrReduce) {
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
exports.uniqueBy = uniqueBy;
/**
 * Adds element to the beginning of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function unshift(arr, value) {
    return [value, ...arr];
}
exports.unshift = unshift;
/**
 * Replaces elements matching value if found, unshifts value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
function unshiftOrReplaceBy(arr, value, keyOrReduce) {
    return includesBy(arr, value, keyOrReduce)
        ? replaceBy(arr, value, keyOrReduce)
        : unshift(arr, value);
}
exports.unshiftOrReplaceBy = unshiftOrReplaceBy;
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