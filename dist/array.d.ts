import type { IterableOrFn } from "./types/core";
export declare type ReduceForComparison<T extends object> = (obj: T) => unknown;
/**
 * Creates an array of pairs [x1, x2], [x2, x3]...
 *
 * @param arr - Array.
 * @returns An array of pairs.
 */
export declare function chain<T>(arr: readonly T[]): Array<[T, T]>;
/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export declare function clone<A>(arr: readonly [A]): [A];
/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export declare function clone<A, B>(arr: readonly [A, B]): [A, B];
/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export declare function clone<A, B, C>(arr: readonly [A, B, C]): [A, B, C];
/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export declare function clone<A, B, C, D>(arr: readonly [A, B, C, D]): [A, B, C, D];
/**
 * Creates array copy.
 *
 * @param arr - Array.
 * @returns Array copy.
 */
export declare function clone<T>(arr: readonly T[]): T[];
/**
 * Removes element from an array.
 *
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
export declare function drop<T>(arr: readonly T[], index: number): T[];
/**
 * Finds element matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns The first element matching value if available, _undefined_ otherwise.
 */
export declare function findBy<T extends object>(arr: readonly T[], value: object, keyOrReduce: PropertyKey | ReduceForComparison<object>): T | undefined;
/**
 * Gets the first element.
 *
 * @param arr - Array.
 * @returns The first element if available.
 * @throws Error otherwise.
 */
export declare function first<T>(arr: readonly T[]): T;
/**
 * Creates array from iterable.
 *
 * @param iterable - Iterable.
 * @returns Array.
 */
export declare function fromIterable<T>(iterable: IterableOrFn<T>): T[];
/**
 * Creates array from range.
 *
 * @param from - Starting number.
 * @param to - Upper limit (inclusive).
 * @param step - Step.
 * @returns Array of numbers.
 */
export declare function fromRange(from: number, to: number, step?: number): number[];
/**
 * Gets element by index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @returns Array element if available.
 * @throws Error otherwise.
 */
export declare function get<T>(arr: readonly T[], index: number): T;
/**
 * Checks that array contains element matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns _True_ if array contains element matching value, _false_ otherwise.
 */
export declare function includesBy<T extends object>(arr: readonly T[], value: object, keyOrReduce: PropertyKey | ReduceForComparison<object>): boolean;
/**
 * Gets the last element.
 *
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
export declare function last<T>(arr: readonly T[]): T;
/**
 * Adds element to the end of array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export declare function push<T>(arr: readonly T[], value: T): T[];
/**
 * Picks random element from an array.
 *
 * @param arr - Array.
 * @returns Random element.
 */
export declare function random<T>(arr: readonly T[]): T;
/**
 * Removes elements matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements removed.
 */
export declare function removeBy<T extends object>(arr: readonly T[], value: object, keyOrReduce: PropertyKey | ReduceForComparison<object>): T[];
/**
 * Replaces element.
 *
 * @param arr - Array.
 * @param index - Index to be replaced.
 * @param value - New value.
 * @returns New array with one element replaced.
 */
export declare function replace<T>(arr: readonly T[], index: number, value: T): T[];
/**
 * Reverses array.
 *
 * @param arr - Array.
 * @returns New reversed array.
 */
export declare function reverse<T>(arr: readonly T[]): T[];
/**
 * Sorts array.
 *
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New sorted array.
 */
export declare function sort<T>(arr: readonly T[], compareFn?: (x: T, y: T) => number): T[];
/**
 * Truncates array.
 *
 * @param mutableArray - Array.
 */
export declare function truncate(mutableArray: unknown[]): void;
/**
 * Creates an array of unique elements.
 *
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns An array of unique elements.
 */
export declare function uniqueBy<T extends object>(arr: readonly T[], keyOrReduce: PropertyKey | ReduceForComparison<T>): T[];
/**
 * Adds element to the beginning of the array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export declare function unshift<T>(arr: readonly T[], value: T): T[];
//# sourceMappingURL=array.d.ts.map