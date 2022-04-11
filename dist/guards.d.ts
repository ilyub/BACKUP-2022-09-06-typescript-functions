import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { ValidationObject } from "./helpers";
import type * as types from "./types/core";
import type { Constructor } from "./types/function";
import type { OptionalStyle, UndefinedStyle } from "./types/object";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export declare const and: {
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
    <A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A & B & C;
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
    <A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A & B & C & D;
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
        <A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A & B & C>;
        /**
         * Creates guard for type A & B & C & D.
         *
         * @param guard1 - Guard for type A.
         * @param guard2 - Guard for type B.
         * @param guard3 - Guard for type C.
         * @param guard4 - Guard for type D.
         * @returns Guard for type A & B & C & D.
         */
        <A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A & B & C & D>;
    };
};
/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export declare const array: {
    /**
     * Checks that value type is T[].
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of<T>(this: void, value: unknown, guard: Guard<T>): value is readonly T[];
} & ((value: unknown) => value is types.unknowns);
/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export declare const indexedObject: {
    /**
     * Checks that value type is IndexedObject\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of<T>(this: void, value: unknown, guard: Guard<T>): value is types.IndexedObject<T>;
} & ((value: unknown) => value is types.IndexedObject<unknown>);
/**
 * Checks that value type is Map.
 *
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
export declare const map: {
    /**
     * Checks that value type is Map\<K, V\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of<K, V>(this: void, value: unknown, keyGuard: Guard<K>, valueGuard: Guard<V>): value is ReadonlyMap<K, V>;
} & ((value: unknown) => value is ReadonlyMap<unknown, unknown>);
/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
export declare const object: {
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
        <R extends object, O extends object>(required: Guards<R, keyof R>, optional: Guards<O, keyof O>): Guard<OptionalStyle<Partial<O>> & UndefinedStyle<R>>;
        /**
         * Creates object guard.
         *
         * @param required - Guards for required properties.
         * @param optional - Guards for optional properties.
         * @returns Object guard.
         */
        <T extends object>(required: Guards<T, RequiredKeys<T>>, optional: Guards<T, OptionalKeys<T>>): Guard<T>;
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
        <R extends object, O extends object>(value: unknown, required: Guards<R, keyof R>, optional: Guards<O, keyof O>): value is OptionalStyle<Partial<O>> & UndefinedStyle<R>;
        /**
         * Checks that value is an object.
         *
         * @param value - Value.
         * @param required - Guards for required properties.
         * @param optional - Guards for optional properties.
         * @returns _True_ if value is an object, _false_ otherwise.
         */
        <T extends object>(value: unknown, required: Guards<T, RequiredKeys<T>>, optional: Guards<T, OptionalKeys<T>>): value is T;
    };
};
export declare const or: {
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
    <A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A | B | C;
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
    <A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A | B | C | D;
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
        <A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A | B | C>;
        /**
         * Creates guard for type A | B | C | D.
         *
         * @param guard1 - Guard for type A.
         * @param guard2 - Guard for type B.
         * @param guard3 - Guard for type C.
         * @param guard4 - Guard for type D.
         * @returns Guard for type A | B | C | D.
         */
        <A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A | B | C | D>;
    };
};
/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
export declare const set: {
    /**
     * Checks that value type is Set\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of<T>(this: void, value: unknown, guard: Guard<T>): value is ReadonlySet<T>;
} & ((value: unknown) => value is ReadonlySet<unknown>);
export declare const tuple: {
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
    <A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is readonly [A, B];
    /**
     * Checks that value type is [A, B, C].
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns _True_ if value type is [A, B, C], _false_ otherwise.
     */
    <A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is readonly [A, B, C];
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
    <A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is readonly [A, B, C, D];
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
        <A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<readonly [A, B, C]>;
        /**
         * Creates guard for type [A, B, C, D].
         *
         * @param guard1 - Guard for type A.
         * @param guard2 - Guard for type B.
         * @param guard3 - Guard for type C.
         * @param guard4 - Guard for type D.
         * @returns Guard for type [A, B, C, D].
         */
        <A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<readonly [A, B, C, D]>;
    };
};
/**
 * Checks that value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
export declare const not: {
    array: <V>(value: V) => value is Exclude<V, types.unknowns>;
    boolean: <V_1>(value: V_1) => value is Exclude<V_1, boolean>;
    empty: <V_2>(value: V_2) => value is Exclude<V_2, types.empty>;
    factory: typeof _notFactory;
    false: <V_3>(value: V_3) => value is Exclude<V_3, false>;
    indexedObject: <V_4>(value: V_4) => value is Exclude<V_4, types.IndexedObject<unknown>>;
    map: <V_5>(value: V_5) => value is Exclude<V_5, ReadonlyMap<unknown, unknown>>;
    null: <V_6>(value: V_6) => value is Exclude<V_6, null>;
    numStr: <V_7>(value: V_7) => value is Exclude<V_7, types.NumStr>;
    number: <V_8>(value: V_8) => value is Exclude<V_8, number>;
    object: <V_9>(value: V_9) => value is Exclude<V_9, object>;
    set: <V_10>(value: V_10) => value is Exclude<V_10, ReadonlySet<unknown>>;
    string: <V_11>(value: V_11) => value is Exclude<V_11, string>;
    stringU: <V_11>(value: V_11) => value is Exclude<V_11, string>;
    symbol: <V_12>(value: V_12) => value is Exclude<V_12, symbol>;
    true: <V_13>(value: V_13) => value is Exclude<V_13, true>;
    undefined: <V_14>(value: V_14) => value is Exclude<V_14, undefined>;
} & (<T, V_15>(value: V_15, guard: Guard<T>) => value is Exclude<V_15, T>);
export declare const arrayU: Guard<types.unknowns | undefined>;
export declare const arrays: Guard<readonly types.unknowns[]>;
export declare const arraysU: Guard<readonly types.unknowns[] | undefined>;
export declare const booleanU: Guard<boolean | undefined>;
export declare const booleans: Guard<readonly boolean[]>;
export declare const booleansU: Guard<readonly boolean[] | undefined>;
export declare const indexedObjectU: Guard<types.IndexedObject<unknown> | undefined>;
export declare const indexedObjects: Guard<readonly types.IndexedObject<unknown>[]>;
export declare const indexedObjectsU: Guard<readonly types.IndexedObject<unknown>[] | undefined>;
export declare const mapU: Guard<ReadonlyMap<unknown, unknown> | undefined>;
export declare const maps: Guard<readonly ReadonlyMap<unknown, unknown>[]>;
export declare const mapsU: Guard<readonly ReadonlyMap<unknown, unknown>[] | undefined>;
export declare const numStrU: Guard<types.NumStr | undefined>;
export declare const numStrs: Guard<readonly types.NumStr[]>;
export declare const numStrsU: Guard<readonly types.NumStr[] | undefined>;
export declare const numberU: Guard<number | undefined>;
export declare const numbers: Guard<readonly number[]>;
export declare const numbersU: Guard<readonly number[] | undefined>;
export declare const objectU: Guard<object | undefined>;
export declare const objects: Guard<readonly object[]>;
export declare const objectsU: Guard<readonly object[] | undefined>;
export declare const setU: Guard<ReadonlySet<unknown> | undefined>;
export declare const sets: Guard<readonly ReadonlySet<unknown>[]>;
export declare const setsU: Guard<readonly ReadonlySet<unknown>[] | undefined>;
export declare const strings: Guard<readonly string[]>;
export declare const stringsU: Guard<readonly string[] | undefined>;
export declare const symbolU: Guard<symbol | undefined>;
export declare const symbols: Guard<readonly symbol[]>;
export declare const symbolsU: Guard<readonly symbol[] | undefined>;
export declare const unknowns: Guard<readonly unknown[]>;
export declare const unknownsU: Guard<readonly unknown[] | undefined>;
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
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export declare function boolean(value: unknown): value is boolean;
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
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
 * @returns Single-arg guard.
 */
export declare function factory<T, A extends unknown[]>(guard: MultiArgGuard<T, A>, ...args: A): Guard<T>;
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
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export declare function numStr(value: unknown): value is types.NumStr;
/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export declare function number(value: unknown): value is number;
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
/**
 * Checks that value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export declare function symbol(value: unknown): value is symbol;
/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export declare function unknown(_value: unknown): _value is unknown;
/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
declare function _false(value: unknown): value is false;
/**
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
declare function _notFactory<T>(guard: Guard<T>): <V>(value: V) => value is Exclude<V, T>;
/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
declare function _null(value: unknown): value is null;
/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
declare function _true(value: unknown): value is true;
/**
 * Checks that value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
declare function _undefined(value: unknown): value is undefined;
//# sourceMappingURL=guards.d.ts.map