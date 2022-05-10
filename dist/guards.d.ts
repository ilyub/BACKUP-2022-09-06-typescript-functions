import type { ValidationObject } from "./helpers";
import type * as types from "./types";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export declare const and: {
    <A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A & B;
    <A_1, B_1, C>(value: unknown, guard1: Guard<A_1>, guard2: Guard<B_1>, guard3: Guard<C>): value is A_1 & B_1 & C;
    <A_2, B_2, C_1, D>(value: unknown, guard1: Guard<A_2>, guard2: Guard<B_2>, guard3: Guard<C_1>, guard4: Guard<D>): value is A_2 & B_2 & C_1 & D;
} & {
    factory: {
        <A_3, B_3>(guard1: Guard<A_3>, guard2: Guard<B_3>): Guard<A_3 & B_3>;
        <A_4, B_4, C_2>(guard1: Guard<A_4>, guard2: Guard<B_4>, guard3: Guard<C_2>): Guard<A_4 & B_4 & C_2>;
        <A_5, B_5, C_3, D_1>(guard1: Guard<A_5>, guard2: Guard<B_5>, guard3: Guard<C_3>, guard4: Guard<D_1>): Guard<A_5 & B_5 & C_3 & D_1>;
    };
};
export declare const array: ((value: unknown) => value is types.unknowns) & {
    /**
     * Checks if value type is T[].
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of<T>(this: void, value: unknown, guard: Guard<T>): value is readonly T[];
};
export declare const indexedObject: ((value: unknown) => value is types.IndexedObject<unknown>) & {
    /**
     * Checks if value type is IndexedObject\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of<T>(this: void, value: unknown, guard: Guard<T>): value is types.IndexedObject<T>;
};
export declare const map: ((value: unknown) => value is ReadonlyMap<unknown, unknown>) & {
    /**
     * Checks if value type is Map\<K, V\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of<K, V>(this: void, value: unknown, keyGuard: Guard<K>, valueGuard: Guard<V>): value is ReadonlyMap<K, V>;
};
export declare const object: ((value: unknown) => value is object) & {
    factory: {
        <R extends object, O extends object>(required: ObjectGuards<R, keyof R>, optional: ObjectGuards<O, keyof O>): Guard<import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableDefindKeys<Partial<O>>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableUndefindKeys<Partial<O>>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<Partial<O>>, never>, { readonly [K in types.ReadonlyUndefinedKeys<Partial<O>>]?: Exclude<Partial<O>[K], undefined>; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<Partial<O>>, never>, { readonly [K_1 in types.ReadonlyDefinedKeys<Partial<O>>]: Partial<O>[K_1]; }, { readonly [K_1 in types.ReadonlyDefinedKeys<Partial<O>>]: Partial<O>[K_1]; } & { readonly [K in types.ReadonlyUndefinedKeys<Partial<O>>]?: Exclude<Partial<O>[K], undefined>; }>>, { [K_2 in types.WritableUndefindKeys<Partial<O>>]?: Exclude<Partial<O>[K_2], undefined>; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<Partial<O>>, never>, { readonly [K in types.ReadonlyUndefinedKeys<Partial<O>>]?: Exclude<Partial<O>[K], undefined>; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<Partial<O>>, never>, { readonly [K_1 in types.ReadonlyDefinedKeys<Partial<O>>]: Partial<O>[K_1]; }, { readonly [K_1 in types.ReadonlyDefinedKeys<Partial<O>>]: Partial<O>[K_1]; } & { readonly [K in types.ReadonlyUndefinedKeys<Partial<O>>]?: Exclude<Partial<O>[K], undefined>; }>>>, { [K_3 in types.WritableDefindKeys<Partial<O>>]: Partial<O>[K_3]; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableUndefindKeys<Partial<O>>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<Partial<O>>, never>, { readonly [K in types.ReadonlyUndefinedKeys<Partial<O>>]?: Exclude<Partial<O>[K], undefined>; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<Partial<O>>, never>, { readonly [K_1 in types.ReadonlyDefinedKeys<Partial<O>>]: Partial<O>[K_1]; }, { readonly [K_1 in types.ReadonlyDefinedKeys<Partial<O>>]: Partial<O>[K_1]; } & { readonly [K in types.ReadonlyUndefinedKeys<Partial<O>>]?: Exclude<Partial<O>[K], undefined>; }>>, { [K_2 in types.WritableUndefindKeys<Partial<O>>]?: Exclude<Partial<O>[K_2], undefined>; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<Partial<O>>, never>, { readonly [K in types.ReadonlyUndefinedKeys<Partial<O>>]?: Exclude<Partial<O>[K], undefined>; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<Partial<O>>, never>, { readonly [K_1 in types.ReadonlyDefinedKeys<Partial<O>>]: Partial<O>[K_1]; }, { readonly [K_1 in types.ReadonlyDefinedKeys<Partial<O>>]: Partial<O>[K_1]; } & { readonly [K in types.ReadonlyUndefinedKeys<Partial<O>>]?: Exclude<Partial<O>[K], undefined>; }>>>> & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableDefindKeys<R>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableUndefindKeys<R>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<R>, never>, { readonly [K_4 in types.ReadonlyUndefinedKeys<R>]: R[K_4] | undefined; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<R>, never>, { readonly [K_5 in types.ReadonlyDefinedKeys<R>]: R[K_5]; }, { readonly [K_5 in types.ReadonlyDefinedKeys<R>]: R[K_5]; } & { readonly [K_4 in types.ReadonlyUndefinedKeys<R>]: R[K_4] | undefined; }>>, { [K_6 in types.WritableUndefindKeys<R>]: R[K_6] | undefined; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<R>, never>, { readonly [K_4 in types.ReadonlyUndefinedKeys<R>]: R[K_4] | undefined; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<R>, never>, { readonly [K_5 in types.ReadonlyDefinedKeys<R>]: R[K_5]; }, { readonly [K_5 in types.ReadonlyDefinedKeys<R>]: R[K_5]; } & { readonly [K_4 in types.ReadonlyUndefinedKeys<R>]: R[K_4] | undefined; }>>>, { [K_7 in types.WritableDefindKeys<R>]: R[K_7]; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableUndefindKeys<R>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<R>, never>, { readonly [K_4 in types.ReadonlyUndefinedKeys<R>]: R[K_4] | undefined; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<R>, never>, { readonly [K_5 in types.ReadonlyDefinedKeys<R>]: R[K_5]; }, { readonly [K_5 in types.ReadonlyDefinedKeys<R>]: R[K_5]; } & { readonly [K_4 in types.ReadonlyUndefinedKeys<R>]: R[K_4] | undefined; }>>, { [K_6 in types.WritableUndefindKeys<R>]: R[K_6] | undefined; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<R>, never>, { readonly [K_4 in types.ReadonlyUndefinedKeys<R>]: R[K_4] | undefined; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<R>, never>, { readonly [K_5 in types.ReadonlyDefinedKeys<R>]: R[K_5]; }, { readonly [K_5 in types.ReadonlyDefinedKeys<R>]: R[K_5]; } & { readonly [K_4 in types.ReadonlyUndefinedKeys<R>]: R[K_4] | undefined; }>>>>>;
        <T extends object>(required: ObjectGuards<T, RequiredKeys<T>>, optional: ObjectGuards<T, OptionalKeys<T>>): Guard<T>;
    };
    of: {
        <R_1 extends object, O_1 extends object>(value: unknown, required: ObjectGuards<R_1, keyof R_1>, optional: ObjectGuards<O_1, keyof O_1>): value is import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableDefindKeys<Partial<O_1>>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableUndefindKeys<Partial<O_1>>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<Partial<O_1>>, never>, { readonly [K_8 in types.ReadonlyUndefinedKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_8], undefined>; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<Partial<O_1>>, never>, { readonly [K_9 in types.ReadonlyDefinedKeys<Partial<O_1>>]: Partial<O_1>[K_9]; }, { readonly [K_9 in types.ReadonlyDefinedKeys<Partial<O_1>>]: Partial<O_1>[K_9]; } & { readonly [K_8 in types.ReadonlyUndefinedKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_8], undefined>; }>>, { [K_10 in types.WritableUndefindKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_10], undefined>; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<Partial<O_1>>, never>, { readonly [K_8 in types.ReadonlyUndefinedKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_8], undefined>; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<Partial<O_1>>, never>, { readonly [K_9 in types.ReadonlyDefinedKeys<Partial<O_1>>]: Partial<O_1>[K_9]; }, { readonly [K_9 in types.ReadonlyDefinedKeys<Partial<O_1>>]: Partial<O_1>[K_9]; } & { readonly [K_8 in types.ReadonlyUndefinedKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_8], undefined>; }>>>, { [K_11 in types.WritableDefindKeys<Partial<O_1>>]: Partial<O_1>[K_11]; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableUndefindKeys<Partial<O_1>>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<Partial<O_1>>, never>, { readonly [K_8 in types.ReadonlyUndefinedKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_8], undefined>; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<Partial<O_1>>, never>, { readonly [K_9 in types.ReadonlyDefinedKeys<Partial<O_1>>]: Partial<O_1>[K_9]; }, { readonly [K_9 in types.ReadonlyDefinedKeys<Partial<O_1>>]: Partial<O_1>[K_9]; } & { readonly [K_8 in types.ReadonlyUndefinedKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_8], undefined>; }>>, { [K_10 in types.WritableUndefindKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_10], undefined>; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<Partial<O_1>>, never>, { readonly [K_8 in types.ReadonlyUndefinedKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_8], undefined>; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<Partial<O_1>>, never>, { readonly [K_9 in types.ReadonlyDefinedKeys<Partial<O_1>>]: Partial<O_1>[K_9]; }, { readonly [K_9 in types.ReadonlyDefinedKeys<Partial<O_1>>]: Partial<O_1>[K_9]; } & { readonly [K_8 in types.ReadonlyUndefinedKeys<Partial<O_1>>]?: Exclude<Partial<O_1>[K_8], undefined>; }>>>> & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableDefindKeys<R_1>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableUndefindKeys<R_1>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<R_1>, never>, { readonly [K_12 in types.ReadonlyUndefinedKeys<R_1>]: R_1[K_12] | undefined; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<R_1>, never>, { readonly [K_13 in types.ReadonlyDefinedKeys<R_1>]: R_1[K_13]; }, { readonly [K_13 in types.ReadonlyDefinedKeys<R_1>]: R_1[K_13]; } & { readonly [K_12 in types.ReadonlyUndefinedKeys<R_1>]: R_1[K_12] | undefined; }>>, { [K_14 in types.WritableUndefindKeys<R_1>]: R_1[K_14] | undefined; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<R_1>, never>, { readonly [K_12 in types.ReadonlyUndefinedKeys<R_1>]: R_1[K_12] | undefined; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<R_1>, never>, { readonly [K_13 in types.ReadonlyDefinedKeys<R_1>]: R_1[K_13]; }, { readonly [K_13 in types.ReadonlyDefinedKeys<R_1>]: R_1[K_13]; } & { readonly [K_12 in types.ReadonlyUndefinedKeys<R_1>]: R_1[K_12] | undefined; }>>>, { [K_15 in types.WritableDefindKeys<R_1>]: R_1[K_15]; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.WritableUndefindKeys<R_1>, never>, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<R_1>, never>, { readonly [K_12 in types.ReadonlyUndefinedKeys<R_1>]: R_1[K_12] | undefined; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<R_1>, never>, { readonly [K_13 in types.ReadonlyDefinedKeys<R_1>]: R_1[K_13]; }, { readonly [K_13 in types.ReadonlyDefinedKeys<R_1>]: R_1[K_13]; } & { readonly [K_12 in types.ReadonlyUndefinedKeys<R_1>]: R_1[K_12] | undefined; }>>, { [K_14 in types.WritableUndefindKeys<R_1>]: R_1[K_14] | undefined; } & import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyDefinedKeys<R_1>, never>, { readonly [K_12 in types.ReadonlyUndefinedKeys<R_1>]: R_1[K_12] | undefined; }, import("ts-toolbelt/out/Any/If").If<import("ts-toolbelt/out/Any/Equals").Equals<types.ReadonlyUndefinedKeys<R_1>, never>, { readonly [K_13 in types.ReadonlyDefinedKeys<R_1>]: R_1[K_13]; }, { readonly [K_13 in types.ReadonlyDefinedKeys<R_1>]: R_1[K_13]; } & { readonly [K_12 in types.ReadonlyUndefinedKeys<R_1>]: R_1[K_12] | undefined; }>>>>;
        <T_1 extends object>(value: unknown, required: ObjectGuards<T_1, RequiredKeys<T_1>>, optional: ObjectGuards<T_1, OptionalKeys<T_1>>): value is T_1;
    };
};
export declare const or: {
    <A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A | B;
    <A_1, B_1, C>(value: unknown, guard1: Guard<A_1>, guard2: Guard<B_1>, guard3: Guard<C>): value is A_1 | B_1 | C;
    <A_2, B_2, C_1, D>(value: unknown, guard1: Guard<A_2>, guard2: Guard<B_2>, guard3: Guard<C_1>, guard4: Guard<D>): value is A_2 | B_2 | C_1 | D;
} & {
    factory: {
        <A_3, B_3>(guard1: Guard<A_3>, guard2: Guard<B_3>): Guard<A_3 | B_3>;
        <A_4, B_4, C_2>(guard1: Guard<A_4>, guard2: Guard<B_4>, guard3: Guard<C_2>): Guard<A_4 | B_4 | C_2>;
        <A_5, B_5, C_3, D_1>(guard1: Guard<A_5>, guard2: Guard<B_5>, guard3: Guard<C_3>, guard4: Guard<D_1>): Guard<A_5 | B_5 | C_3 | D_1>;
    };
};
export declare const set: ((value: unknown) => value is ReadonlySet<unknown>) & {
    /**
     * Checks if value type is Set\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of<T>(this: void, value: unknown, guard: Guard<T>): value is ReadonlySet<T>;
};
export declare const tuple: {
    <A>(value: unknown, guard: Guard<A>): value is readonly [A];
    <A_1, B>(value: unknown, guard1: Guard<A_1>, guard2: Guard<B>): value is readonly [A_1, B];
    <A_2, B_1, C>(value: unknown, guard1: Guard<A_2>, guard2: Guard<B_1>, guard3: Guard<C>): value is readonly [A_2, B_1, C];
    <A_3, B_2, C_1, D>(value: unknown, guard1: Guard<A_3>, guard2: Guard<B_2>, guard3: Guard<C_1>, guard4: Guard<D>): value is readonly [A_3, B_2, C_1, D];
} & {
    factory: {
        <A_4>(guard: Guard<A_4>): Guard<readonly [A_4]>;
        <A_5, B_3>(guard1: Guard<A_5>, guard2: Guard<B_3>): Guard<readonly [A_5, B_3]>;
        <A_6, B_4, C_2>(guard1: Guard<A_6>, guard2: Guard<B_4>, guard3: Guard<C_2>): Guard<readonly [A_6, B_4, C_2]>;
        <A_7, B_5, C_3, D_1>(guard1: Guard<A_7>, guard2: Guard<B_5>, guard3: Guard<C_3>, guard4: Guard<D_1>): Guard<readonly [A_7, B_5, C_3, D_1]>;
    };
};
export declare const not: (<T, V>(value: V, guard: Guard<T>) => value is Exclude<V, T>) & {
    array: <V_1>(value: V_1) => value is Exclude<V_1, types.unknowns>;
    boolean: <V_2>(value: V_2) => value is Exclude<V_2, boolean>;
    empty: <V_3>(value: V_3) => value is Exclude<V_3, types.empty>;
    factory: typeof _notFactory;
    false: <V_4>(value: V_4) => value is Exclude<V_4, false>;
    indexedObject: <V_5>(value: V_5) => value is Exclude<V_5, types.IndexedObject<unknown>>;
    map: <V_6>(value: V_6) => value is Exclude<V_6, ReadonlyMap<unknown, unknown>>;
    null: <V_7>(value: V_7) => value is Exclude<V_7, null>;
    numStr: <V_8>(value: V_8) => value is Exclude<V_8, types.NumStr>;
    number: <V_9>(value: V_9) => value is Exclude<V_9, number>;
    object: <V_10>(value: V_10) => value is Exclude<V_10, object>;
    set: <V_11>(value: V_11) => value is Exclude<V_11, ReadonlySet<unknown>>;
    string: <V_12>(value: V_12) => value is Exclude<V_12, string>;
    stringU: <V_12>(value: V_12) => value is Exclude<V_12, string>;
    symbol: <V_13>(value: V_13) => value is Exclude<V_13, symbol>;
    true: <V_14>(value: V_14) => value is Exclude<V_14, true>;
    undefined: <V_15>(value: V_15) => value is Exclude<V_15, undefined>;
};
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
export declare type Guards = readonly Guard[];
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
export declare type ObjectGuards<T, K extends keyof T = keyof T> = {
    readonly [L in K]-?: Guard<T[L]>;
};
/**
 * Checks if value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export declare function boolean(value: unknown): value is boolean;
/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function callable<T extends Function>(value: unknown): value is T;
/**
 * Checks if value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export declare function empty(value: unknown): value is types.empty;
/**
 * Checks if value type is T.
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
export declare function factory<T, A extends types.unknowns>(guard: MultiArgGuard<T, A>, ...args: A): Guard<T>;
/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function instance<T>(value: unknown, ctor: types.Constructor<T>): value is T;
/**
 * Checks if value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export declare function instances<T>(value: unknown, ctor: types.Constructor<T>): value is readonly T[];
/**
 * Checks if value is _never_.
 *
 * @param _value - Value.
 * @returns _False_.
 */
export declare function never(_value: unknown): _value is never;
/**
 * Checks if value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export declare function numStr(value: unknown): value is types.NumStr;
/**
 * Checks if value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export declare function number(value: unknown): value is number;
/**
 * Checks if value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export declare function string(value: unknown): value is string;
/**
 * Checks if value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export declare function stringU(value: unknown): value is string;
/**
 * Checks if value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export declare function symbol(value: unknown): value is symbol;
/**
 * Checks if value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_.
 */
export declare function unknown(_value: unknown): _value is unknown;
/**
 * Checks if value is _false_.
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
 * Checks if value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
declare function _null(value: unknown): value is null;
/**
 * Checks if value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
declare function _true(value: unknown): value is true;
/**
 * Checks if value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
declare function _undefined(value: unknown): value is undefined;
//# sourceMappingURL=guards.d.ts.map