import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";

import * as a from "./array";
import type { ValidationObject } from "./helpers";
import { typedef } from "./helpers";
import * as o from "./object";
// eslint-disable-next-line @skylib/consistent-import
import type * as types from "./types/core";
import type { Constructor } from "./types/function";
import type {
  OptionalPropertiesToOptional,
  OptionalPropertiesToUndefined
} from "./types/object";

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

export type ObjectOfReturn<
  R extends object,
  O extends object
> = OptionalPropertiesToOptional<Partial<O>> & OptionalPropertiesToUndefined<R>;

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
 * Checks that value type is A & B.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns _True_ if value type is A & B, _false_ otherwise.
 */
export function and<A, B>(
  value: unknown,
  guard1: Guard<A>,
  guard2: Guard<B>
): value is A & B;

/**
 * Checks that value type is A & B & C.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns _True_ if value type is A & B & C, _false_ otherwise.
 */
export function and<A, B, C>(
  value: unknown,
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>
): value is A & B & C;

/**
 * Checks that value type is A & B & C & D.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns _True_ if value type is A & B & C & D, _false_ otherwise.
 */
export function and<A, B, C, D>(
  value: unknown,
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>,
  guard4: Guard<D>
): value is A & B & C & D;

export function and(value: unknown, ...guards: Guard[]): value is unknown {
  return guards.every(guard => guard(value));
}

/**
 * Creates guard for type A & B.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns Guard for type A & B.
 */
export function andFactory<A, B>(
  guard1: Guard<A>,
  guard2: Guard<B>
): Guard<A & B>;

/**
 * Creates guard for type A & B & C.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns Guard for type A & B & C.
 */
export function andFactory<A, B, C>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>
): Guard<A & B & C>;

/**
 * Creates guard for type A & B & C & D.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns Guard for type A & B & C & D.
 */
export function andFactory<A, B, C, D>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>,
  guard4: Guard<D>
): Guard<A & B & C & D>;

export function andFactory(...guards: Guard[]): Guard {
  return (value): value is unknown => guards.every(guard => guard(value));
}

and.factory = andFactory;

/**
 * Checks that value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
export function not<T, V>(value: V, guard: Guard<T>): value is Exclude<V, T> {
  return !guard(value);
}

/**
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
export function notFactory<T>(guard: Guard<T>): ExclusionGuard<T> {
  return <V>(value: V): value is Exclude<V, T> => !guard(value);
}

not.factory = notFactory;

/**
 * Checks that value type is A | B.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns _True_ if value type is A | B, _false_ otherwise.
 */
export function or<A, B>(
  value: unknown,
  guard1: Guard<A>,
  guard2: Guard<B>
): value is A | B;

/**
 * Checks that value type is A | B | C.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns _True_ if value type is A | B | C, _false_ otherwise.
 */
export function or<A, B, C>(
  value: unknown,
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>
): value is A | B | C;

/**
 * Checks that value type is A | B | C | D.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns _True_ if value type is A | B | C | D, _false_ otherwise.
 */
export function or<A, B, C, D>(
  value: unknown,
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>,
  guard4: Guard<D>
): value is A | B | C | D;

export function or(value: unknown, ...guards: Guard[]): value is unknown {
  return guards.some(guard => guard(value));
}

/**
 * Creates guard for type A | B.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns Guard for type A | B.
 */
export function orFactory<A, B>(
  guard1: Guard<A>,
  guard2: Guard<B>
): Guard<A | B>;

/**
 * Creates guard for type A | B | C.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns Guard for type A | B | C.
 */
export function orFactory<A, B, C>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>
): Guard<A | B | C>;

/**
 * Creates guard for type A | B | C | D.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns Guard for type A | B | C | D.
 */
export function orFactory<A, B, C, D>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>,
  guard4: Guard<D>
): Guard<A | B | C | D>;

export function orFactory(...guards: Guard[]): Guard {
  return (value): value is unknown => guards.some(guard => guard(value));
}

or.factory = orFactory;

/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export function array(value: unknown): value is types.unknowns {
  return Array.isArray(value);
}

not.array = notFactory(array);

export const arrayU = orFactory(array, _undefined);

export const arrays = factory(arrayOf, array);

export const arraysU = orFactory(arrays, _undefined);

