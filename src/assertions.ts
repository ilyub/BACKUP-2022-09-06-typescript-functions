import { AssertionError } from "./errors/AssertionError";
import * as is from "./guards";
import type { ValidationObject } from "./helpers";
import type * as types from "./types/core";
import type { Constructor } from "./types/function";

export type ErrorArg = ErrorArgFn | string;

export interface ErrorArgFn {
  /**
   * Creates error instance.
   *
   * @returns Error instance.
   */
  (): unknown;
}

/**
 * Not implemented.
 */
export function not(): never {
  throw new Error("Not implemented");
}

/**
 * Asserts that value is an array.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function array(
  value: unknown,
  error?: ErrorArg
): asserts value is types.unknowns {
  byGuard(value, is.array, error);
}

/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
array.of = <T>(
  value: unknown,
  guard: is.Guard<T>,
  error?: ErrorArg
): asserts value is readonly T[] => {
  byGuard(value, is.factory(is.array.of, guard), error);
};

/**
 * Asserts that value is a boolean.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function boolean(
  value: unknown,
  error?: ErrorArg
): asserts value is boolean {
  byGuard(value, is.boolean, error);
}

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
export function byGuard<T>(
  value: unknown,
  guard: is.Guard<T>,
  error?: ErrorArg
): asserts value is T {
  if (guard(value)) {
    // Valid
  } else
    switch (typeof error) {
      case "function":
        throw error();

      case "string":
      case "undefined":
        throw new AssertionError(error);
    }
}

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function callable<T extends Function>(
  value: unknown,
  error?: ErrorArg
): asserts value is T {
  byGuard(value, is.callable, error);
}

/**
 * Asserts that value type is empty.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function empty(
  value: unknown,
  error?: ErrorArg
): asserts value is types.empty {
  byGuard(value, is.empty, error);
}

/**
 * Asserts that value type is not empty.
 *
 * @param value - Value.
 * @param error - Error.
 */
not.empty = <T>(
  value: T,
  error?: ErrorArg
): asserts value is Exclude<T, types.empty> => {
  byGuard(value, is.not.empty, error);
};

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error.
 */
export function enumeration<T extends PropertyKey>(
  value: unknown,
  vo: ValidationObject<T>,
  error?: ErrorArg
): asserts value is T {
  byGuard(value, is.factory(is.enumeration, vo), error);
}

/**
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function indexedObject(
  value: unknown,
  error?: ErrorArg
): asserts value is types.IndexedObject {
  byGuard(value, is.indexedObject, error);
}

/**
 * Asserts that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
indexedObject.of = <T>(
  value: unknown,
  guard: is.Guard<T>,
  error?: ErrorArg
): asserts value is types.IndexedObject<T> => {
  byGuard(value, is.factory(is.indexedObject.of, guard), error);
};

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export function instance<T>(
  value: unknown,
  ctor: Constructor<T>,
  error?: ErrorArg
): asserts value is T {
  byGuard(value, is.factory(is.instance, ctor), error);
}

/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export function instances<T>(
  value: unknown,
  ctor: Constructor<T>,
  error?: ErrorArg
): asserts value is readonly T[] {
  byGuard(value, is.factory(is.instances, ctor), error);
}

/**
 * Asserts that value type is Map.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function map(
  value: unknown,
  error?: ErrorArg
): asserts value is ReadonlyMap<unknown, unknown> {
  byGuard(value, is.map, error);
}

/**
 * Asserts that value type is Map\<K, V\>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @param error - Error.
 */
map.of = <K, V>(
  value: unknown,
  keyGuard: is.Guard<K>,
  valueGuard: is.Guard<V>,
  error?: ErrorArg
): asserts value is ReadonlyMap<K, V> => {
  byGuard(value, is.factory(is.map.of, keyGuard, valueGuard), error);
};

/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function numStr(
  value: unknown,
  error?: ErrorArg
): asserts value is types.NumStr {
  byGuard(value, is.numStr, error);
}

/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function number(
  value: unknown,
  error?: ErrorArg
): asserts value is number {
  byGuard(value, is.number, error);
}

/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function object(
  value: unknown,
  error?: ErrorArg
): asserts value is object {
  byGuard(value, is.object, error);
}

/**
 * Asserts that value type is Set.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function set(
  value: unknown,
  error?: ErrorArg
): asserts value is ReadonlySet<unknown> {
  byGuard(value, is.set, error);
}

/**
 * Asserts that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
set.of = <T>(
  value: unknown,
  guard: is.Guard<T>,
  error?: ErrorArg
): asserts value is ReadonlySet<T> => {
  byGuard(value, is.factory(is.set.of, guard), error);
};

/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function string(
  value: unknown,
  error?: ErrorArg
): asserts value is string {
  byGuard(value, is.string, error);
}

/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function stringU(
  value: unknown,
  error?: ErrorArg
): asserts value is types.stringU {
  byGuard(value, is.stringU, error);
}

/**
 * Asserts that value is a symbol.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function symbol(
  value: unknown,
  error?: ErrorArg
): asserts value is symbol {
  byGuard(value, is.symbol, error);
}

/**
 * Asserts value to be _false_.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function toBeFalse(
  value: unknown,
  error?: ErrorArg
): asserts value is false {
  byGuard(value, is.false, error);
}

/**
 * Asserts value to be _true_.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function toBeTrue(
  value: unknown,
  error?: ErrorArg
): asserts value is true {
  byGuard(value, is.true, error);
}
