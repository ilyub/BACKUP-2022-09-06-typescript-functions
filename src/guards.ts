/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[guards] */

import * as o from "./object";
// eslint-disable-next-line @skylib/consistent-import
import type * as types from "./types/core";

export type ExclusiveGuard<T> = <V>(value: V) => value is Exclude<V, T>;

export type Guard<T = unknown> = (value: unknown) => value is T;

export type Guards<T> = {
  readonly [K in keyof T]: Guard<T[K]>;
};

export type MultiArgGuard<T, A extends unknown[]> = (
  value: unknown,
  ...args: A
) => value is T;

/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Rest arguments.
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

export function and(value: unknown, ...guards: Guard[]): boolean {
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
 * Creates guard for not T type.
 *
 * @param guard - Guard for type T.
 * @returns Guard for not T type.
 */
export function notFactory<T>(guard: Guard<T>): ExclusiveGuard<T> {
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
export function array(value: unknown): value is readonly unknown[] {
  return Array.isArray(value);
}

export const arrays = factory(arrayOf, array);

export const arraysU = orFactory(arrays, undefinedGuard);

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
  return Array.isArray(value) && value.every(guard);
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

export const booleans = factory(arrayOf, boolean);

export const booleansU = orFactory(booleans, undefinedGuard);

/**
 * Checks that value type is booleanU.
 *
 * @param value - Value.
 * @returns _True_ if value type is booleanU, _false_ otherwise.
 */
export function booleanU(value: unknown): value is types.booleanU {
  return typeof value === "boolean" || value === undefined;
}

not.booleanU = notFactory(booleanU);

/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function callable<T extends Function>(value: unknown): value is T {
  return typeof value === "function";
}

not.callable = notFactory(callable);

/**
 * Checks that value type is T | undefined.
 *
 * @param value - Value.
 * @returns _True_ if value type is T | undefined, _false_ otherwise.
 */
export function callableU<T extends Function>(
  value: unknown
): value is T | undefined {
  return typeof value === "function" || value === undefined;
}

not.callableU = notFactory(callableU);

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
  vo: types.ValidationObject<T>
): value is T {
  return vo.has(value as T);
}

/**
 * Checks that value type is T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T | undefined, _false_ otherwise.
 */
export function enumerationU<T extends PropertyKey>(
  value: unknown,
  vo: types.ValidationObject<T>
): value is T | undefined {
  return vo.has(value as T) || value === undefined;
}

/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
export function falseGuard(value: unknown): value is false {
  return value === false;
}

export { falseGuard as false };

/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export function indexedObject(
  value: unknown
): value is types.ReadonlyIndexedObject {
  return typeof value === "object" && value !== null;
}

export const indexedObjects = factory(arrayOf, indexedObject);

export const indexedObjectsU = orFactory(indexedObjects, undefinedGuard);

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
): value is types.ReadonlyIndexedObject<T> {
  return object(value) && Object.values(value).every(guard);
}

indexedObject.of = indexedObjectOf;

/**
 * Checks that value type is T.
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
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function instances<T>(
  value: unknown,
  ctor: types.Constructor<T>
): value is readonly T[] {
  return Array.isArray(value) && value.every(x => x instanceof ctor);
}

/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function nullGuard(value: unknown): value is null {
  return value === null;
}

export { nullGuard as null };

not.null = notFactory(nullGuard);

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

export const numStrs = factory(arrayOf, numStr);

export const numStrsU = orFactory(numStrs, undefinedGuard);

/**
 * Checks that value type is NumStrU.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStrU, _false_ otherwise.
 */
export function numStrU(value: unknown): value is types.NumStrU {
  switch (typeof value) {
    case "number":
    case "string":
    case "undefined":
      return true;

    default:
      return false;
  }
}

not.numStrU = notFactory(numStrU);

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

export const numbers = factory(arrayOf, number);

export const numbersU = orFactory(numbers, undefinedGuard);

/**
 * Checks that value type is numberU.
 *
 * @param value - Value.
 * @returns _True_ if value type is numberU, _false_ otherwise.
 */
export function numberU(value: unknown): value is types.numberU {
  return typeof value === "number" || value === undefined;
}

not.numberU = notFactory(numberU);

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

export const objects = factory(arrayOf, object);

export const objectsU = orFactory(objects, undefinedGuard);

/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param requiredGuards - Guards for required properties.
 * @param optionalGuards - Guards for optional properties.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function objectOf<A, B>(
  value: unknown,
  requiredGuards: Guards<A>,
  optionalGuards: Guards<B>
): value is Required<A> & types.Optional<B> {
  return (
    indexedObject(value) &&
    o.entries(requiredGuards).every(([name, guard]) => guard(value[name])) &&
    o
      .entries(optionalGuards)
      .every(([name, guard]) =>
        o.hasOwnProp(name, value) ? guard(value[name]) : true
      )
  );
}

object.of = objectOf;

/**
 * Checks that value type is objectU.
 *
 * @param value - Value.
 * @returns _True_ if value type is objectU, _false_ otherwise.
 */
export function objectU(value: unknown): value is types.objectU {
  return object(value) || value === undefined;
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

not.string = notFactory(string);

export const strings = factory(arrayOf, string);

export const stringsU = orFactory(strings, undefinedGuard);

/**
 * Checks that value type is stringU.
 *
 * @param value - Value.
 * @returns _True_ if value type is stringU, _false_ otherwise.
 */
export function stringU(value: unknown): value is types.stringU {
  return (typeof value === "string" && value !== "") || value === undefined;
}

not.stringU = notFactory(stringU);

/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
export function trueGuard(value: unknown): value is true {
  return value === true;
}

export { trueGuard as true };

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
function undefinedGuard(value: unknown): value is undefined {
  return value === undefined;
}

export { undefinedGuard as undefined };

not.undefined = notFactory(undefinedGuard);

/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export function unknown(_value: unknown): _value is unknown {
  return true;
}
