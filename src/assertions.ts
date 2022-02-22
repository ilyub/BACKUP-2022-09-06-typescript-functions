import { AssertionError } from "./errors/AssertionError";
import * as is from "./guards";
// eslint-disable-next-line @skylib/consistent-import
import type * as types from "./types/core";

export interface Assertion<T> {
  /**
   * Asserts that value type is T.
   *
   * @param value - Value.
   */
  (value: unknown): asserts value is T;
}

export type ErrorArg = string | (() => unknown);

/**
 * Converts error or error message to error argument usable with assertion.
 *
 * @param errorOrMessage - Error or error message.
 * @returns Error argument.
 */
export function toErrorArg(errorOrMessage: unknown): ErrorArg {
  if (is.string(errorOrMessage)) return errorOrMessage;

  return (): unknown => errorOrMessage;
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
 * @param error - Error to be thrown.
 */
export function array(
  value: unknown,
  error?: ErrorArg
): asserts value is readonly unknown[] {
  byGuard(value, is.array, error);
}

/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error to be thrown.
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
 * @param error - Error to be thrown.
 */
export function boolean(
  value: unknown,
  error?: ErrorArg
): asserts value is boolean {
  byGuard(value, is.boolean, error);
}

/**
 * Asserts that value type is booleanU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function booleanU(
  value: unknown,
  error?: ErrorArg
): asserts value is types.booleanU {
  byGuard(value, is.booleanU, error);
}

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error to be thrown.
 */
export function byGuard<T>(
  value: unknown,
  guard: is.Guard<T>,
  error?: ErrorArg
): asserts value is T {
  if (guard(value)) {
    // Valid
  } else throw toError(error);
}

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function callable<T extends Function>(
  value: unknown,
  error?: ErrorArg
): asserts value is T {
  byGuard(value, is.callable, error);
}

/**
 * Asserts that value type is T | undefined.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function callableU<T extends Function>(
  value: unknown,
  error?: ErrorArg
): asserts value is T | undefined {
  byGuard(value, is.callableU, error);
}

/**
 * Asserts that value type is empty.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
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
 * @param error - Error to be thrown.
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
 * @param error - Error to be thrown.
 */
export function enumeration<T extends PropertyKey>(
  value: unknown,
  vo: types.ValidationObject<T>,
  error?: ErrorArg
): asserts value is T {
  byGuard(value, is.factory(is.enumeration, vo), error);
}

/**
 * Asserts that value type is T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error to be thrown.
 */
export function enumerationU<T extends PropertyKey>(
  value: unknown,
  vo: types.ValidationObject<T>,
  error?: ErrorArg
): asserts value is T | undefined {
  byGuard(value, is.factory(is.enumerationU, vo), error);
}

/**
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function indexedObject(
  value: unknown,
  error?: ErrorArg
): asserts value is types.ReadonlyIndexedObject {
  byGuard(value, is.indexedObject, error);
}

/**
 * Asserts that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error to be thrown.
 */
indexedObject.of = <T>(
  value: unknown,
  guard: is.Guard<T>,
  error?: ErrorArg
): asserts value is types.ReadonlyIndexedObject<T> => {
  byGuard(value, is.factory(is.indexedObject.of, guard), error);
};

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error to be thrown.
 */
export function instance<T>(
  value: unknown,
  ctor: types.Constructor<T>,
  error?: ErrorArg
): asserts value is T {
  byGuard(value, is.factory(is.instance, ctor), error);
}

/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error to be thrown.
 */
export function instances<T>(
  value: unknown,
  ctor: types.Constructor<T>,
  error?: ErrorArg
): asserts value is readonly T[] {
  byGuard(value, is.factory(is.instances, ctor), error);
}

/**
 * Asserts that value is _null_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function nullAssertion(
  value: unknown,
  error?: ErrorArg
): asserts value is null {
  byGuard(value, is.null, error);
}

export { nullAssertion as null };

/**
 * Asserts that value is not _null_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
not.null = <T>(
  value: T,
  error?: ErrorArg
): asserts value is Exclude<T, null> => {
  byGuard(value, is.not.null, error);
};

/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function numStr(
  value: unknown,
  error?: ErrorArg
): asserts value is types.NumStr {
  byGuard(value, is.numStr, error);
}

/**
 * Asserts that value type is NumStrU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function numStrU(
  value: unknown,
  error?: ErrorArg
): asserts value is types.NumStrU {
  byGuard(value, is.numStrU, error);
}

/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function number(
  value: unknown,
  error?: ErrorArg
): asserts value is number {
  byGuard(value, is.number, error);
}

/**
 * Asserts that value type is numberU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function numberU(
  value: unknown,
  error?: ErrorArg
): asserts value is types.numberU {
  byGuard(value, is.numberU, error);
}

/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function object(
  value: unknown,
  error?: ErrorArg
): asserts value is object {
  byGuard(value, is.object, error);
}

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param requiredGuards - Guards for required properties.
 * @param optionalGuards - Guards for optional properties.
 * @param error - Error to be thrown.
 */
object.of = <A, B>(
  value: unknown,
  requiredGuards: is.Guards<A>,
  optionalGuards: is.Guards<B>,
  error?: ErrorArg
): asserts value is Partial<B> & Required<A> => {
  byGuard(
    value,
    is.factory(is.object.of, requiredGuards, optionalGuards),
    error
  );
};

/**
 * Asserts that value type is objectU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function objectU(
  value: unknown,
  error?: ErrorArg
): asserts value is types.objectU {
  byGuard(value, is.objectU, error);
}

/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function string(
  value: unknown,
  error?: ErrorArg
): asserts value is string {
  byGuard(value, is.string, error);
}

/**
 * Asserts that value type is stringU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function stringU(
  value: unknown,
  error?: ErrorArg
): asserts value is types.stringU {
  byGuard(value, is.stringU, error);
}

/**
 * Asserts value to be _false_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function toBeFalse(
  value: unknown,
  error?: ErrorArg
): asserts value is false {
  if (value === false) {
    // Valid
  } else throw toError(error);
}

/**
 * Asserts value to be _true_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function toBeTrue(
  value: unknown,
  error?: ErrorArg
): asserts value is true {
  if (value === true) {
    // Valid
  } else throw toError(error);
}

/**
 * Asserts that value is _undefined_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function undefinedAssertion(
  value: unknown,
  error?: ErrorArg
): asserts value is undefined {
  byGuard(value, is.undefined, error);
}

export { undefinedAssertion as undefined };

/**
 * Asserts that value is not _undefined_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
not.undefined = <T>(
  value: T,
  error?: ErrorArg
): asserts value is Exclude<T, undefined> => {
  byGuard(value, is.not.undefined, error);
};

/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/

/**
 * Converts error argument to error.
 *
 * @param error - Error argument.
 * @returns Error.
 */
function toError(error?: ErrorArg): unknown {
  switch (typeof error) {
    case "function":
      return error();

    case "string":
    case "undefined":
      return new AssertionError(error);
  }
}
