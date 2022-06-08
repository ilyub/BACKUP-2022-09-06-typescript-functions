import { ErrorArg } from "./errors";
import * as is from "./guards";
import type { ValidationObject } from "./core";
import type * as types from "./types";
export declare const not: {
    /**
     * Asserts that value type is not empty.
     *
     * @param value - Value.
     * @param error - Error.
     * @returns Void.
     */
    readonly empty: <T>(value: T, error?: ErrorArg) => asserts value is Exclude<T, types.empty>;
};
export declare const array: {
    /**
     * Asserts that value is an array.
     *
     * @param value - Value.
     * @param error - Error.
     */
    (value: unknown, error?: ErrorArg): asserts value is types.unknowns;
    /**
     * Asserts that value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Void.
     */
    readonly of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg) => asserts value is readonly T[];
};
export declare const indexedObject: {
    /**
     * Asserts that value type is IndexedObject.
     *
     * @param value - Value.
     * @param error - Error.
     */
    (value: unknown, error?: ErrorArg): asserts value is types.IndexedObject;
    /**
     * Asserts that value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Void.
     */
    of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg) => asserts value is types.IndexedObject<T>;
};
export declare const map: {
    /**
     * Asserts that value type is Map.
     *
     * @param value - Value.
     * @param error - Error.
     */
    (value: unknown, error?: ErrorArg): asserts value is ReadonlyMap<unknown, unknown>;
    /**
     * Asserts that value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @param error - Error.
     * @returns Void.
     */
    readonly of: <K, V>(value: unknown, keyGuard: is.Guard<K>, valueGuard: is.Guard<V>, error?: ErrorArg) => asserts value is ReadonlyMap<K, V>;
};
export declare const set: {
    /**
     * Asserts that value type is Set.
     *
     * @param value - Value.
     * @param error - Error.
     */
    (value: unknown, error?: ErrorArg): asserts value is ReadonlySet<unknown>;
    /**
     * Asserts that value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Void.
     */
    readonly of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg) => asserts value is ReadonlySet<T>;
};
/**
 * Asserts that value is a boolean.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function boolean(value: unknown, error?: ErrorArg): asserts value is boolean;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
export declare function byGuard<T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg): asserts value is T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function callable<T extends Function>(value: unknown, error?: ErrorArg): asserts value is T;
/**
 * Asserts that value type is empty.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function empty(value: unknown, error?: ErrorArg): asserts value is types.empty;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error.
 */
export declare function enumeration<T extends PropertyKey>(value: unknown, vo: ValidationObject<T>, error?: ErrorArg): asserts value is T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export declare function instance<T>(value: unknown, ctor: types.Constructor<T>, error?: ErrorArg): asserts value is T;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export declare function instances<T>(value: unknown, ctor: types.Constructor<T>, error?: ErrorArg): asserts value is readonly T[];
/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function numStr(value: unknown, error?: ErrorArg): asserts value is types.NumStr;
/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function number(value: unknown, error?: ErrorArg): asserts value is number;
/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function object(value: unknown, error?: ErrorArg): asserts value is object;
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function string(value: unknown, error?: ErrorArg): asserts value is string;
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function stringU(value: unknown, error?: ErrorArg): asserts value is types.stringU;
/**
 * Asserts that value is a symbol.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function symbol(value: unknown, error?: ErrorArg): asserts value is symbol;
/**
 * Asserts value to be _false_.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function toBeFalse(value: unknown, error?: ErrorArg): asserts value is false;
/**
 * Asserts value to be _true_.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function toBeTrue(value: unknown, error?: ErrorArg): asserts value is true;
/**
 * Wraps error.
 *
 * @param e - Error.
 * @returns Wrapped error.
 * @deprecated Use ErrorArg.wrapError instead.
 */
export declare function wrapError<T>(e: T): () => T;
//# sourceMappingURL=assertions.d.ts.map