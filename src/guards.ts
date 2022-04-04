import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";

import * as a from "./array";
import type { ValidationObject } from "./helpers";
import { typedef } from "./helpers";
import * as o from "./object";
import type * as types from "./types/core";
import type { Constructor } from "./types/function";
import type { OptionalStyle, UndefinedStyle } from "./types/object";

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
not.factory =
  <T>(guard: Guard<T>) =>
  <V>(value: V): value is Exclude<V, T> =>
    !guard(value);

/**
 * Checks that value type is A & B.
 *
 * @param value - Value.
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
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
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
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
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @param guard4 - Guard for type D.
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
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @returns Guard for type A & B.
 */
function _andFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A & B>;

/**
 * Creates guard for type A & B & C.
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @returns Guard for type A & B & C.
 */
function _andFactory<A, B, C>(
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
function _andFactory<A, B, C, D>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>,
  guard4: Guard<D>
): Guard<A & B & C & D>;

function _andFactory(...guards: Guard[]): Guard {
  return (value): value is unknown => guards.every(guard => guard(value));
}

and.factory = _andFactory;

/**
 * Checks that value type is A | B.
 *
 * @param value - Value.
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
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
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
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
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @param guard4 - Guard for type D.
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
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @returns Guard for type A | B.
 */
function _orFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A | B>;

/**
 * Creates guard for type A | B | C.
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @returns Guard for type A | B | C.
 */
function _orFactory<A, B, C>(
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
function _orFactory<A, B, C, D>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>,
  guard4: Guard<D>
): Guard<A | B | C | D>;

function _orFactory(...guards: Guard[]): Guard {
  return (value): value is unknown => guards.some(guard => guard(value));
}

or.factory = _orFactory;

/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export function array(value: unknown): value is types.unknowns {
  return Array.isArray(value);
}

/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
array.of = <T>(value: unknown, guard: Guard<T>): value is readonly T[] =>
  array(value) && value.every(guard);

export const arrayU = or.factory(array, _undefined);

export const arrays = factory(array.of, array);

export const arraysU = or.factory(arrays, _undefined);

not.array = not.factory(array);

/**
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export function boolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export const booleanU = or.factory(boolean, _undefined);

export const booleans = factory(array.of, boolean);

export const booleansU = or.factory(booleans, _undefined);

not.boolean = not.factory(boolean);

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

not.empty = not.factory(empty);

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
function _false(value: unknown): value is false {
  return value === false;
}

export { _false as false };

not.false = not.factory(_false);

/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export function indexedObject(value: unknown): value is types.IndexedObject {
  return typeof value === "object" && value !== null;
}

/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
indexedObject.of = <T>(
  value: unknown,
  guard: Guard<T>
): value is types.IndexedObject<T> =>
  object(value) && o.values(value).every(guard);

export const indexedObjectU = or.factory(indexedObject, _undefined);

export const indexedObjects = factory(array.of, indexedObject);

export const indexedObjectsU = or.factory(indexedObjects, _undefined);

not.indexedObject = not.factory(indexedObject);

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

/**
 * Checks that value type is Map\<K, V\>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
 */
map.of = <K, V>(
  value: unknown,
  keyGuard: Guard<K>,
  valueGuard: Guard<V>
): value is ReadonlyMap<K, V> =>
  map(value) &&
  a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v));

export const mapU = or.factory(map, _undefined);

export const maps = factory(array.of, map);

export const mapsU = or.factory(maps, _undefined);

not.map = not.factory(map);

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

not.null = not.factory(_null);

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

export const numStrU = or.factory(numStr, _undefined);

export const numStrs = factory(array.of, numStr);

export const numStrsU = or.factory(numStrs, _undefined);

not.numStr = not.factory(numStr);

/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export function number(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

export const numberU = or.factory(number, _undefined);

export const numbers = factory(array.of, number);

export const numbersU = or.factory(numbers, _undefined);

not.number = not.factory(number);

/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
export function object(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

/**
 * Creates object guard.
 *
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns Object guard.
 */
function _objectFactory<R extends object, O extends object>(
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
function _objectFactory<T extends object>(
  required: Guards<T, RequiredKeys<T>>,
  optional: Guards<T, OptionalKeys<T>>
): Guard<T>;

function _objectFactory<T extends object>(
  required: Guards<T, RequiredKeys<T>>,
  optional: Guards<T, OptionalKeys<T>>
): Guard<T> {
  return (value): value is T => object.of(value, required, optional);
}

object.factory = _objectFactory;

/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
function _objectOf<R extends object, O extends object>(
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
function _objectOf<T extends object>(
  value: unknown,
  required: Guards<T, RequiredKeys<T>>,
  optional: Guards<T, OptionalKeys<T>>
): value is T;

function _objectOf<T extends object>(
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

object.of = _objectOf;

export const objectU = or.factory(object, _undefined);

export const objects = factory(array.of, object);

export const objectsU = or.factory(objects, _undefined);

not.object = not.factory(object);

/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
export function set(value: unknown): value is ReadonlySet<unknown> {
  return value instanceof Set;
}

/**
 * Checks that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
 */
set.of = <T>(value: unknown, guard: Guard<T>): value is ReadonlySet<T> =>
  set(value) && a.fromIterable(value).every(v => guard(v));

export const setU = or.factory(set, _undefined);

export const sets = factory(array.of, set);

export const setsU = or.factory(sets, _undefined);

not.set = not.factory(set);

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

export const strings = factory(array.of, string);

export const stringsU = or.factory(strings, _undefined);

not.string = not.factory(string);

/**
 * Checks that value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export function symbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

export const symbolU = or.factory(symbol, _undefined);

export const symbols = factory(array.of, symbol);

export const symbolsU = or.factory(symbols, _undefined);

not.symbol = not.factory(symbol);

/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value: unknown): value is true {
  return value === true;
}

export { _true as true };

not.true = not.factory(_true);

/**
 * Checks that value type is [A].
 *
 * @param value - Value.
 * @param guard - Guard for type A.
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
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
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
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
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
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @param guard4 - Guard for type D.
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
 * @param guard - Guard for type A.
 * @returns Guard for type [A].
 */
function _tupleFactory<A>(guard: Guard<A>): Guard<readonly [A]>;

/**
 * Creates guard for type [A, B].
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @returns Guard for type [A, B].
 */
function _tupleFactory<A, B>(
  guard1: Guard<A>,
  guard2: Guard<B>
): Guard<readonly [A, B]>;

/**
 * Creates guard for type [A, B, C].
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @returns Guard for type [A, B, C].
 */
function _tupleFactory<A, B, C>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>
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
function _tupleFactory<A, B, C, D>(
  guard1: Guard<A>,
  guard2: Guard<B>,
  guard3: Guard<C>,
  guard4: Guard<D>
): Guard<readonly [A, B, C, D]>;

function _tupleFactory(...guards: Guard[]): Guard {
  return (value): value is unknown =>
    array(value) && guards.every((guard, index) => guard(value[index]));
}

tuple.factory = _tupleFactory;

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

not.undefined = not.factory(_undefined);

/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export function unknown(_value: unknown): _value is unknown {
  return true;
}

export const unknowns = factory(array.of, unknown);

export const unknownsU = or.factory(unknowns, _undefined);

/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/

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
