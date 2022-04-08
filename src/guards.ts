import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";

import * as a from "./array";
import type { ValidationObject } from "./helpers";
import { typedef } from "./helpers";
import * as o from "./object";
import type * as types from "./types/core";
import type { Constructor } from "./types/function";
import type { OptionalStyle, UndefinedStyle } from "./types/object";

export {
  _false as false,
  _null as null,
  _true as true,
  _undefined as undefined
};

export const and: {
  /**
   * Checks that value type is A & B.
   *
   * @param value - Value.
   * @param guard1 - Guard for type A.
   * @param guard2 - Guard for type B.
   * @returns _True_ if value type is A & B, _false_ otherwise.
   */
  <A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A & B;
  /**
   * Checks that value type is A & B & C.
   *
   * @param value - Value.
   * @param guard1 - Guard for type A.
   * @param guard2 - Guard for type B.
   * @param guard3 - Guard for type C.
   * @returns _True_ if value type is A & B & C, _false_ otherwise.
   */
  <A, B, C>(
    value: unknown,
    guard1: Guard<A>,
    guard2: Guard<B>,
    guard3: Guard<C>
  ): value is A & B & C;
  /**
   * Checks that value type is A & B & C & D.
   *
   * @param value - Value.
   * @param guard1 - Guard for type A.
   * @param guard2 - Guard for type B.
   * @param guard3 - Guard for type C.
   * @param guard4 - Guard for type D.
   * @returns _True_ if value type is A & B & C & D, _false_ otherwise.
   */
  <A, B, C, D>(
    value: unknown,
    guard1: Guard<A>,
    guard2: Guard<B>,
    guard3: Guard<C>,
    guard4: Guard<D>
  ): value is A & B & C & D;
  readonly factory: {
    /**
     * Creates guard for type A & B.
     *
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @returns Guard for type A & B.
     */
    <A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A & B>;
    /**
     * Creates guard for type A & B & C.
     *
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns Guard for type A & B & C.
     */
    <A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<
      A & B & C
    >;
    /**
     * Creates guard for type A & B & C & D.
     *
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @param guard4 - Guard for type D.
     * @returns Guard for type A & B & C & D.
     */
    <A, B, C, D>(
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>,
      guard4: Guard<D>
    ): Guard<A & B & C & D>;
  };
} = o.extend(
  (value: unknown, ...guards: Guard[]): value is unknown =>
    guards.every(guard => guard(value)),

  {
    factory(...guards: Guard[]): Guard {
      return (value): value is unknown => guards.every(guard => guard(value));
    }
  }
);

