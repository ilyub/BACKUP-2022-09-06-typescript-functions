import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import * as is from "./guards";
import type { ValidationObject } from "./helpers";
import type * as types from "./types/core";
import type { Constructor } from "./types/function";
export declare type ErrorArg = ErrorArgFn | string;
export interface ErrorArgFn {
    /**
     * Creates error object.
     *
     * @returns Error object.
     */
    (): unknown;
}
/**
 * Converts error message/object to assertion error argument.
 *
 * @param strOrError - Error message/object.
 * @returns Assertion error argument.
 */
export declare function toErrorArg(strOrError: unknown): ErrorArg;
/**
 * Not implemented.
 */
export declare function not(): never;
export declare namespace not {
    var empty: <T>(value: T, error?: ErrorArg | undefined) => asserts value is Exclude<T, types.empty>;
}
/**
 * Asserts that value is an array.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function array(value: unknown, error?: ErrorArg): asserts value is types.unknowns;
export declare namespace array {
    var of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg | undefined) => asserts value is readonly T[];
}
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
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function indexedObject(value: unknown, error?: ErrorArg): asserts value is types.IndexedObject;
export declare namespace indexedObject {
    var of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg | undefined) => asserts value is Readonly<types.TypedObject<PropertyKey, T>>;
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export declare function instance<T>(value: unknown, ctor: Constructor<T>, error?: ErrorArg): asserts value is T;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export declare function instances<T>(value: unknown, ctor: Constructor<T>, error?: ErrorArg): asserts value is readonly T[];
/**
 * Asserts that value type is Map.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function map(value: unknown, error?: ErrorArg): asserts value is ReadonlyMap<unknown, unknown>;
export declare namespace map {
    var of: <K, V>(value: unknown, keyGuard: is.Guard<K>, valueGuard: is.Guard<V>, error?: ErrorArg | undefined) => asserts value is ReadonlyMap<K, V>;
}
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
export declare namespace object {
    var of: <T extends object>(value: unknown, requiredGuards: is.Guards<T, RequiredKeys<T>>, optionalGuards: is.Guards<T, OptionalKeys<T>>, error?: ErrorArg | undefined) => asserts value is T;
}
/**
 * Asserts that value type is Set.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function set(value: unknown, error?: ErrorArg): asserts value is ReadonlySet<unknown>;
export declare namespace set {
    var of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg | undefined) => asserts value is ReadonlySet<T>;
}
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 */
export declare function string(value: unknown, error?: ErrorArg): asserts value is string;
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
//# sourceMappingURL=assertions.d.ts.map