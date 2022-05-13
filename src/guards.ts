/* eslint-disable @skylib/primary-export-only -- Wait for @skylib/eslint update */

import * as a from "./array";
import { typedef } from "./helpers";
import { defineFn, overloadedFn } from "./module-definition";
import * as o from "./object";
import type { ValidationObject } from "./helpers";
import type * as types from "./types";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";

export {
  _false as false,
  _null as null,
  _true as true,
  _undefined as undefined
};

export const and = defineFn(
  overloadedFn(() => {
    return _and;

    /**
     * Checks if value type is A & B.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @returns _True_ if value type is A & B, _false_ otherwise.
     */
    function _and<A, B>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>
    ): value is A & B;

    /**
     * Checks if value type is A & B & C.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns _True_ if value type is A & B & C, _false_ otherwise.
     */
    function _and<A, B, C>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>
    ): value is A & B & C;

    /**
     * Checks if value type is A & B & C & D.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @param guard4 - Guard for type D.
     * @returns _True_ if value type is A & B & C & D, _false_ otherwise.
     */
    function _and<A, B, C, D>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>,
      guard4: Guard<D>
    ): value is A & B & C & D;

    function _and(value: unknown, ...guards: Guards): value is unknown {
      return guards.every(guard => guard(value));
    }
  }),
  {
    factory: overloadedFn(() => {
      return _factory;

      /**
       * Creates guard for type A & B.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @returns Guard for type A & B.
       */
      function _factory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A & B>;

      /**
       * Creates guard for type A & B & C.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @returns Guard for type A & B & C.
       */
      function _factory<A, B, C>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>
      ): Guard<A & B & C>;

      /**
       * Creates guard for type A & B & C & D.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @param guard4 - Guard for type D.
       * @returns Guard for type A & B & C & D.
       */
      function _factory<A, B, C, D>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>,
        guard4: Guard<D>
      ): Guard<A & B & C & D>;

      function _factory(...guards: Guards): Guard {
        return (value): value is unknown => guards.every(guard => guard(value));
      }
    })
  }
);