/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export const array = o.extend(
  (value: unknown): value is types.unknowns => Array.isArray(value),
  {
    /**
     * Checks that value type is T[].
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of<T>(this: void, value: unknown, guard: Guard<T>): value is readonly T[] {
      return array(value) && value.every(guard);
    }
  }
);

/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export const indexedObject = o.extend(
  (value: unknown): value is types.IndexedObject =>
    typeof value === "object" && value !== null,
  {
    /**
     * Checks that value type is IndexedObject\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of<T>(
      this: void,
      value: unknown,
      guard: Guard<T>
    ): value is types.IndexedObject<T> {
      return object(value) && o.values(value).every(guard);
    }
  }
);

/**
 * Checks that value type is Map.
 *
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
export const map = o.extend(
  (value: unknown): value is ReadonlyMap<unknown, unknown> =>
    value instanceof Map,
  {
    /**
     * Checks that value type is Map\<K, V\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of<K, V>(
      this: void,
      value: unknown,
      keyGuard: Guard<K>,
      valueGuard: Guard<V>
    ): value is ReadonlyMap<K, V> {
      return (
        map(value) &&
        a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v))
      );
    }
  }
);

/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
export const object: {
  /**
   * Checks that value is an object.
   *
   * @param value - Value.
   * @returns _True_ if value is an object, _false_ otherwise.
   */
  (value: unknown): value is object;
  readonly factory: {
    /**
     * Creates object guard.
     *
     * @param required - Guards for required properties.
     * @param optional - Guards for optional properties.
     * @returns Object guard.
     */
    <R extends object, O extends object>(
      required: Guards<R, keyof R>,
      optional: Guards<O, keyof O>
    ): Guard<OptionalStyle<Partial<O>> & UndefinedStyle<R>>;
    /**
     * Creates object guard.
     *
     * @param required - Guards for required properties.
     * @param optional - Guards for optional properties.
     * @returns Object guard.
     */
    <T extends object>(
      required: Guards<T, RequiredKeys<T>>,
      optional: Guards<T, OptionalKeys<T>>
    ): Guard<T>;
  };
  readonly of: {
    /**
     * Checks that value is an object.
     *
     * @param value - Value.
     * @param required - Guards for required properties.
     * @param optional - Guards for optional properties.
     * @returns _True_ if value is an object, _false_ otherwise.
     */
    <R extends object, O extends object>(
      value: unknown,
      required: Guards<R, keyof R>,
      optional: Guards<O, keyof O>
    ): value is OptionalStyle<Partial<O>> & UndefinedStyle<R>;
    /**
     * Checks that value is an object.
     *
     * @param value - Value.
     * @param required - Guards for required properties.
     * @param optional - Guards for optional properties.
     * @returns _True_ if value is an object, _false_ otherwise.
     */
    <T extends object>(
      value: unknown,
      required: Guards<T, RequiredKeys<T>>,
      optional: Guards<T, OptionalKeys<T>>
    ): value is T;
  };
} = o.extend(
  (value: unknown): value is object =>
    typeof value === "object" && value !== null,
  {
    factory<T extends object>(
      required: Guards<T, RequiredKeys<T>>,
      optional: Guards<T, OptionalKeys<T>>
    ): Guard<T> {
      return (value): value is T => object.of(value, required, optional);
    },
    of<T extends object>(
      value: unknown,
      required: Guards<T, RequiredKeys<T>>,
      optional: Guards<T, OptionalKeys<T>>
    ): value is T {
      return (
        indexedObject(value) &&
        o.every(required, (guard, key) =>
          checkRequiredProp(value, key, guard)
        ) &&
        o.every(optional, (guard, key) => checkOptionalProp(value, key, guard))
      );
    }
  }
);

export const or: {
  /**
   * Checks that value type is A | B.
   *
   * @param value - Value.
   * @param guard1 - Guard for type A.
   * @param guard2 - Guard for type B.
   * @returns _True_ if value type is A | B, _false_ otherwise.
   */
  <A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A | B;
  /**
   * Checks that value type is A | B | C.
   *
   * @param value - Value.
   * @param guard1 - Guard for type A.
   * @param guard2 - Guard for type B.
   * @param guard3 - Guard for type C.
   * @returns _True_ if value type is A | B | C, _false_ otherwise.
   */
  <A, B, C>(
    value: unknown,
    guard1: Guard<A>,
    guard2: Guard<B>,
    guard3: Guard<C>
  ): value is A | B | C;
  /**
   * Checks that value type is A | B | C | D.
   *
   * @param value - Value.
   * @param guard1 - Guard for type A.
   * @param guard2 - Guard for type B.
   * @param guard3 - Guard for type C.
   * @param guard4 - Guard for type D.
   * @returns _True_ if value type is A | B | C | D, _false_ otherwise.
   */
  <A, B, C, D>(
    value: unknown,
    guard1: Guard<A>,
    guard2: Guard<B>,
    guard3: Guard<C>,
    guard4: Guard<D>
  ): value is A | B | C | D;
  readonly factory: {
    /**
     * Creates guard for type A | B.
     *
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @returns Guard for type A | B.
     */
    <A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A | B>;
    /**
     * Creates guard for type A | B | C.
     *
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns Guard for type A | B | C.
     */
    <A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<
      A | B | C
    >;
    /**
     * Creates guard for type A | B | C | D.
     *
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @param guard4 - Guard for type D.
     * @returns Guard for type A | B | C | D.
     */
    <A, B, C, D>(
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>,
      guard4: Guard<D>
    ): Guard<A | B | C | D>;
  };
} = o.extend(
  (value: unknown, ...guards: Guard[]): value is unknown =>
    guards.some(guard => guard(value)),
  {
    factory(...guards: Guard[]): Guard {
      return (value): value is unknown => guards.some(guard => guard(value));
    }
  }
);

/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
export const set = o.extend(
  (value: unknown): value is ReadonlySet<unknown> => value instanceof Set,
  {
    /**
     * Checks that value type is Set\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of<T>(
      this: void,
      value: unknown,
      guard: Guard<T>
    ): value is ReadonlySet<T> {
      return set(value) && a.fromIterable(value).every(v => guard(v));
    }
  }
);

export const tuple: {
  /**
   * Checks that value type is [A].
   *
   * @param value - Value.
   * @param guard - Guard for type A.
   * @returns _True_ if value type is [A], _false_ otherwise.
   */
  <A>(value: unknown, guard: Guard<A>): value is readonly [A];
  /**
   * Checks that value type is [A, B].
   *
   * @param value - Value.
   * @param guard1 - Guard for type A.
   * @param guard2 - Guard for type B.
   * @returns _True_ if value type is [A, B], _false_ otherwise.
   */
  <A, B>(
    value: unknown,
    guard1: Guard<A>,
    guard2: Guard<B>
  ): value is readonly [A, B];
  /**
   * Checks that value type is [A, B, C].
   *
   * @param value - Value.
   * @param guard1 - Guard for type A.
   * @param guard2 - Guard for type B.
   * @param guard3 - Guard for type C.
   * @returns _True_ if value type is [A, B, C], _false_ otherwise.
   */
  <A, B, C>(
    value: unknown,
    guard1: Guard<A>,
    guard2: Guard<B>,
    guard3: Guard<C>
  ): value is readonly [A, B, C];
  /**
   * Checks that value type is [A, B, C, D].
   *
   * @param value - Value.
   * @param guard1 - Guard for type A.
   * @param guard2 - Guard for type B.
   * @param guard3 - Guard for type C.
   * @param guard4 - Guard for type D.
   * @returns _True_ if value type is [A, B, C, D], _false_ otherwise.
   */
  <A, B, C, D>(
    value: unknown,
    guard1: Guard<A>,
    guard2: Guard<B>,
    guard3: Guard<C>,
    guard4: Guard<D>
  ): value is readonly [A, B, C, D];
  readonly factory: {
    /**
     * Creates guard for type [A].
     *
     * @param guard - Guard for type A.
     * @returns Guard for type [A].
     */
    <A>(guard: Guard<A>): Guard<readonly [A]>;
    /**
     * Creates guard for type [A, B].
     *
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @returns Guard for type [A, B].
     */
    <A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<readonly [A, B]>;
    /**
     * Creates guard for type [A, B, C].
     *
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns Guard for type [A, B, C].
     */
    <A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<
      readonly [A, B, C]
    >;
    /**
     * Creates guard for type [A, B, C, D].
     *
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @param guard4 - Guard for type D.
     * @returns Guard for type [A, B, C, D].
     */
    <A, B, C, D>(
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>,
      guard4: Guard<D>
    ): Guard<readonly [A, B, C, D]>;
  };
} = o.extend(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Ok
  (value: unknown, ...guards: Guard[]): value is any =>
    array(value) && guards.every((guard, index) => guard(value[index])),
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Ok
    factory(...guards: Guard[]): Guard<any> {
      return (value): value is unknown =>
        array(value) && guards.every((guard, index) => guard(value[index]));
    }
  }
);

/**
 * Checks that value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
export const not = o.extend(
  <T, V>(value: V, guard: Guard<T>): value is Exclude<V, T> => !guard(value),
  {
    array: _notFactory(array),
    boolean: _notFactory(boolean),
    empty: _notFactory(empty),
    factory: _notFactory,
    false: _notFactory(_false),
    indexedObject: _notFactory(indexedObject),
    map: _notFactory(map),
    null: _notFactory(_null),
    numStr: _notFactory(numStr),
    number: _notFactory(number),
    object: _notFactory(object),
    set: _notFactory(set),
    string: _notFactory(string),
    stringU: _notFactory(stringU),
    symbol: _notFactory(symbol),
    true: _notFactory(_true),
    undefined: _notFactory(_undefined)
  }
);

export const arrayU = or.factory(array, _undefined);

export const arrays = factory(array.of, array);

export const arraysU = or.factory(arrays, _undefined);

export const booleanU = or.factory(boolean, _undefined);

export const booleans = factory(array.of, boolean);

export const booleansU = or.factory(booleans, _undefined);

export const indexedObjectU = or.factory(indexedObject, _undefined);

export const indexedObjects = factory(array.of, indexedObject);

export const indexedObjectsU = or.factory(indexedObjects, _undefined);

export const mapU = or.factory(map, _undefined);

export const maps = factory(array.of, map);

export const mapsU = or.factory(maps, _undefined);

export const numStrU = or.factory(numStr, _undefined);

export const numStrs = factory(array.of, numStr);

export const numStrsU = or.factory(numStrs, _undefined);

export const numberU = or.factory(number, _undefined);

export const numbers = factory(array.of, number);

export const numbersU = or.factory(numbers, _undefined);

export const objectU = or.factory(object, _undefined);

export const objects = factory(array.of, object);

export const objectsU = or.factory(objects, _undefined);

export const setU = or.factory(set, _undefined);

export const sets = factory(array.of, set);

export const setsU = or.factory(sets, _undefined);

export const strings = factory(array.of, string);

export const stringsU = or.factory(strings, _undefined);

export const symbolU = or.factory(symbol, _undefined);

export const symbols = factory(array.of, symbol);

export const symbolsU = or.factory(symbols, _undefined);

export const unknowns = factory(array.of, unknown);

export const unknownsU = or.factory(unknowns, _undefined);

export interface ExclusionGuard<T> {
  /**
   * Checks that value type is not T.
   *
   * @param value - Value.
   * @returns _True_ if value type is not T, _false_ otherwise.
   */
  <V>(value: V): value is Exclude<V, T>;
}

