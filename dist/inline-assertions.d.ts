import * as is from "./guards";
import type { IndexedObject, NumStr, empty as baseEmpty, stringU as baseStringU, unknowns as baseUnknowns, types } from "./types";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export declare const array: ((value: unknown) => baseUnknowns) & Readonly<{
    /**
     * Asserts that value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns Value if value type is T[].
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>) => readonly T[];
}>;
export declare const arrayU: (value: unknown) => baseUnknowns | undefined;
export declare const arrays: (value: unknown) => readonly baseUnknowns[];
export declare const arraysU: (value: unknown) => readonly baseUnknowns[] | undefined;
export declare const boolean: (value: unknown) => boolean;
export declare const booleanU: (value: unknown) => boolean | undefined;
export declare const booleans: (value: unknown) => readonly boolean[];
export declare const booleansU: (value: unknown) => readonly boolean[] | undefined;
export declare const empty: (value: unknown) => baseEmpty;
export declare const indexedObject: ((value: unknown) => IndexedObject<unknown>) & Readonly<{
    /**
     * Asserts that value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns Value if value type is IndexedObject\<T\>.
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>) => IndexedObject<T>;
}>;
export declare const indexedObjects: (value: unknown) => readonly IndexedObject<unknown>[];
export declare const indexedObjectsU: (value: unknown) => readonly IndexedObject<unknown>[] | undefined;
export declare const map: ((value: unknown) => ReadonlyMap<unknown, unknown>) & Readonly<{
    /**
     * Asserts that value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns Value if value type is Map\<K, V\>.
     * @throws Error otherwise.
     */
    of: <K, V>(value: unknown, keyGuard: is.Guard<K>, valueGuard: is.Guard<V>) => ReadonlyMap<K, V>;
}>;
export declare const mapU: (value: unknown) => ReadonlyMap<unknown, unknown> | undefined;
export declare const maps: (value: unknown) => readonly ReadonlyMap<unknown, unknown>[];
export declare const mapsU: (value: unknown) => readonly ReadonlyMap<unknown, unknown>[] | undefined;
export declare const never: (value: unknown) => never;
export declare const numStr: (value: unknown) => NumStr;
export declare const numStrU: (value: unknown) => NumStr | undefined;
export declare const numStrs: (value: unknown) => readonly NumStr[];
export declare const numStrsU: (value: unknown) => readonly NumStr[] | undefined;
export declare const number: (value: unknown) => number;
export declare const numberU: (value: unknown) => number | undefined;
export declare const numbers: (value: unknown) => readonly number[];
export declare const numbersU: (value: unknown) => readonly number[] | undefined;
export declare const object: (value: unknown) => object;
export declare const objectU: (value: unknown) => object | undefined;
export declare const objects: (value: unknown) => readonly object[];
export declare const objectsU: (value: unknown) => readonly object[] | undefined;
export declare const set: ((value: unknown) => ReadonlySet<unknown>) & Readonly<{
    /**
     * Asserts that value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns Value if value type is Set\<T\>.
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>) => ReadonlySet<T>;
}>;
export declare const setU: (value: unknown) => ReadonlySet<unknown> | undefined;
export declare const sets: (value: unknown) => readonly ReadonlySet<unknown>[];
export declare const setsU: (value: unknown) => readonly ReadonlySet<unknown>[] | undefined;
export declare const string: (value: unknown) => string;
export declare const stringU: (value: unknown) => baseStringU;
export declare const strings: (value: unknown) => readonly string[];
export declare const stringsU: (value: unknown) => readonly string[] | undefined;
export declare const symbol: (value: unknown) => symbol;
export declare const symbolU: (value: unknown) => symbol | undefined;
export declare const symbols: (value: unknown) => readonly symbol[];
export declare const symbolsU: (value: unknown) => readonly symbol[] | undefined;
export declare const unknown: (value: unknown) => unknown;
export declare const unknowns: (value: unknown) => readonly unknown[];
export declare const unknownsU: (value: unknown) => readonly unknown[] | undefined;
export declare const not: {
    readonly array: <V>(value: V) => Exclude<V, baseUnknowns>;
    readonly boolean: <V_1>(value: V_1) => Exclude<V_1, boolean>;
    readonly empty: <V_2>(value: V_2) => Exclude<V_2, baseEmpty>;
    readonly false: <V_3>(value: V_3) => Exclude<V_3, false>;
    readonly indexedObject: <V_4>(value: V_4) => Exclude<V_4, IndexedObject<unknown>>;
    readonly map: <V_5>(value: V_5) => Exclude<V_5, ReadonlyMap<unknown, unknown>>;
    readonly null: <V_6>(value: V_6) => Exclude<V_6, null>;
    readonly numStr: <V_7>(value: V_7) => Exclude<V_7, NumStr>;
    readonly number: <V_8>(value: V_8) => Exclude<V_8, number>;
    readonly object: <V_9>(value: V_9) => Exclude<V_9, object>;
    readonly set: <V_10>(value: V_10) => Exclude<V_10, ReadonlySet<unknown>>;
    readonly string: <V_11>(value: V_11) => Exclude<V_11, string>;
    readonly stringU: <V_12>(value: V_12) => Exclude<V_12, baseStringU>;
    readonly symbol: <V_13>(value: V_13) => Exclude<V_13, symbol>;
    readonly true: <V_14>(value: V_14) => Exclude<V_14, true>;
    readonly undefined: <V_15>(value: V_15) => Exclude<V_15, undefined>;
};
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function byGuard<T>(value: unknown, guard: is.Guard<T>): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function callable<T extends Function>(value: unknown): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param en - Validation object.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function enumeration<T extends PropertyKey>(value: unknown, en: IndexedObject<T>): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function instanceOf<T>(value: unknown, ctor: types.fn.Constructor<T>): T;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
export declare function instancesOf<T>(value: unknown, ctor: types.fn.Constructor<T>): readonly T[];
declare const _false: (value: unknown) => false;
declare const _null: (value: unknown) => null;
declare const _true: (value: unknown) => true;
declare const _undefined: (value: unknown) => undefined;
//# sourceMappingURL=inline-assertions.d.ts.map