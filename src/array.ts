/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.array] */

import * as assert from "./assertions";
import * as is from "./guards";
import * as o from "./object";
import * as reflect from "./reflect";
import * as _ from "@skylib/lodash-commonjs-es";
import type { numbers, strings, unknowns, Writable } from "./types";

export type KeyOrReduce<T extends object> = PropertyKey | Reduce<T>;

export interface Reduce<T extends object> {
  /**
   * Reduces object.
   *
   * @param obj - Object.
   * @returns Reduced value.
   */
  (obj: T): unknown;
}

/**
 * Creates array of pairs ([x, y, z] =\> [[x, y], [y, z]]).
 *
 * @param arr - Array.
 * @returns Array of pairs.
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
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export function clone<A>(arr: readonly [A]): [A];

/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
export function clone<A, B>(arr: readonly [A, B]): [A, B];

/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
export function clone<A, B, C>(arr: readonly [A, B, C]): [A, B, C];

/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
export function clone<A, B, C, D>(arr: readonly [A, B, C, D]): [A, B, C, D];

/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export function clone<T>(arr: readonly T[]): T[];

export function clone<T>(arr: readonly T[]): T[] {
  return [...arr];
}

/**
 * Removes element at given index.
 *
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
export function drop<T>(arr: readonly T[], index: number): T[] {
  assert.toBeTrue(o.hasOwnProp(index, arr), "Invalid index");

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

/**
 * Finds element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns The first element matching value if available, _undefined_ otherwise.
 */
export function findBy<T extends object, V extends object>(
  arr: readonly T[],
  value: V,
  keyOrReduce: KeyOrReduce<T | V>
): T | undefined {
  const reduce = toReduce(keyOrReduce);

  const reduced = reduce(value);

  return arr.find(element => reduce(element) === reduced);
}

/**
 * Returns the first element from an array.
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
export function fromIterable<T>(iterable: Iterable<T>): T[] {
  return [...iterable];
}

/**
 * Creates array of numbers.
 *
 * @param from - Lower limit (inclusive).
 * @param to - Upper limit (inclusive).
 * @param step - Step.
 * @returns Array of numbers.
 */
export function fromRange(from: number, to: number, step = 1): numbers {
  const result: Writable<numbers> = [];

  for (let i = from; i <= to; i += step) result.push(i);

  return result;
}

/**
 * Creates array from string.
 *
 * @param str - String.
 * @returns Array.
 */
export function fromString(str: string): strings {
  return [...str];
}

/**
 * Returns element at given index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @returns Element if available.
 * @throws Error otherwise.
 */
export function get<T>(arr: readonly T[], index: number): T {
  assert.toBeTrue(o.hasOwnProp(index, arr), "Invalid index");

  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return arr[index] as T;
}

/**
 * Checks if array contains element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns _True_ if array contains element matching value, _false_ otherwise.
 */
export function includesBy<T extends object, V extends object>(
  arr: readonly T[],
  value: V,
  keyOrReduce: KeyOrReduce<T | V>
): boolean {
  const reduce = toReduce(keyOrReduce);

  const reduced = reduce(value);

  return arr.some(element => reduce(element) === reduced);
}

/**
 * Returns the last element from an array.
 *
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
export function last<T>(arr: readonly T[]): T {
  return get(arr, arr.length - 1);
}

/**
 * Adds element to the end of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function push<T>(arr: readonly T[], value: T): T[] {
  return [...arr, value];
}

/**
 * Replaces elements matching value if found, pushes value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function pushOrReplaceBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: KeyOrReduce<T>
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
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements removed.
 */
export function removeBy<T extends object, V extends object>(
  arr: readonly T[],
  value: V,
  keyOrReduce: KeyOrReduce<T | V>
): T[] {
  const reduce = toReduce(keyOrReduce);

  const reduced = reduce(value);

  return arr.filter(element => reduce(element) !== reduced);
}

/**
 * Replaces element at given index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @param value - Value.
 * @returns New array with one element replaced.
 */
export function replace<T>(arr: readonly T[], index: number, value: T): T[] {
  assert.toBeTrue(o.hasOwnProp(index, arr), "Invalid index");

  return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}

/**
 * Replaces elements matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements replaced.
 */
export function replaceBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: KeyOrReduce<T>
): T[] {
  const reduce = toReduce(keyOrReduce);

  const reduced = reduce(value);

  return arr.map(element => (reduce(element) === reduced ? value : element));
}

/**
 * Reverses array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export function reverse<T>(arr: readonly T[]): T[] {
  const result = clone(arr);

  result.reverse();

  return result;
}

/**
 * Returns the second element from an array.
 *
 * @param arr - Array.
 * @returns The second element if available.
 * @throws Error otherwise.
 */
export function second<T>(arr: readonly T[]): T {
  return get(arr, 1);
}

/**
 * Sorts array.
 *
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New array.
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
 * Returns the third element from an array.
 *
 * @param arr - Array.
 * @returns The third element if available.
 * @throws Error otherwise.
 */
export function third<T>(arr: readonly T[]): T {
  return get(arr, 2);
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
  keyOrReduce: KeyOrReduce<T>
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
export function truncate(mutableArray: Writable<unknowns>): void {
  mutableArray.length = 0;
}

/**
 * Creates unique array.
 *
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Unique array.
 */
export function uniqueBy<T extends object>(
  arr: readonly T[],
  keyOrReduce: KeyOrReduce<T>
): T[] {
  const reduce = toReduce(keyOrReduce);

  const seen = new Set();

  return arr.filter(element => {
    const reduced = reduce(element);

    if (seen.has(reduced)) return false;

    seen.add(reduced);

    return true;
  });
}

/**
 * Adds element to the beginning of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function unshift<T>(arr: readonly T[], value: T): T[] {
  return [value, ...arr];
}

/**
 * Replaces elements matching value if found, unshifts value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function unshiftOrReplaceBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: KeyOrReduce<T>
): T[] {
  return includesBy(arr, value, keyOrReduce)
    ? replaceBy(arr, value, keyOrReduce)
    : unshift(arr, value);
}

/**
 * Creates reduce function.
 *
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Reduce function.
 */
function toReduce<T extends object, V extends object = T>(
  keyOrReduce: KeyOrReduce<T | V>
): Reduce<T | V> {
  return is.callable(keyOrReduce)
    ? keyOrReduce
    : (obj): unknown => reflect.get(obj, keyOrReduce);
}
