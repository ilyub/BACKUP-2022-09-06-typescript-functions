import { ErrorArg } from "./errors";
import * as is from "./guards";
import type { ValidationObject } from "./core";
import type * as types from "./types";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export declare const array: ((value: unknown, error?: ErrorArg) => types.unknowns) & Readonly<{
    /**
     * Asserts that value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is T[].
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg) => readonly T[];
}>;
export declare const arrayU: (value: unknown, error?: ErrorArg) => types.unknowns | undefined;
export declare const arrays: (value: unknown, error?: ErrorArg) => readonly types.unknowns[];
export declare const arraysU: (value: unknown, error?: ErrorArg) => readonly types.unknowns[] | undefined;
export declare const boolean: (value: unknown, error?: ErrorArg) => boolean;
export declare const booleanU: (value: unknown, error?: ErrorArg) => boolean | undefined;
export declare const booleans: (value: unknown, error?: ErrorArg) => readonly boolean[];
export declare const booleansU: (value: unknown, error?: ErrorArg) => readonly boolean[] | undefined;
export declare const empty: (value: unknown, error?: ErrorArg) => types.empty;
export declare const indexedObject: ((value: unknown, error?: ErrorArg) => types.IndexedObject<unknown>) & Readonly<{
    /**
     * Asserts that value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is IndexedObject\<T\>.
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg) => types.IndexedObject<T>;
}>;
export declare const indexedObjectU: (value: unknown, error?: ErrorArg) => types.IndexedObject<unknown> | undefined;
export declare const indexedObjects: (value: unknown, error?: ErrorArg) => readonly types.IndexedObject<unknown>[];
export declare const indexedObjectsU: (value: unknown, error?: ErrorArg) => readonly types.IndexedObject<unknown>[] | undefined;
export declare const map: ((value: unknown, error?: ErrorArg) => ReadonlyMap<unknown, unknown>) & Readonly<{
    /**
     * Asserts that value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @param error - Error.
     * @returns Value if value type is Map\<K, V\>.
     * @throws Error otherwise.
     */
    of: <K, V>(value: unknown, keyGuard: is.Guard<K>, valueGuard: is.Guard<V>, error?: ErrorArg) => ReadonlyMap<K, V>;
}>;
export declare const mapU: (value: unknown, error?: ErrorArg) => ReadonlyMap<unknown, unknown> | undefined;
export declare const maps: (value: unknown, error?: ErrorArg) => readonly ReadonlyMap<unknown, unknown>[];
export declare const mapsU: (value: unknown, error?: ErrorArg) => readonly ReadonlyMap<unknown, unknown>[] | undefined;
export declare const never: (value: unknown, error?: ErrorArg) => never;
export declare const numStr: (value: unknown, error?: ErrorArg) => types.NumStr;
export declare const numStrU: (value: unknown, error?: ErrorArg) => types.NumStr | undefined;
export declare const numStrs: (value: unknown, error?: ErrorArg) => readonly types.NumStr[];
export declare const numStrsU: (value: unknown, error?: ErrorArg) => readonly types.NumStr[] | undefined;
export declare const number: (value: unknown, error?: ErrorArg) => number;
export declare const numberU: (value: unknown, error?: ErrorArg) => number | undefined;
export declare const numbers: (value: unknown, error?: ErrorArg) => readonly number[];
export declare const numbersU: (value: unknown, error?: ErrorArg) => readonly number[] | undefined;
export declare const object: (value: unknown, error?: ErrorArg) => object;
export declare const objectU: (value: unknown, error?: ErrorArg) => object | undefined;
export declare const objects: (value: unknown, error?: ErrorArg) => readonly object[];
export declare const objectsU: (value: unknown, error?: ErrorArg) => readonly object[] | undefined;
export declare const set: ((value: unknown, error?: ErrorArg) => ReadonlySet<unknown>) & Readonly<{
    /**
     * Asserts that value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is Set\<T\>.
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg) => ReadonlySet<T>;
}>;
export declare const setU: (value: unknown, error?: ErrorArg) => ReadonlySet<unknown> | undefined;
export declare const sets: (value: unknown, error?: ErrorArg) => readonly ReadonlySet<unknown>[];
export declare const setsU: (value: unknown, error?: ErrorArg) => readonly ReadonlySet<unknown>[] | undefined;
export declare const string: (value: unknown, error?: ErrorArg) => string;
export declare const stringU: (value: unknown, error?: ErrorArg) => types.stringU;
export declare const strings: (value: unknown, error?: ErrorArg) => readonly string[];
export declare const stringsU: (value: unknown, error?: ErrorArg) => readonly string[] | undefined;
export declare const symbol: (value: unknown, error?: ErrorArg) => symbol;
export declare const symbolU: (value: unknown, error?: ErrorArg) => symbol | undefined;
export declare const symbols: (value: unknown, error?: ErrorArg) => readonly symbol[];
export declare const symbolsU: (value: unknown, error?: ErrorArg) => readonly symbol[] | undefined;
export declare const unknown: (value: unknown, error?: ErrorArg) => unknown;
export declare const unknowns: (value: unknown, error?: ErrorArg) => readonly unknown[];
export declare const unknownsU: (value: unknown, error?: ErrorArg) => readonly unknown[] | undefined;
export declare const not: {
    readonly array: <V>(value: V, error?: ErrorArg) => Exclude<V, types.unknowns>;
    readonly boolean: <V_1>(value: V_1, error?: ErrorArg) => Exclude<V_1, boolean>;
    readonly empty: <V_2>(value: V_2, error?: ErrorArg) => Exclude<V_2, types.empty>;
    readonly false: <V_3>(value: V_3, error?: ErrorArg) => Exclude<V_3, false>;
    readonly indexedObject: <V_4>(value: V_4, error?: ErrorArg) => Exclude<V_4, types.IndexedObject<unknown>>;
    readonly map: <V_5>(value: V_5, error?: ErrorArg) => Exclude<V_5, ReadonlyMap<unknown, unknown>>;
    readonly null: <V_6>(value: V_6, error?: ErrorArg) => Exclude<V_6, null>;
    readonly numStr: <V_7>(value: V_7, error?: ErrorArg) => Exclude<V_7, types.NumStr>;
    readonly number: <V_8>(value: V_8, error?: ErrorArg) => Exclude<V_8, number>;
    readonly object: <V_9>(value: V_9, error?: ErrorArg) => Exclude<V_9, object>;
    readonly set: <V_10>(value: V_10, error?: ErrorArg) => Exclude<V_10, ReadonlySet<unknown>>;
    readonly string: <V_11>(value: V_11, error?: ErrorArg) => Exclude<V_11, string>;
    readonly stringU: <V_12>(value: V_12, error?: ErrorArg) => Exclude<V_12, types.stringU>;
    readonly symbol: <V_13>(value: V_13, error?: ErrorArg) => Exclude<V_13, symbol>;
    readonly true: <V_14>(value: V_14, error?: ErrorArg) => Exclude<V_14, true>;
    readonly undefined: <V_15>(value: V_15, error?: ErrorArg) => Exclude<V_15, undefined>;
};
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function byGuard<T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function callable<T extends Function>(value: unknown, error?: ErrorArg): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function enumeration<T extends PropertyKey>(value: unknown, vo: ValidationObject<T>, error?: ErrorArg): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function instance<T>(value: unknown, ctor: types.Constructor<T>, error?: ErrorArg): T;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
export declare function instances<T>(value: unknown, ctor: types.Constructor<T>, error?: ErrorArg): readonly T[];
declare const _false: (value: unknown, error?: ErrorArg) => false;
declare const _null: (value: unknown, error?: ErrorArg) => null;
declare const _true: (value: unknown, error?: ErrorArg) => true;
declare const _undefined: (value: unknown, error?: ErrorArg) => undefined;
//# sourceMappingURL=inline-assertions.d.ts.map