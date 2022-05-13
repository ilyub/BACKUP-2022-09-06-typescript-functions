import * as assert from "./assertions";
import { defineFn } from "./module-definition";
import type * as is from "./guards";
import type { ValidationObject } from "./helpers";
import type * as types from "./types";

export const array = defineFn(
  /**
   * Asserts that value is an array.
   *
   * @param value - Value.
   * @param error - Error.
   * @returns Value if value is an array.
   * @throws Error otherwise.
   */
  (value: unknown, error?: assert.ErrorArg) => {
    assert.array(value, error);

    return value;
  },
  {
    /**
     * Asserts that value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is T[].
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>, error?: assert.ErrorArg) => {
      assert.array.of(value, guard, error);

      return value;
    }
  }
);

export const indexedObject = defineFn(
  /**
   * Asserts that value type is IndexedObject.
   *
   * @param value - Value.
   * @param error - Error.
   * @returns Value if value type is IndexedObject.
   * @throws Error otherwise.
   */
  (value: unknown, error?: assert.ErrorArg) => {
    assert.indexedObject(value, error);

    return value;
  },
  {
    /**
     * Asserts that value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is IndexedObject\<T\>.
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>, error?: assert.ErrorArg) => {
      assert.indexedObject.of(value, guard, error);

      return value;
    }
  }
);

export const map = defineFn(
  /**
   * Asserts that value type is Map.
   *
   * @param value - Value.
   * @param error - Error.
   * @returns Value if value type is Map.
   * @throws Error otherwise.
   */
  (value: unknown, error?: assert.ErrorArg) => {
    assert.map(value, error);

    return value;
  },
  {
    /**
     * Asserts that value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @param error - Error.
     * @returns Value if value type is Map\<K, V\>.
     * @throws Error otherwise.
     */
    of: <K, V>(
      value: unknown,
      keyGuard: is.Guard<K>,
      valueGuard: is.Guard<V>,
      error?: assert.ErrorArg
    ) => {
      assert.map.of(value, keyGuard, valueGuard, error);

      return value;
    }
  }
);

export const not = defineFn(
  /**
   * Not implemented.
   */
  () => {
    throw new Error("Not implemented");
  },
  {
    /**
     * Asserts that value type is not empty.
     *
     * @param value - Value.
     * @param error - Error.
     * @returns Value if value type is not empty.
     * @throws Error otherwise.
     */
    empty: <T>(value: T, error?: assert.ErrorArg) => {
      assert.not.empty<T>(value, error);

      return value;
    }
  }
);

export const set = defineFn(
  /**
   * Asserts that value type is Set.
   *
   * @param value - Value.
   * @param error - Error.
   * @returns Value if value type is Set.
   * @throws Error otherwise.
   */
  (value: unknown, error?: assert.ErrorArg) => {
    assert.set(value, error);

    return value;
  },
  {
    /**
     * Asserts that value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is Set\<T\>.
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>, error?: assert.ErrorArg) => {
      assert.set.of(value, guard, error);

      return value;
    }
  }
);

/**
 * Asserts that value is a boolean.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a boolean.
 * @throws Error otherwise.
 */
export function boolean(value: unknown, error?: assert.ErrorArg): boolean {
  assert.boolean(value, error);

  return value;
}

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function callable<T extends Function>(
  value: unknown,
  error?: assert.ErrorArg
): T {
  assert.callable<T>(value, error);

  return value;
}

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function enumeration<T extends PropertyKey>(
  value: unknown,
  vo: ValidationObject<T>,
  error?: assert.ErrorArg
): T {
  assert.enumeration(value, vo, error);

  return value;
}

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function instance<T>(
  value: unknown,
  ctor: types.Constructor<T>,
  error?: assert.ErrorArg
): T {
  assert.instance(value, ctor, error);

  return value;
}

/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
export function instances<T>(
  value: unknown,
  ctor: types.Constructor<T>,
  error?: assert.ErrorArg
): readonly T[] {
  assert.instances(value, ctor, error);

  return value;
}

/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is NumStr.
 * @throws Error otherwise.
 */
export function numStr(value: unknown, error?: assert.ErrorArg): types.NumStr {
  assert.numStr(value, error);

  return value;
}

/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a number.
 * @throws Error otherwise.
 */
export function number(value: unknown, error?: assert.ErrorArg): number {
  assert.number(value, error);

  return value;
}

/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is an object.
 * @throws Error otherwise.
 */
export function object(value: unknown, error?: assert.ErrorArg): object {
  assert.object(value, error);

  return value;
}

/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a string.
 * @throws Error otherwise.
 */
export function string(value: unknown, error?: assert.ErrorArg): string {
  assert.string(value, error);

  return value;
}

/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a string.
 * @throws Error otherwise.
 */
export function stringU(
  value: unknown,
  error?: assert.ErrorArg
): types.stringU {
  assert.stringU(value, error);

  return value;
}

/**
 * Asserts that value is a symbol.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a symbol.
 * @throws Error otherwise.
 */
export function symbol(value: unknown, error?: assert.ErrorArg): symbol {
  assert.symbol(value, error);

  return value;
}
