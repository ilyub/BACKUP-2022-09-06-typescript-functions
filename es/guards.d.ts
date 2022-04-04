import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { ValidationObject } from "./helpers";
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
export declare type Guards<T, K extends keyof T = keyof T> = {
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
export declare function factory<T, A extends unknown[]>(guard: MultiArgGuard<T, A>, ...args: A): Guard<T>;
/**
 * Checks that value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
export declare function not<T, V>(value: V, guard: Guard<T>): value is Exclude<V, T>;
export declare namespace not {
    export var factory: <T>(guard: Guard<T>) => <V>(value: V) => value is Exclude<V, T>;
    export var array: <V>(value: V) => value is Exclude<V, types.unknowns>;
    export var boolean: <V>(value: V) => value is Exclude<V, boolean>;
    export var empty: <V>(value: V) => value is Exclude<V, types.empty>;
    var _a: <V>(value: V) => value is Exclude<V, false>;
    export var indexedObject: <V>(value: V) => value is Exclude<V, types.IndexedObject<unknown>>;
    export var map: <V>(value: V) => value is Exclude<V, ReadonlyMap<unknown, unknown>>;
    var _b: <V>(value: V) => value is Exclude<V, null>;
    export var numStr: <V>(value: V) => value is Exclude<V, types.NumStr>;
    export var number: <V>(value: V) => value is Exclude<V, number>;
    export var object: <V>(value: V) => value is Exclude<V, object>;
    export var set: <V>(value: V) => value is Exclude<V, ReadonlySet<unknown>>;
    export var string: <V>(value: V) => value is Exclude<V, string>;
    export var symbol: <V>(value: V) => value is Exclude<V, symbol>;
    var _c: <V>(value: V) => value is Exclude<V, true>;
    export var undefined: <V>(value: V) => value is Exclude<V, undefined>;
    export { _a as false, _b as null, _c as true };
}
/**
 * Checks that value type is A & B.
 *
 * @param value - Value.
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @returns _True_ if value type is A & B, _false_ otherwise.
 */
export declare function and<A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A & B;
/**
 * Checks that value type is A & B & C.
 *
 * @param value - Value.
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @returns _True_ if value type is A & B & C, _false_ otherwise.
 */
export declare function and<A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A & B & C;
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
export declare function and<A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A & B & C & D;
export declare namespace and {
    var factory: typeof _andFactory;
}
/**
 * Creates guard for type A & B.
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @returns Guard for type A & B.
 */
declare function _andFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A & B>;
/**
 * Creates guard for type A & B & C.
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @returns Guard for type A & B & C.
 */
declare function _andFactory<A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A & B & C>;
/**
 * Creates guard for type A & B & C & D.
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @param guard4 - Guard for type D.
 * @returns Guard for type A & B & C & D.
 */
declare function _andFactory<A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A & B & C & D>;
/**
 * Checks that value type is A | B.
 *
 * @param value - Value.
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @returns _True_ if value type is A | B, _false_ otherwise.
 */
export declare function or<A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A | B;
/**
 * Checks that value type is A | B | C.
 *
 * @param value - Value.
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @returns _True_ if value type is A | B | C, _false_ otherwise.
 */
export declare function or<A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A | B | C;
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
export declare function or<A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A | B | C | D;
export declare namespace or {
    var factory: typeof _orFactory;
}
/**
 * Creates guard for type A | B.
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @returns Guard for type A | B.
 */
declare function _orFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A | B>;
/**
 * Creates guard for type A | B | C.
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @returns Guard for type A | B | C.
 */
declare function _orFactory<A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A | B | C>;
/**
 * Creates guard for type A | B | C | D.
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @param guard4 - Guard for type D.
 * @returns Guard for type A | B | C | D.
 */
declare function _orFactory<A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A | B | C | D>;
/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export declare function array(value: unknown): value is types.unknowns;
export declare namespace array {
    var of: <T>(value: unknown, guard: Guard<T>) => value is readonly T[];
}
export declare const arrayU: Guard<types.unknowns | undefined>;
export declare const arrays: Guard<readonly types.unknowns[]>;
export declare const arraysU: Guard<readonly types.unknowns[] | undefined>;
/**
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export declare function boolean(value: unknown): value is boolean;
export declare const booleanU: Guard<boolean | undefined>;
export declare const booleans: Guard<readonly boolean[]>;
export declare const booleansU: Guard<readonly boolean[] | undefined>;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function callable<T extends Function>(value: unknown): value is T;
/**
 * Checks that value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export declare function empty(value: unknown): value is types.empty;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function enumeration<T extends PropertyKey>(value: unknown, vo: ValidationObject<T>): value is T;
/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
declare function _false(value: unknown): value is false;
export { _false as false };
/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export declare function indexedObject(value: unknown): value is types.IndexedObject;
export declare namespace indexedObject {
    var of: <T>(value: unknown, guard: Guard<T>) => value is types.IndexedObject<T>;
}
export declare const indexedObjectU: Guard<types.IndexedObject<unknown> | undefined>;
export declare const indexedObjects: Guard<readonly types.IndexedObject<unknown>[]>;
export declare const indexedObjectsU: Guard<readonly types.IndexedObject<unknown>[] | undefined>;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function instance<T>(value: unknown, ctor: Constructor<T>): value is T;
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export declare function instances<T>(value: unknown, ctor: Constructor<T>): value is readonly T[];
/**
 * Checks that value type is Map.
 *
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
export declare function map(value: unknown): value is ReadonlyMap<unknown, unknown>;
export declare namespace map {
    var of: <K, V>(value: unknown, keyGuard: Guard<K>, valueGuard: Guard<V>) => value is ReadonlyMap<K, V>;
}
export declare const mapU: Guard<ReadonlyMap<unknown, unknown> | undefined>;
export declare const maps: Guard<readonly ReadonlyMap<unknown, unknown>[]>;
export declare const mapsU: Guard<readonly ReadonlyMap<unknown, unknown>[] | undefined>;
/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
declare function _null(value: unknown): value is null;
export { _null as null };
/**
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export declare function numStr(value: unknown): value is types.NumStr;
export declare const numStrU: Guard<types.NumStr | undefined>;
export declare const numStrs: Guard<readonly types.NumStr[]>;
export declare const numStrsU: Guard<readonly types.NumStr[] | undefined>;
/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export declare function number(value: unknown): value is number;
export declare const numberU: Guard<number | undefined>;
export declare const numbers: Guard<readonly number[]>;
export declare const numbersU: Guard<readonly number[] | undefined>;
/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
export declare function object(value: unknown): value is object;
export declare namespace object {
    var factory: typeof _objectFactory;
    var of: typeof _objectOf;
}
/**
 * Creates object guard.
 *
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns Object guard.
 */
declare function _objectFactory<R extends object, O extends object>(required: Guards<R, keyof R>, optional: Guards<O, keyof O>): Guard<OptionalStyle<Partial<O>> & UndefinedStyle<R>>;
/**
 * Creates object guard.
 *
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns Object guard.
 */
declare function _objectFactory<T extends object>(required: Guards<T, RequiredKeys<T>>, optional: Guards<T, OptionalKeys<T>>): Guard<T>;
/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
declare function _objectOf<R extends object, O extends object>(value: unknown, required: Guards<R, keyof R>, optional: Guards<O, keyof O>): value is OptionalStyle<Partial<O>> & UndefinedStyle<R>;
/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
declare function _objectOf<T extends object>(value: unknown, required: Guards<T, RequiredKeys<T>>, optional: Guards<T, OptionalKeys<T>>): value is T;
export declare const objectU: Guard<object | undefined>;
export declare const objects: Guard<readonly object[]>;
export declare const objectsU: Guard<readonly object[] | undefined>;
/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
export declare function set(value: unknown): value is ReadonlySet<unknown>;
export declare namespace set {
    var of: <T>(value: unknown, guard: Guard<T>) => value is ReadonlySet<T>;
}
export declare const setU: Guard<ReadonlySet<unknown> | undefined>;
export declare const sets: Guard<readonly ReadonlySet<unknown>[]>;
export declare const setsU: Guard<readonly ReadonlySet<unknown>[] | undefined>;
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export declare function string(value: unknown): value is string;
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export declare function stringU(value: unknown): value is string;
export declare const strings: Guard<readonly string[]>;
export declare const stringsU: Guard<readonly string[] | undefined>;
/**
 * Checks that value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export declare function symbol(value: unknown): value is symbol;
export declare const symbolU: Guard<symbol | undefined>;
export declare const symbols: Guard<readonly symbol[]>;
export declare const symbolsU: Guard<readonly symbol[] | undefined>;
/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
declare function _true(value: unknown): value is true;
export { _true as true };
/**
 * Checks that value type is [A].
 *
 * @param value - Value.
 * @param guard - Guard for type A.
 * @returns _True_ if value type is [A], _false_ otherwise.
 */
export declare function tuple<A>(value: unknown, guard: Guard<A>): value is readonly [A];
/**
 * Checks that value type is [A, B].
 *
 * @param value - Value.
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @returns _True_ if value type is [A, B], _false_ otherwise.
 */
export declare function tuple<A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is readonly [A, B];
/**
 * Checks that value type is [A, B, C].
 *
 * @param value - Value.
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @returns _True_ if value type is [A, B, C], _false_ otherwise.
 */
export declare function tuple<A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is readonly [A, B, C];
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
export declare function tuple<A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is readonly [A, B, C, D];
export declare namespace tuple {
    var factory: typeof _tupleFactory;
}
/**
 * Creates guard for type [A].
 *
 * @param guard - Guard for type A.
 * @returns Guard for type [A].
 */
declare function _tupleFactory<A>(guard: Guard<A>): Guard<readonly [A]>;
/**
 * Creates guard for type [A, B].
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @returns Guard for type [A, B].
 */
declare function _tupleFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<readonly [A, B]>;
/**
 * Creates guard for type [A, B, C].
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @returns Guard for type [A, B, C].
 */
declare function _tupleFactory<A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<readonly [A, B, C]>;
/**
 * Creates guard for type [A, B, C, D].
 *
 * @param guard1 - Guard for type A.
 * @param guard2 - Guard for type B.
 * @param guard3 - Guard for type C.
 * @param guard4 - Guard for type D.
 * @returns Guard for type [A, B, C, D].
 */
declare function _tupleFactory<A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<readonly [A, B, C, D]>;
/**
 * Checks that value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
declare function _undefined(value: unknown): value is undefined;
export { _undefined as undefined };
/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export declare function unknown(_value: unknown): _value is unknown;
export declare const unknowns: Guard<readonly unknown[]>;
export declare const unknownsU: Guard<readonly unknown[] | undefined>;
//# sourceMappingURL=guards.d.ts.map