/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function arrayOf<T>(
  value: unknown,
  guard: Guard<T>
): value is readonly T[] {
  return array(value) && value.every(guard);
}

array.of = arrayOf;

/**
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export function boolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

not.boolean = notFactory(boolean);

export const booleanU = orFactory(boolean, _undefined);

export const booleans = factory(arrayOf, boolean);

export const booleansU = orFactory(booleans, _undefined);

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

not.empty = notFactory(empty);

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
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
export function _false(value: unknown): value is false {
  return value === false;
}

export { _false as false };

not.false = notFactory(_false);

/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export function indexedObject(value: unknown): value is types.IndexedObject {
  return typeof value === "object" && value !== null;
}

not.indexedObject = notFactory(indexedObject);

export const indexedObjectU = orFactory(indexedObject, _undefined);

export const indexedObjects = factory(arrayOf, indexedObject);

export const indexedObjectsU = orFactory(indexedObjects, _undefined);

/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
export function indexedObjectOf<T>(
  value: unknown,
  guard: Guard<T>
): value is types.IndexedObject<T> {
  return object(value) && o.values(value).every(guard);
}

indexedObject.of = indexedObjectOf;

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
 * Checks that value type is Map.
 *
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
export function map(value: unknown): value is ReadonlyMap<unknown, unknown> {
  return value instanceof Map;
}

not.map = notFactory(map);

export const mapU = orFactory(map, _undefined);

export const maps = factory(arrayOf, map);

export const mapsU = orFactory(maps, _undefined);

/**
 * Checks that value type is Map\<K, V\>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
 */
export function mapOf<K, V>(
  value: unknown,
  keyGuard: Guard<K>,
  valueGuard: Guard<V>
): value is ReadonlyMap<K, V> {
  return (
    value instanceof Map &&
    a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v))
  );
}

map.of = mapOf;

/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function _null(value: unknown): value is null {
  return value === null;
}

export { _null as null };

not.null = notFactory(_null);

/**
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export function numStr(value: unknown): value is types.NumStr {
  switch (typeof value) {
    case "number":
    case "string":
      return true;

    default:
      return false;
  }
}

not.numStr = notFactory(numStr);

export const numStrU = orFactory(numStr, _undefined);

export const numStrs = factory(arrayOf, numStr);

export const numStrsU = orFactory(numStrs, _undefined);

/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export function number(value: unknown): value is number {
  return typeof value === "number";
}

not.number = notFactory(number);

export const numberU = orFactory(number, _undefined);

export const numbers = factory(arrayOf, number);

export const numbersU = orFactory(numbers, _undefined);

/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
export function object(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

not.object = notFactory(object);

export const objectU = orFactory(object, _undefined);

export const objects = factory(arrayOf, object);

export const objectsU = orFactory(objects, _undefined);

/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function objectOf<R extends object, O extends object>(
  value: unknown,
  required: Guards<R, keyof R>,
  optional: Guards<O, keyof O>
): value is ObjectOfReturn<R, O>;

/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function objectOf<T extends object>(
  value: unknown,
  required: Guards<T, RequiredKeys<T>>,
  optional: Guards<T, OptionalKeys<T>>
): value is T;

export function objectOf<T extends object>(
  value: unknown,
  required: Guards<T, RequiredKeys<T>>,
  optional: Guards<T, OptionalKeys<T>>
): value is T {
  return (
    indexedObject(value) &&
    o.every(required, (guard, key) => checkRequiredProp(value, key, guard)) &&
    o.every(optional, (guard, key) => checkOptionalProp(value, key, guard))
  );
}

object.of = objectOf;

/**
 * Creates guard for type T.
 *
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns Guard for type T.
 */
export function objectOfFactory<R extends object, O extends object>(
  required: Guards<R, keyof R>,
  optional: Guards<O, keyof O>
): Guard<ObjectOfReturn<R, O>>;

/**
 * Creates guard for type T.
 *
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns Guard for type T.
 */
export function objectOfFactory<T extends object>(
  required: Guards<T, RequiredKeys<T>>,
  optional: Guards<T, OptionalKeys<T>>
): Guard<T>;

export function objectOfFactory<T extends object>(
  required: Guards<T, RequiredKeys<T>>,
  optional: Guards<T, OptionalKeys<T>>
): Guard<T> {
  return (value: unknown): value is T => objectOf(value, required, optional);
}

objectOf.factory = objectOfFactory;

