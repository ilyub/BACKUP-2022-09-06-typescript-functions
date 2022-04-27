import * as assert from "./assertions";
import type * as is from "./guards";
import type { ValidationObject } from "./helpers";
import type * as types from "./types";
/**
 * Asserts that value is an array.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is an array.
 * @throws Error otherwise.
 */
export declare const array: ((value: unknown, error?: assert.ErrorArg | undefined) => types.unknowns) & {
    /**
     * Asserts that value type is T[].
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is T[].
     * @throws Error otherwise.
     */
    of<T>(this: void, value: unknown, guard: is.Guard<T>, error?: assert.ErrorArg | undefined): readonly T[];
};
/**
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is IndexedObject.
 * @throws Error otherwise.
 */
export declare const indexedObject: ((value: unknown, error?: assert.ErrorArg | undefined) => types.IndexedObject) & {
    /**
     * Asserts that value type is IndexedObject\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is IndexedObject\<T\>.
     * @throws Error otherwise.
     */
    of<T>(this: void, value: unknown, guard: is.Guard<T>, error?: assert.ErrorArg | undefined): types.IndexedObject<T>;
};
/**
 * Asserts that value type is Map.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is Map.
 * @throws Error otherwise.
 */
export declare const map: ((value: unknown, error?: assert.ErrorArg | undefined) => ReadonlyMap<unknown, unknown>) & {
    /**
     * Asserts that value type is Map\<K, V\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @param error - Error.
     * @returns Value if value type is Map\<K, V\>.
     * @throws Error otherwise.
     */
    of<K, V>(this: void, value: unknown, keyGuard: is.Guard<K>, valueGuard: is.Guard<V>, error?: assert.ErrorArg | undefined): ReadonlyMap<K, V>;
};
/**
 * Not implemented.
 */
export declare const not: (() => never) & {
    /**
     * Asserts that value type is not empty.
     *
     * @param this - No this.
     * @param value - Value.
     * @param error - Error.
     * @returns Value if value type is not empty.
     * @throws Error otherwise.
     */
    empty<T>(this: void, value: T, error?: assert.ErrorArg | undefined): Exclude<T, types.empty>;
};
/**
 * Asserts that value type is Set.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is Set.
 * @throws Error otherwise.
 */
export declare const set: ((value: unknown, error?: assert.ErrorArg | undefined) => ReadonlySet<unknown>) & {
    /**
     * Asserts that value type is Set\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is Set\<T\>.
     * @throws Error otherwise.
     */
    of<T>(this: void, value: unknown, guard: is.Guard<T>, error?: assert.ErrorArg | undefined): ReadonlySet<T>;
};
/**
 * Asserts that value is a boolean.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a boolean.
 * @throws Error otherwise.
 */
export declare function boolean(value: unknown, error?: assert.ErrorArg): boolean;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function callable<T extends Function>(value: unknown, error?: assert.ErrorArg): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function enumeration<T extends PropertyKey>(value: unknown, vo: ValidationObject<T>, error?: assert.ErrorArg): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function instance<T>(value: unknown, ctor: types.Constructor<T>, error?: assert.ErrorArg): T;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
export declare function instances<T>(value: unknown, ctor: types.Constructor<T>, error?: assert.ErrorArg): readonly T[];
/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is NumStr.
 * @throws Error otherwise.
 */
export declare function numStr(value: unknown, error?: assert.ErrorArg): types.NumStr;
/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a number.
 * @throws Error otherwise.
 */
export declare function number(value: unknown, error?: assert.ErrorArg): number;
/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is an object.
 * @throws Error otherwise.
 */
export declare function object(value: unknown, error?: assert.ErrorArg): object;
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a string.
 * @throws Error otherwise.
 */
export declare function string(value: unknown, error?: assert.ErrorArg): string;
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a string.
 * @throws Error otherwise.
 */
export declare function stringU(value: unknown, error?: assert.ErrorArg): types.stringU;
/**
 * Asserts that value is a symbol.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a symbol.
 * @throws Error otherwise.
 */
export declare function symbol(value: unknown, error?: assert.ErrorArg): symbol;
//# sourceMappingURL=inline-assertions.d.ts.map