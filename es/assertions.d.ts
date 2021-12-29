import * as is from "./guards";
import type * as types from "./types/core";
export declare type Assertion<T> = (value: unknown) => asserts value is T;
export declare type ErrorArg = string | (() => unknown);
/**
 * Converts error or error message to error argument usable with assertion.
 *
 * @param errorOrMessage - Error or error message.
 * @returns Error argument.
 */
export declare function toErrorArg(errorOrMessage: unknown): ErrorArg;
/**
 * Not implemented.
 */
export declare function not(): never;
export declare namespace not {
    export var empty: <T>(value: T, error?: ErrorArg | undefined) => asserts value is Exclude<T, types.empty>;
    var _a: <T>(value: T, error?: ErrorArg | undefined) => asserts value is Exclude<T, null>;
    export var undefined: <T>(value: T, error?: ErrorArg | undefined) => asserts value is Exclude<T, undefined>;
    export { _a as null };
}
/**
 * Asserts that value is an array.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function array(value: unknown, error?: ErrorArg): asserts value is readonly unknown[];
export declare namespace array {
    var of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg | undefined) => asserts value is readonly T[];
}
/**
 * Asserts that value is a boolean.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function boolean(value: unknown, error?: ErrorArg): asserts value is boolean;
/**
 * Asserts that value type is booleanU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function booleanU(value: unknown, error?: ErrorArg): asserts value is types.booleanU;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error to be thrown.
 */
export declare function byGuard<T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg): asserts value is T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function callable<T extends Function>(value: unknown, error?: ErrorArg): asserts value is T;
/**
 * Asserts that value type is T | undefined.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function callableU<T extends Function>(value: unknown, error?: ErrorArg): asserts value is T | undefined;
/**
 * Asserts that value type is empty.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function empty(value: unknown, error?: ErrorArg): asserts value is types.empty;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error to be thrown.
 */
export declare function enumeration<T extends PropertyKey>(value: unknown, vo: types.ValidationObject<T>, error?: ErrorArg): asserts value is T;
/**
 * Asserts that value type is T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error to be thrown.
 */
export declare function enumerationU<T extends PropertyKey>(value: unknown, vo: types.ValidationObject<T>, error?: ErrorArg): asserts value is T | undefined;
/**
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function indexedObject(value: unknown, error?: ErrorArg): asserts value is types.ReadonlyIndexedObject;
export declare namespace indexedObject {
    var of: <T>(value: unknown, guard: is.Guard<T>, error?: ErrorArg | undefined) => asserts value is Readonly<types.IndexedObject<T>>;
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error to be thrown.
 */
export declare function instance<T>(value: unknown, ctor: types.Constructor<T>, error?: ErrorArg): asserts value is T;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error to be thrown.
 */
export declare function instances<T>(value: unknown, ctor: types.Constructor<T>, error?: ErrorArg): asserts value is readonly T[];
/**
 * Asserts that value is _null_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
declare function nullAssertion(value: unknown, error?: ErrorArg): asserts value is null;
export { nullAssertion as null };
/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function numStr(value: unknown, error?: ErrorArg): asserts value is types.NumStr;
/**
 * Asserts that value type is NumStrU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function numStrU(value: unknown, error?: ErrorArg): asserts value is types.NumStrU;
/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function number(value: unknown, error?: ErrorArg): asserts value is number;
/**
 * Asserts that value type is numberU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function numberU(value: unknown, error?: ErrorArg): asserts value is types.numberU;
/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function object(value: unknown, error?: ErrorArg): asserts value is object;
export declare namespace object {
    var of: <A, B>(value: unknown, requiredGuards: is.Guards<A>, optionalGuards: is.Guards<B>, error?: ErrorArg | undefined) => asserts value is Required<A> & Partial<B>;
}
/**
 * Asserts that value type is objectU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function objectU(value: unknown, error?: ErrorArg): asserts value is types.objectU;
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function string(value: unknown, error?: ErrorArg): asserts value is string;
/**
 * Asserts that value type is stringU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function stringU(value: unknown, error?: ErrorArg): asserts value is types.stringU;
/**
 * Asserts value to be _false_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function toBeFalse(value: unknown, error?: ErrorArg): asserts value is false;
/**
 * Asserts value to be _true_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export declare function toBeTrue(value: unknown, error?: ErrorArg): asserts value is true;
/**
 * Asserts that value is _undefined_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
declare function undefinedAssertion(value: unknown, error?: ErrorArg): asserts value is undefined;
export { undefinedAssertion as undefined };
//# sourceMappingURL=assertions.d.ts.map