/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
export function set(value: unknown): value is ReadonlySet<unknown> {
  return value instanceof Set;
}

not.set = notFactory(set);

export const setU = orFactory(set, _undefined);

export const sets = factory(arrayOf, set);

export const setsU = orFactory(sets, _undefined);

/**
 * Checks that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard.
 * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
 */
export function setOf<T>(
  value: unknown,
  guard: Guard<T>
): value is ReadonlySet<T> {
  return value instanceof Set && a.fromIterable(value).every(v => guard(v));
}

set.of = setOf;

/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function string(value: unknown): value is string {
  return typeof value === "string";
}

not.string = notFactory(string);

export const stringU = orFactory(string, _undefined);

export const strings = factory(arrayOf, string);

export const stringsU = orFactory(strings, _undefined);

/**
 * Checks that value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export function symbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

not.symbol = notFactory(symbol);

export const symbolU = orFactory(symbol, _undefined);

export const symbols = factory(arrayOf, symbol);

export const symbolsU = orFactory(symbols, _undefined);

/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
export function _true(value: unknown): value is true {
  return value === true;
}

export { _true as true };

not.true = notFactory(_true);

/**
 * Checks that value type is [A].
 *
 * @param value - Value.
 * @param guard - Guard .
 * @returns _True_ if value type is [A], _false_ otherwise.
 */
export function tuple<A>(
  value: unknown,
  guard: Guard<A>
): value is readonly [A];

/**
 * Checks that value type is [A, B].
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns _True_ if value type is [A, B], _false_ otherwise.
 */
export function tuple<A, B>(
  value: unknown,
  guard1: Guard<A>,
  guard2: Guard<B>
): value is readonly [A, B];

/**
 * Checks that value type is [A, B, C].
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns _True_ if value type is [A, B, C], _false_ otherwise.
 */
export function tuple<A, B, C>(
  value: unknown,
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>
): value is readonly [A, B, C];

/**
 * Checks that value type is [A, B, C, D].
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns _True_ if value type is [A, B, C, D], _false_ otherwise.
 */
export function tuple<A, B, C, D>(
  value: unknown,
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>,
  guard4: Guard<D>
): value is readonly [A, B, C, D];

export function tuple(value: unknown, ...guards: Guard[]): value is unknown {
  return array(value) && guards.every((guard, index) => guard(value[index]));
}

/**
 * Creates guard for type [A].
 *
 * @param guard - Guard.
 * @returns Guard for type [A].
 */
export function tupleFactory<A>(guard: Guard<A>): Guard<readonly [A]>;

/**
 * Creates guard for type [A, B].
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns Guard for type [A, B].
 */
export function tupleFactory<A, B>(
  guard1: Guard<A>,
  guard2: Guard<B>
): Guard<readonly [A, B]>;

/**
 * Creates guard for type [A, B, C].
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns Guard for type [A, B, C].
 */
export function tupleFactory<A, B, C>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>
): Guard<readonly [A, B, C]>;

/**
 * Creates guard for type [A, B, C, D].
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns Guard for type [A, B, C, D].
 */
export function tupleFactory<A, B, C, D>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>,
  guard4: Guard<D>
): Guard<readonly [A, B, C, D]>;

export function tupleFactory(...guards: Guard[]): Guard {
  return (value): value is unknown =>
    array(value) && guards.every((guard, index) => guard(value[index]));
}

tuple.factory = tupleFactory;

/**
 * Checks that value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function _undefined(value: unknown): value is undefined {
  return value === undefined;
}

export { _undefined as undefined };

not.undefined = notFactory(_undefined);

/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export function unknown(_value: unknown): _value is unknown {
  return true;
}

export const unknowns = factory(arrayOf, unknown);

export const unknownsU = orFactory(unknowns, _undefined);

/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/

/**
 * Checks optional prop.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns Check result.
 */
function checkOptionalProp(
  obj: types.IndexedObject,
  key: PropertyKey,
  guard: Guard
): boolean {
  return o.hasOwnProp(key, obj) ? guard(obj[key]) : true;
}

/**
 * Checks required prop.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns Check result.
 */
function checkRequiredProp(
  obj: types.IndexedObject,
  key: PropertyKey,
  guard: Guard
): boolean {
  return o.hasOwnProp(key, obj) ? guard(obj[key]) : false;
}