export const array = defineFn(
  /**
   * Checks if value is an array.
   *
   * @param value - Value.
   * @returns _True_ if value is an array, _false_ otherwise.
   */
  (value: unknown): value is types.unknowns => Array.isArray(value),
  {
    /**
     * Checks if value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of: <T>(value: unknown, guard: Guard<T>): value is readonly T[] =>
      array(value) && value.every(guard)
  }
);

export const indexedObject = defineFn(
  /**
   * Checks if value type is IndexedObject.
   *
   * @param value - Value.
   * @returns _True_ if value type is IndexedObject, _false_ otherwise.
   */
  (value: unknown): value is types.IndexedObject =>
    typeof value === "object" && value !== null,
  {
    /**
     * Checks if value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of: <T>(value: unknown, guard: Guard<T>): value is types.IndexedObject<T> =>
      object(value) && o.values(value).every(guard)
  }
);

export const map = defineFn(
  /**
   * Checks if value type is Map.
   *
   * @param value - Value.
   * @returns _True_ if value type is Map, _false_ otherwise.
   */
  (value: unknown): value is ReadonlyMap<unknown, unknown> =>
    value instanceof Map,
  {
    /**
     * Checks if value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of: <K, V>(
      value: unknown,
      keyGuard: Guard<K>,
      valueGuard: Guard<V>
    ): value is ReadonlyMap<K, V> =>
      map(value) &&
      a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v))
  }
);

export const object = defineFn(
  /**
   * Checks if value is an object.
   *
   * @param value - Value.
   * @returns _True_ if value is an object, _false_ otherwise.
   */
  (value: unknown): value is object =>
    typeof value === "object" && value !== null,
  {
    factory: overloadedFn(() => {
      return _factory;

      /**
       * Creates object guard.
       *
       * @param required - Guards for required properties.
       * @param optional - Guards for optional properties.
       * @returns Object guard.
       */
      function _factory<R extends object, O extends object>(
        required: ObjectGuards<R, keyof R>,
        optional: ObjectGuards<O, keyof O>
      ): Guard<types.OptionalStyle<Partial<O>> & types.UndefinedStyle<R>>;

      /**
       * Creates object guard.
       *
       * @param required - Guards for required properties.
       * @param optional - Guards for optional properties.
       * @returns Object guard.
       */
      function _factory<T extends object>(
        required: ObjectGuards<T, RequiredKeys<T>>,
        optional: ObjectGuards<T, OptionalKeys<T>>
      ): Guard<T>;

      function _factory<T extends object>(
        required: ObjectGuards<T, RequiredKeys<T>>,
        optional: ObjectGuards<T, OptionalKeys<T>>
      ): Guard<T> {
        return (value): value is T => object.of(value, required, optional);
      }
    }),
    of: overloadedFn(() => {
      return _of;

      /**
       * Checks if value is an object.
       *
       * @param value - Value.
       * @param required - Guards for required properties.
       * @param optional - Guards for optional properties.
       * @returns _True_ if value is an object, _false_ otherwise.
       */
      function _of<R extends object, O extends object>(
        value: unknown,
        required: ObjectGuards<R, keyof R>,
        optional: ObjectGuards<O, keyof O>
      ): value is types.OptionalStyle<Partial<O>> & types.UndefinedStyle<R>;

      /**
       * Checks if value is an object.
       *
       * @param value - Value.
       * @param required - Guards for required properties.
       * @param optional - Guards for optional properties.
       * @returns _True_ if value is an object, _false_ otherwise.
       */
      function _of<T extends object>(
        value: unknown,
        required: ObjectGuards<T, RequiredKeys<T>>,
        optional: ObjectGuards<T, OptionalKeys<T>>
      ): value is T;

      function _of<T extends object>(
        value: unknown,
        required: ObjectGuards<T, RequiredKeys<T>>,
        optional: ObjectGuards<T, OptionalKeys<T>>
      ): value is T {
        return (
          indexedObject(value) &&
          o.every(required, (guard, key) =>
            checkRequiredProp(value, key, guard)
          ) &&
          o.every(optional, (guard, key) =>
            checkOptionalProp(value, key, guard)
          )
        );
      }
    })
  }
);

export const or = defineFn(
  overloadedFn(() => {
    return _or;

    /**
     * Checks if value type is A | B.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @returns _True_ if value type is A | B, _false_ otherwise.
     */
    function _or<A, B>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>
    ): value is A | B;

    /**
     * Checks if value type is A | B | C.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns _True_ if value type is A | B | C, _false_ otherwise.
     */
    function _or<A, B, C>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>
    ): value is A | B | C;

    /**
     * Checks if value type is A | B | C | D.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @param guard4 - Guard for type D.
     * @returns _True_ if value type is A | B | C | D, _false_ otherwise.
     */
    function _or<A, B, C, D>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>,
      guard4: Guard<D>
    ): value is A | B | C | D;

    function _or(value: unknown, ...guards: Guards): value is unknown {
      return guards.some(guard => guard(value));
    }
  }),
  {
    factory: overloadedFn(() => {
      return _factory;

      /**
       * Creates guard for type A | B.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @returns Guard for type A | B.
       */
      function _factory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A | B>;

      /**
       * Creates guard for type A | B | C.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @returns Guard for type A | B | C.
       */
      function _factory<A, B, C>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>
      ): Guard<A | B | C>;

      /**
       * Creates guard for type A | B | C | D.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @param guard4 - Guard for type D.
       * @returns Guard for type A | B | C | D.
       */
      function _factory<A, B, C, D>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>,
        guard4: Guard<D>
      ): Guard<A | B | C | D>;

      function _factory(...guards: Guards): Guard {
        return (value): value is unknown => guards.some(guard => guard(value));
      }
    })
  }
);