export interface Guard<T = unknown> {
  /**
   * Checks that value type is T.
   *
   * @param value - Value.
   * @returns _True_ if value type is T, _false_ otherwise.
   */
  (value: unknown): value is T;
}

export type Guards<T, K extends keyof T = keyof T> = {
  readonly [L in K]-?: Guard<T[L]>;
};

export interface MultiArgGuard<T, A extends unknown[]> {
  /**
   * Checks that value type is T.
   *
   * @param value - Value.
   * @param args - Arguments.
   * @returns _True_ if value type is T, _false_ otherwise.
   */
  (value: unknown, ...args: A): value is T;
}

/**
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export function boolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function callable<T extends Function>(value: unknown): value is T {
  return typeof value === "function";
}

/**
 * Checks that value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export function empty(value: unknown): value is types.empty {
  return value === null || value === undefined;
}

/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function enumeration<T extends PropertyKey>(
  value: unknown,
  vo: ValidationObject<T>
): value is T {
  return typedef<ReadonlySet<unknown>>(vo).has(value);
}

/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
 * @returns Single-arg guard.
 */
export function factory<T, A extends unknown[]>(
  guard: MultiArgGuard<T, A>,
  ...args: A
): Guard<T> {
  return (value): value is T => guard(value, ...args);
}

