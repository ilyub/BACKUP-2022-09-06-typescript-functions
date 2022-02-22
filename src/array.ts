/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[array] */

import * as _ from "lodash";

import * as assert from "./assertions";
import * as is from "./guards";
import * as o from "./object";
import * as reflect from "./reflect";
import type { IterableLike } from "./types/core";

export interface ReduceForComparison<T extends object> {
  /**
   * Reduces object for comparison.
   *
   * @param obj - Object.
   * @returns Reduced value.
   */
  (obj: T): unknown;
}

/**
 * Creates an array of pairs [x1, x2], [x2, x3]...
 *
 * @param arr - Array.
 * @returns An array of pairs.
 */
export function chain<T>(arr: readonly T[]): Array<[T, T]> {
  const result: Array<[T, T]> = [];

  let prev = first(arr);

  for (const next of arr.slice(1)) {
    result.push([prev, next]);
    prev = next;
  }

  return result;
}

/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export function clone<A>(arr: readonly [A]): [A];

/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export function clone<A, B>(arr: readonly [A, B]): [A, B];

/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export function clone<A, B, C>(arr: readonly [A, B, C]): [A, B, C];

/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export function clone<A, B, C, D>(arr: readonly [A, B, C, D]): [A, B, C, D];

/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export function clone<T>(arr: readonly T[]): T[];

export function clone<T>(arr: readonly T[]): T[] {
  return [...arr];
}

/**
 * Removes element from an array.
 *
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
export function drop<T>(arr: readonly T[], index: number): T[] {
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
export function findBy<T extends object>(
  arr: readonly T[],
  value: object,
  keyOrReduce: PropertyKey | ReduceForComparison<object>
): T | undefined {
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
export function first<T>(arr: readonly T[]): T {
  return get(arr, 0);
}

/**
 * Creates array from iterable.
 *
 * @param iterable - Iterable.
 * @returns Array.
 */
export function fromIterable<T>(iterable: IterableLike<T>): T[] {
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
export function fromRange(from: number, to: number, step = 1): number[] {
  const result: number[] = [];

  for (let i = from; i <= to; i += step) result.push(i);

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
export function get<T>(arr: readonly T[], index: number): T {
  assert.toBeTrue(o.hasOwnProp(index, arr), "Invalid index");

  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return arr[index] as T;
}

/**
 * Checks that array contains element matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns _True_ if array contains element matching value, _false_ otherwise.
 */
export function includesBy<T extends object>(
  arr: readonly T[],
  value: object,
  keyOrReduce: PropertyKey | ReduceForComparison<object>
): boolean {
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
export function last<T>(arr: readonly T[]): T {
  return get(arr, arr.length - 1);
}

/**
 * Adds element to the end of array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function push<T>(arr: readonly T[], value: T): T[] {
  return [...arr, value];
}

/**
 * Pushes value or replaces elements matching value if found.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function pushOrReplaceBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: PropertyKey | ReduceForComparison<object>
): T[] {
  return includesBy(arr, value, keyOrReduce)
    ? replaceBy(arr, value, keyOrReduce)
    : push(arr, value);
}

/**
 * Picks random element from an array.
 *
 * @param arr - Array.
 * @returns Random element.
 */
export function random<T>(arr: readonly T[]): T {
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
export function removeBy<T extends object>(
  arr: readonly T[],
  value: object,
  keyOrReduce: PropertyKey | ReduceForComparison<object>
): T[] {
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
export function replace<T>(arr: readonly T[], index: number, value: T): T[] {
  assert.toBeTrue(index >= 0 && index < arr.length, "Invalid index");

  return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}

/**
 * Replaces elements matching value.
 *
 * @param arr - Array.
 * @param value - New value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements replaced.
 */
export function replaceBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: PropertyKey | ReduceForComparison<object>
): T[] {
  const reduce = toReduce(keyOrReduce);

  return arr.map(element =>
    reduce(element) === reduce(value) ? value : element
  );
}

/**
 * Reverses array.
 *
 * @param arr - Array.
 * @returns New reversed array.
 */
export function reverse<T>(arr: readonly T[]): T[] {
  const result = clone(arr);

  result.reverse();

  return result;
}

/**
 * Sorts array.
 *
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New sorted array.
 */
export function sort<T>(
  arr: readonly T[],
  compareFn?: (x: T, y: T) => number
): T[] {
  const result = clone(arr);

  result.sort(compareFn);

  return result;
}

/**
 * Adds/removes value to/from an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function toggleBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: PropertyKey | ReduceForComparison<object>
): T[] {
  return includesBy(arr, value, keyOrReduce)
    ? removeBy(arr, value, keyOrReduce)
    : push(arr, value);
}

/**
 * Truncates array.
 *
 * @param mutableArray - Array.
 */
export function truncate(mutableArray: unknown[]): void {
  mutableArray.length = 0;
}

/**
 * Creates an array of unique elements.
 *
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns An array of unique elements.
 */
export function uniqueBy<T extends object>(
  arr: readonly T[],
  keyOrReduce: PropertyKey | ReduceForComparison<T>
): T[] {
  const reduce = toReduce(keyOrReduce);

  const cache = new Set();

  return arr.filter(element => {
    const reduced = reduce(element);

    if (cache.has(reduced)) return false;

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
export function unshift<T>(arr: readonly T[], value: T): T[] {
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
function toReduce<T extends object>(
  keyOrReduce: PropertyKey | ReduceForComparison<T>
): ReduceForComparison<T> {
  return is.callable(keyOrReduce)
    ? keyOrReduce
    : (obj): unknown => reflect.get(obj, keyOrReduce);
}