export const set = defineFn(
  /**
   * Checks if value type is Set.
   *
   * @param value - Value.
   * @returns _True_ if value type is Set, _false_ otherwise.
   */
  (value: unknown): value is ReadonlySet<unknown> => value instanceof Set,
  {
    /**
     * Checks if value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of: <T>(value: unknown, guard: Guard<T>): value is ReadonlySet<T> =>
      set(value) && a.fromIterable(value).every(v => guard(v))
  }
);

export const tuple = defineFn(
  overloadedFn(() => {
    return _tuple;

    /**
     * Checks if value type is [A].
     *
     * @param value - Value.
     * @param guard - Guard for type A.
     * @returns _True_ if value type is [A], _false_ otherwise.
     */
    function _tuple<A>(value: unknown, guard: Guard<A>): value is readonly [A];

    /**
     * Checks if value type is [A, B].
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @returns _True_ if value type is [A, B], _false_ otherwise.
     */
    function _tuple<A, B>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>
      // eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
    ): value is readonly [A, B];

    /**
     * Checks if value type is [A, B, C].
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns _True_ if value type is [A, B, C], _false_ otherwise.
     */
    function _tuple<A, B, C>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>
      // eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
    ): value is readonly [A, B, C];

    /**
     * Checks if value type is [A, B, C, D].
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @param guard4 - Guard for type D.
     * @returns _True_ if value type is [A, B, C, D], _false_ otherwise.
     */
    function _tuple<A, B, C, D>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>,
      guard4: Guard<D>
      // eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
    ): value is readonly [A, B, C, D];

    function _tuple(value: unknown, ...guards: Guards): value is unknown {
      return (
        array(value) && guards.every((guard, index) => guard(value[index]))
      );
    }
  }),
  {
    factory: overloadedFn(() => {
      return _factory;

      /**
       * Creates guard for type [A].
       *
       * @param guard - Guard for type A.
       * @returns Guard for type [A].
       */
      function _factory<A>(guard: Guard<A>): Guard<readonly [A]>;

      /**
       * Creates guard for type [A, B].
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @returns Guard for type [A, B].
       */
      function _factory<A, B>(
        guard1: Guard<A>,
        guard2: Guard<B>
        // eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
      ): Guard<readonly [A, B]>;

      /**
       * Creates guard for type [A, B, C].
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @returns Guard for type [A, B, C].
       */
      function _factory<A, B, C>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>
        // eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
      ): Guard<readonly [A, B, C]>;

      /**
       * Creates guard for type [A, B, C, D].
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @param guard4 - Guard for type D.
       * @returns Guard for type [A, B, C, D].
       */
      function _factory<A, B, C, D>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>,
        guard4: Guard<D>
        // eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
      ): Guard<readonly [A, B, C, D]>;

      function _factory(...guards: Guards): Guard {
        return (value): value is unknown =>
          array(value) && guards.every((guard, index) => guard(value[index]));
      }
    })
  }
);

export const not = defineFn(
  /**
   * Checks if value type is not T.
   *
   * @param value - Value.
   * @param guard - Guard for type T.
   * @returns _True_ if value type is not T, _false_ otherwise.
   */
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
   * Checks if value type is not T.
   *
   * @param value - Value.
   * @returns _True_ if value type is not T, _false_ otherwise.
   */
  <V>(value: V): value is Exclude<V, T>;
}

export interface Guard<T = unknown> {
  /**
   * Checks if value type is T.
   *
   * @param value - Value.
   * @returns _True_ if value type is T, _false_ otherwise.
   */
  (value: unknown): value is T;
}

export type Guards = readonly Guard[];

export interface MultiArgGuard<T, A extends types.unknowns> {
  /**
   * Checks if value type is T.
   *
   * @param value - Value.
   * @param args - Arguments.
   * @returns _True_ if value type is T, _false_ otherwise.
   */
  (value: unknown, ...args: A): value is T;
}

export type ObjectGuards<T, K extends keyof T = keyof T> = {
  readonly [L in K]-?: Guard<T[L]>;
};

/**
 * Checks if value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export function boolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function callable<T extends Function>(value: unknown): value is T {
  return typeof value === "function";
}

/**
 * Checks if value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export function empty(value: unknown): value is types.empty {
  return value === null || value === undefined;
}

/**
 * Checks if value type is T.
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
export function factory<T, A extends types.unknowns>(
  guard: MultiArgGuard<T, A>,
  ...args: A
): Guard<T> {
  return (value): value is T => guard(value, ...args);
}

/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function instance<T>(
  value: unknown,
  ctor: types.Constructor<T>
): value is T {
  return value instanceof ctor;
}

/**
 * Checks if value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function instances<T>(
  value: unknown,
  ctor: types.Constructor<T>
): value is readonly T[] {
  return array(value) && value.every(v => v instanceof ctor);
}

/**
 * Checks if value is _never_.
 *
 * @param _value - Value.
 * @returns _False_.
 */
export function never(_value: unknown): _value is never {
  return false;
}

/**
 * Checks if value type is NumStr.
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
 * Checks if value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export function number(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

/**
 * Checks if value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function string(value: unknown): value is string {
  return typeof value === "string";
}

/**
 * Checks if value is a string.
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
 * Checks if value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export function symbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

/**
 * Checks if value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_.
 */
export function unknown(_value: unknown): _value is unknown {
  return true;
}

/**
 * Checks if value is _false_.
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
 * Checks if value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function _null(value: unknown): value is null {
  return value === null;
}

/**
 * Checks if value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value: unknown): value is true {
  return value === true;
}

/**
 * Checks if value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function _undefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * Checks if object has optional property.
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
 * Checks if object has required property.
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