/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function instance<T>(value: unknown, ctor: Constructor<T>): value is T {
  return value instanceof ctor;
}

/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function instances<T>(
  value: unknown,
  ctor: Constructor<T>
): value is readonly T[] {
  return array(value) && value.every(v => v instanceof ctor);
}

/**
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export function numStr(value: unknown): value is types.NumStr {
  switch (typeof value) {
    case "number":
      return !Number.isNaN(value);

    case "string":
      return true;

    default:
      return false;
  }
}

/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export function number(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function string(value: unknown): value is string {
  return typeof value === "string";
}

/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function stringU(value: unknown): value is string {
  switch (typeof value) {
    case "string":
      return value !== "";

    case "undefined":
      return true;

    default:
      return false;
  }
}

/**
 * Checks that value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export function symbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export function unknown(_value: unknown): _value is unknown {
  return true;
}

/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
function _false(value: unknown): value is false {
  return value === false;
}

/**
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
function _notFactory<T>(guard: Guard<T>) {
  return <V>(value: V): value is Exclude<V, T> => !guard(value);
}

/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function _null(value: unknown): value is null {
  return value === null;
}

/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value: unknown): value is true {
  return value === true;
}

/**
 * Checks that value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function _undefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * Checks that object has optional property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has optional property, _false_ otherwise.
 */
function checkOptionalProp(
  obj: types.IndexedObject,
  key: PropertyKey,
  guard: Guard
): boolean {
  return o.hasOwnProp(key, obj) ? guard(obj[key]) : true;
}

/**
 * Checks object has required property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has required property, _false_ otherwise.
 */
function checkRequiredProp(
  obj: types.IndexedObject,
  key: PropertyKey,
  guard: Guard
): boolean {
  return o.hasOwnProp(key, obj) ? guard(obj[key]) : false;
}
