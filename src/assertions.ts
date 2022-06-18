import { defineFn } from "./core";
import { ErrorArg } from "./errors";
import * as is from "./guards";
import type { ValidationObject } from "./core";
import type * as types from "./types";

export const not: {
  /**
   * Asserts that value type is not empty.
   *
   * @param value - Value.
   * @param error - Error.
   * @returns Void.
   */
  readonly empty: <T>(
    value: T,
    error?: ErrorArg
  ) => asserts value is Exclude<T, types.empty>;
} = {
  empty: (value, error) => {
    byGuard(value, is.not.empty, error);
  }
} as const;

export const array: {
  /**
   * Asserts that value is an array.
   *
   * @param value - Value.
   * @param error - Error.
   */
  (value: unknown, error?: ErrorArg): asserts value is types.unknowns;
  /**
   * Asserts that value type is T[].
   *
   * @param value - Value.
   * @param guard - Guard for type T.
   * @param error - Error.
   * @returns Void.
   */
  readonly of: <T>(
    value: unknown,
    guard: is.Guard<T>,
    error?: ErrorArg
  ) => asserts value is readonly T[];
} = defineFn(
  (value: unknown, error?: ErrorArg): asserts value is types.unknowns => {
    byGuard(value, is.array, error);
  },
  {
    of: <T>(
      value: unknown,
      guard: is.Guard<T>,
      error?: ErrorArg
    ): asserts value is readonly T[] => {
      byGuard(value, is.factory(is.array.of, guard), error);
    }
  }
);

export const indexedObject: {
  /**
   * Asserts that value type is IndexedObject.
   *
   * @param value - Value.
   * @param error - Error.
   */
  (value: unknown, error?: ErrorArg): asserts value is types.IndexedObject;
  /**
   * Asserts that value type is IndexedObject\<T\>.
   *
   * @param value - Value.
   * @param guard - Guard for type T.
   * @param error - Error.
   * @returns Void.
   */
  readonly of: <T>(
    value: unknown,
    guard: is.Guard<T>,
    error?: ErrorArg
  ) => asserts value is types.IndexedObject<T>;
} = defineFn(
  (value: unknown, error?: ErrorArg): asserts value is types.IndexedObject => {
    byGuard(value, is.indexedObject, error);
  },
  {
    of: <T>(
      value: unknown,
      guard: is.Guard<T>,
      error?: ErrorArg
    ): asserts value is types.IndexedObject<T> => {
      byGuard(value, is.factory(is.indexedObject.of, guard), error);
    }
  }
);

export const map: {
  /**
   * Asserts that value type is Map.
   *
   * @param value - Value.
   * @param error - Error.
   */
  (value: unknown, error?: ErrorArg): asserts value is ReadonlyMap<
    unknown,
    unknown
  >;
  /**
   * Asserts that value type is Map\<K, V\>.
   *
   * @param value - Value.
   * @param keyGuard - Key guard.
   * @param valueGuard - Value guard.
   * @param error - Error.
   * @returns Void.
   */
  readonly of: <K, V>(
    value: unknown,
    keyGuard: is.Guard<K>,
    valueGuard: is.Guard<V>,
    error?: ErrorArg
  ) => asserts value is ReadonlyMap<K, V>;
} = defineFn(
  (
    value: unknown,
    error?: ErrorArg
  ): asserts value is ReadonlyMap<unknown, unknown> => {
    byGuard(value, is.map, error);
  },
  {
    of: <K, V>(
      value: unknown,
      keyGuard: is.Guard<K>,
      valueGuard: is.Guard<V>,
      error?: ErrorArg
    ): asserts value is ReadonlyMap<K, V> => {
      byGuard(value, is.factory(is.map.of, keyGuard, valueGuard), error);
    }
  }
);

export const set: {
  /**
   * Asserts that value type is Set.
   *
   * @param value - Value.
   * @param error - Error.
   */
  (value: unknown, error?: ErrorArg): asserts value is ReadonlySet<unknown>;
  /**
   * Asserts that value type is Set\<T\>.
   *
   * @param value - Value.
   * @param guard - Guard for type T.
   * @param error - Error.
   * @returns Void.
   */
  readonly of: <T>(
    value: unknown,
    guard: is.Guard<T>,
    error?: ErrorArg
  ) => asserts value is ReadonlySet<T>;
} = defineFn(
  (value: unknown, error?: ErrorArg): asserts value is ReadonlySet<unknown> => {
    byGuard(value, is.set, error);
  },
  {
    of: <T>(
      value: unknown,
      guard: is.Guard<T>,
      error?: ErrorArg
    ): asserts value is ReadonlySet<T> => {
      byGuard(value, is.factory(is.set.of, guard), error);
    }
  }
);

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
  } else throw ErrorArg.toError(error);
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
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
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
 * @param error - Error.
 */
export function instances<T>(
  value: unknown,
  ctor: types.Constructor<T>,
  error?: ErrorArg
): asserts value is readonly T[] {
  byGuard(value, is.factory(is.instances, ctor), error);
}

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

/**
 * Wraps error.
 *
 * @param e - Error.
 * @returns Wrapped error.
 * @deprecated Use ErrorArg.wrapError instead.
 */
export function wrapError<T>(e: T): () => T {
  return () => e;
}
