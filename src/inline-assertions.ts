import * as assert from "./assertions";
import { defineFn } from "./core";
import { ErrorArg } from "./errors";
import * as is from "./guards";
import type { ValidationObject } from "./core";
import type * as types from "./types";

export {
  _false as false,
  _null as null,
  _true as true,
  _undefined as undefined
};

export const array = defineFn(factory(is.array), {
  /**
   * Asserts that value type is T[].
   *
   * @param value - Value.
   * @param guard - Guard for type T.
   * @param error - Error.
   * @returns Value if value type is T[].
   * @throws Error otherwise.
   */
  of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg) => {
    assert.array.of(value, guard, error);

    return value;
  }
});

export const arrayU = factory(is.arrayU);

export const arrays = factory(is.arrays);

export const arraysU = factory(is.arraysU);

export const boolean = factory(is.boolean);

export const booleanU = factory(is.booleanU);

export const booleans = factory(is.booleans);

export const booleansU = factory(is.booleansU);

export const empty = factory(is.empty);

export const indexedObject = defineFn(factory(is.indexedObject), {
  /**
   * Asserts that value type is IndexedObject\<T\>.
   *
   * @param value - Value.
   * @param guard - Guard for type T.
   * @param error - Error.
   * @returns Value if value type is IndexedObject\<T\>.
   * @throws Error otherwise.
   */
  of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg) => {
    assert.indexedObject.of(value, guard, error);

    return value;
  }
});

export const indexedObjectU = factory(is.indexedObjectU);

export const indexedObjects = factory(is.indexedObjects);

export const indexedObjectsU = factory(is.indexedObjectsU);

export const map = defineFn(factory(is.map), {
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
    error?: ErrorArg
  ) => {
    assert.map.of(value, keyGuard, valueGuard, error);

    return value;
  }
});

export const mapU = factory(is.mapU);

export const maps = factory(is.maps);

export const mapsU = factory(is.mapsU);

export const never = factory(is.never);

export const numStr = factory(is.numStr);

export const numStrU = factory(is.numStrU);

export const numStrs = factory(is.numStrs);

export const numStrsU = factory(is.numStrsU);

export const number = factory(is.number);

export const numberU = factory(is.numberU);

export const numbers = factory(is.numbers);

export const numbersU = factory(is.numbersU);

export const object = factory(is.object);

export const objectU = factory(is.objectU);

export const objects = factory(is.objects);

export const objectsU = factory(is.objectsU);

export const set = defineFn(factory(is.set), {
  /**
   * Asserts that value type is Set\<T\>.
   *
   * @param value - Value.
   * @param guard - Guard for type T.
   * @param error - Error.
   * @returns Value if value type is Set\<T\>.
   * @throws Error otherwise.
   */
  of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg) => {
    assert.set.of(value, guard, error);

    return value;
  }
});

export const setU = factory(is.setU);

export const sets = factory(is.sets);

export const setsU = factory(is.setsU);

export const string = factory(is.string);

export const stringU = factory(is.stringU);

export const strings = factory(is.strings);

export const stringsU = factory(is.stringsU);

export const symbol = factory(is.symbol);

export const symbolU = factory(is.symbolU);

export const symbols = factory(is.symbols);

export const symbolsU = factory(is.symbolsU);

export const unknown = factory(is.unknown);

export const unknowns = factory(is.unknowns);

export const unknownsU = factory(is.unknownsU);

export const not = {
  array: notFactory<types.unknowns>(is.not.array),
  boolean: notFactory<boolean>(is.not.boolean),
  empty: notFactory<types.empty>(is.not.empty),
  false: notFactory<false>(is.not.false),
  indexedObject: notFactory<types.IndexedObject>(is.not.indexedObject),
  map: notFactory<ReadonlyMap<unknown, unknown>>(is.not.map),
  null: notFactory<null>(is.not.null),
  numStr: notFactory<types.NumStr>(is.not.numStr),
  number: notFactory<number>(is.not.number),
  object: notFactory<object>(is.not.object),
  set: notFactory<ReadonlySet<unknown>>(is.not.set),
  string: notFactory<string>(is.not.string),
  stringU: notFactory<types.stringU>(is.not.stringU),
  symbol: notFactory<symbol>(is.not.symbol),
  true: notFactory<true>(is.not.true),
  undefined: notFactory<undefined>(is.not.undefined)
} as const;

/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function byGuard<T>(
  value: unknown,
  guard: is.Guard<T>,
  error?: ErrorArg
): T {
  assert.byGuard(value, guard, error);

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
  error?: ErrorArg
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
  error?: ErrorArg
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
  error?: ErrorArg
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
  error?: ErrorArg
): readonly T[] {
  assert.instances(value, ctor, error);

  return value;
}

const _false = factory(is.false);

const _null = factory(is.null);

const _true = factory(is.true);

const _undefined = factory(is.undefined);

/**
 * Creates inline assertion.
 *
 * @param guard - Guard for type T.
 * @returns Inline assertion for type T.
 */
function factory<T>(guard: is.Guard<T>) {
  /**
   * Asserts that value has expected type.
   *
   * @param value - Value.
   * @param error - Error.
   * @returns Value if value has expected type.
   * @throws Error otherwise.
   */
  return (value: unknown, error?: ErrorArg): T => {
    if (guard(value)) return value;

    throw ErrorArg.toError(error);
  };
}

/**
 * Creates inline assertion.
 *
 * @param guard - Guard for type not T.
 * @returns Inline assertion for type not T.
 */
function notFactory<T>(guard: is.ExclusionGuard<T>) {
  /**
   * Asserts that value has expected type.
   *
   * @param value - Value.
   * @param error - Error.
   * @returns Value if value has expected type.
   * @throws Error otherwise.
   */
  return <V>(value: V, error?: ErrorArg): Exclude<V, T> => {
    if (guard(value)) return value;

    throw ErrorArg.toError(error);
  };
}
