import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { ValidationObject } from "./helpers";
import type * as types from "./types/core";
import type { Constructor } from "./types/function";
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
 * Checks that value type is A & B.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns _True_ if value type is A & B, _false_ otherwise.
 */
export declare function and<A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A & B;
/**
 * Checks that value type is A & B & C.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns _True_ if value type is A & B & C, _false_ otherwise.
 */
export declare function and<A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A & B & C;
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
export declare function and<A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A & B & C & D;
export declare namespace and {
    var factory: typeof andFactory;
}
/**
 * Creates guard for type A & B.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns Guard for type A & B.
 */
export declare function andFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A & B>;
/**
 * Creates guard for type A & B & C.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns Guard for type A & B & C.
 */
export declare function andFactory<A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A & B & C>;
/**
 * Creates guard for type A & B & C & D.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns Guard for type A & B & C & D.
 */
export declare function andFactory<A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A & B & C & D>;
/**
 * Checks that value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
export declare function not<T, V>(value: V, guard: Guard<T>): value is Exclude<V, T>;
export declare namespace not {
    export var factory: typeof notFactory;
    export var array: ExclusionGuard<types.unknowns>;
    export var boolean: ExclusionGuard<boolean>;
    export var empty: ExclusionGuard<types.empty>;
    var _a: ExclusionGuard<false>;
    export var indexedObject: ExclusionGuard<Readonly<types.TypedObject<PropertyKey, unknown>>>;
    export var map: ExclusionGuard<ReadonlyMap<unknown, unknown>>;
    var _b: ExclusionGuard<null>;
    export var numStr: ExclusionGuard<types.NumStr>;
    export var number: ExclusionGuard<number>;
    export var object: ExclusionGuard<object>;
    export var set: ExclusionGuard<ReadonlySet<unknown>>;
    export var string: ExclusionGuard<string>;
    export var symbol: ExclusionGuard<symbol>;
    var _c: ExclusionGuard<true>;
    export var undefined: ExclusionGuard<undefined>;
    export { _a as false, _b as null, _c as true };
}
/**
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
export declare function notFactory<T>(guard: Guard<T>): ExclusionGuard<T>;
/**
 * Checks that value type is A | B.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns _True_ if value type is A | B, _false_ otherwise.
 */
export declare function or<A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A | B;
/**
 * Checks that value type is A | B | C.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns _True_ if value type is A | B | C, _false_ otherwise.
 */
export declare function or<A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A | B | C;
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
export declare function or<A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A | B | C | D;
export declare namespace or {
    var factory: typeof orFactory;
}
/**
 * Creates guard for type A | B.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns Guard for type A | B.
 */
export declare function orFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A | B>;
/**
 * Creates guard for type A | B | C.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns Guard for type A | B | C.
 */
export declare function orFactory<A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A | B | C>;
/**
 * Creates guard for type A | B | C | D.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns Guard for type A | B | C | D.
 */
export declare function orFactory<A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A | B | C | D>;
/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export declare function array(value: unknown): value is types.unknowns;
export declare namespace array {
    var of: typeof arrayOf;
}
export declare const arrayU: Guard<types.unknowns | undefined>;
export declare const arrays: Guard<readonly types.unknowns[]>;
export declare const arraysU: Guard<readonly types.unknowns[] | undefined>;
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export declare function arrayOf<T>(value: unknown, guard: Guard<T>): value is readonly T[];
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
export declare function _false(value: unknown): value is false;
export { _false as false };
/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export declare function indexedObject(value: unknown): value is types.IndexedObject;
export declare namespace indexedObject {
    var of: typeof indexedObjectOf;
}
export declare const indexedObjectU: Guard<Readonly<types.TypedObject<PropertyKey, unknown>> | undefined>;
export declare const indexedObjects: Guard<readonly Readonly<types.TypedObject<PropertyKey, unknown>>[]>;
export declare const indexedObjectsU: Guard<readonly Readonly<types.TypedObject<PropertyKey, unknown>>[] | undefined>;
/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
export declare function indexedObjectOf<T>(value: unknown, guard: Guard<T>): value is types.IndexedObject<T>;
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
    var of: typeof mapOf;
}
export declare const mapU: Guard<ReadonlyMap<unknown, unknown> | undefined>;
export declare const maps: Guard<readonly ReadonlyMap<unknown, unknown>[]>;
export declare const mapsU: Guard<readonly ReadonlyMap<unknown, unknown>[] | undefined>;
/**
 * Checks that value type is Map\<K, V\>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
 */
export declare function mapOf<K, V>(value: unknown, keyGuard: Guard<K>, valueGuard: Guard<V>): value is ReadonlyMap<K, V>;
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
    var of: typeof objectOf;
}
export declare const objectU: Guard<object | undefined>;
export declare const objects: Guard<readonly object[]>;
export declare const objectsU: Guard<readonly object[] | undefined>;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function objectOf<T extends object>(value: unknown, required: Guards<T, RequiredKeys<T>>, optional: Guards<T, OptionalKeys<T>>): value is T;
export declare namespace objectOf {
    var factory: typeof objectOfFactory;
}
/**
 * Creates guard for type T.
 *
 * @param required - Guards for required properties.
 * @param optional - Guards for optional properties.
 * @returns Guard for type T.
 */
export declare function objectOfFactory<T extends object>(required: Guards<T, RequiredKeys<T>>, optional: Guards<T, OptionalKeys<T>>): Guard<T>;
/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
export declare function set(value: unknown): value is ReadonlySet<unknown>;
export declare namespace set {
    var of: typeof setOf;
}
export declare const setU: Guard<ReadonlySet<unknown> | undefined>;
export declare const sets: Guard<readonly ReadonlySet<unknown>[]>;
export declare const setsU: Guard<readonly ReadonlySet<unknown>[] | undefined>;
/**
 * Checks that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard.
 * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
 */
export declare function setOf<T>(value: unknown, guard: Guard<T>): value is ReadonlySet<T>;
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export declare function string(value: unknown): value is string;
export declare const stringU: Guard<string | undefined>;
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
export declare function _true(value: unknown): value is true;
export { _true as true };
/**
 * Checks that value type is [A].
 *
 * @param value - Value.
 * @param guard - Guard .
 * @returns _True_ if value type is [A], _false_ otherwise.
 */
export declare function tuple<A>(value: unknown, guard: Guard<A>): value is readonly [A];
/**
 * Checks that value type is [A, B].
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns _True_ if value type is [A, B], _false_ otherwise.
 */
export declare function tuple<A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is readonly [A, B];
/**
 * Checks that value type is [A, B, C].
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns _True_ if value type is [A, B, C], _false_ otherwise.
 */
export declare function tuple<A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is readonly [A, B, C];
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
export declare function tuple<A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is readonly [A, B, C, D];
export declare namespace tuple {
    var factory: typeof tupleFactory;
}
/**
 * Creates guard for type [A].
 *
 * @param guard - Guard.
 * @returns Guard for type [A].
 */
export declare function tupleFactory<A>(guard: Guard<A>): Guard<readonly [A]>;
/**
 * Creates guard for type [A, B].
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns Guard for type [A, B].
 */
export declare function tupleFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<readonly [A, B]>;
/**
 * Creates guard for type [A, B, C].
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns Guard for type [A, B, C].
 */
export declare function tupleFactory<A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<readonly [A, B, C]>;
/**
 * Creates guard for type [A, B, C, D].
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns Guard for type [A, B, C, D].
 */
export declare function tupleFactory<A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<readonly [A, B, C, D]>;
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