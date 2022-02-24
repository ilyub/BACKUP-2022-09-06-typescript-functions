import * as is from "./guards";
import type * as types from "./types/core";
export interface Converter<T> {
    /**
     * Converts value to type T.
     *
     * @param value - Value.
     * @returns Converted value.
     */
    (value: unknown): T;
}
export interface MultiArgConverter<T, A extends unknown[]> {
    /**
     * Converts value to type T.
     *
     * @param value - Value.
     * @param args - Arguments.
     * @returns Converted value.
     */
    (value: unknown, ...args: A): T;
}
export declare type OrFail = typeof orFail;
export declare const orFail: unique symbol;
/**
 * Creates single-arg converter.
 *
 * @param converter - Multi-arg converter.
 * @param args - Rest arguments.
 * @returns Single-arg converter.
 */
export declare function factory<T, A extends unknown[]>(converter: MultiArgConverter<T, A>, ...args: A): Converter<T>;
/**
 * Not implemented.
 */
export declare function not(): never;
export declare namespace not {
    var empty: typeof notEmpty;
}
/**
 * Converts value to an array.
 *
 * @param value - Value.
 * @returns Value if it is an array, empty array otherwise.
 */
export declare function array(value: unknown): readonly unknown[];
export declare namespace array {
    var of: typeof arrayOf;
}
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param converter - Converter for type T.
 * @returns An array of converted elements if value is an array, empty array otherwise.
 */
export declare function arrayOf<T>(value: unknown, converter: Converter<T>): T[];
export declare namespace arrayOf {
    var filtered: typeof arrayOfFiltered;
    var orFail: typeof arrayOfOrFail;
    var undef: typeof arrayOfUndef;
}
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Filtered array if value is an array, empty array otherwise.
 */
export declare function arrayOfFiltered<T>(value: unknown, guard: is.Guard<T>): T[];
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Value if it is of type T[], empty array if value is empty.
 * @throws ConversionError otherwise.
 */
export declare function arrayOfOrFail<T>(value: unknown, guard: is.Guard<T>): readonly T[];
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param converter - Converter for type T | undefined.
 * @returns Filtered array of converted elements if value is an array, empty array otherwise.
 */
export declare function arrayOfUndef<T>(value: unknown, converter: Converter<T | undefined>): T[];
/**
 * Converts value to a boolean.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function boolean(value: unknown): boolean;
/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Value if it is of type T, defVal otherwise.
 * @throws ConversionError if defVal is equal to orFail.
 */
export declare function byGuard<T>(value: unknown, guard: is.Guard<T>, defVal: OrFail | T): T;
/**
 * Not implemented.
 */
export declare function callable(): never;
export declare namespace callable {
    var orFail: typeof callableOrFail;
}
/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @returns Value if it is a Function.
 * @throws ConversionError otherwise.
 */
export declare function callableOrFail<T extends Function>(value: unknown): T;
/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @returns Value if it is a Function, _undefined_ otherwise.
 */
export declare function callableU<T extends Function>(value: unknown): T | undefined;
/**
 * Converts value to non-empty.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Value if it is not empty, defVal otherwise.
 */
export declare function notEmpty<T>(value: T, defVal: Exclude<T, types.empty>): Exclude<T, types.empty>;
/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param defVal - Default value.
 * @returns Value if it is of type T, defVal otherwise.
 * @throws ConversionError if defVal is equal to orFail.
 */
export declare function enumeration<T extends PropertyKey>(value: unknown, vo: types.ValidationObject<T>, defVal: OrFail | T): T;
/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns Value if it is of type T, _undefined_ otherwise.
 */
export declare function enumerationU<T extends PropertyKey>(value: unknown, vo: types.ValidationObject<T>): T | undefined;
/**
 * Converts value to IndexedObject.
 *
 * @param value - Value.
 * @returns Value if it is an object, empty object otherwise.
 */
export declare function indexedObject(value: unknown): types.ReadonlyIndexedObject;
export declare namespace indexedObject {
    var of: typeof indexedObjectOf;
}
/**
 * Converts value to IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param converter - Converter for type T.
 * @returns Converted object if value is an object, empty object otherwise.
 */
export declare function indexedObjectOf<T>(value: unknown, converter: Converter<T>): types.ReadonlyIndexedObject<T>;
/**
 * Not implemented.
 */
export declare function instance(): never;
export declare namespace instance {
    var orFail: typeof instanceOrFail;
}
/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if it is a class instance.
 * @throws ConversionError otherwise.
 */
export declare function instanceOrFail<T>(value: unknown, ctor: types.Constructor<T>): T;
/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if it is a class instance, _undefined_ otherwise.
 */
export declare function instanceU<T>(value: unknown, ctor: types.Constructor<T>): T | undefined;
/**
 * Not implemented.
 */
export declare function instances(): never;
export declare namespace instances {
    var filtered: typeof instancesFiltered;
    var orFail: typeof instancesOrFail;
}
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Filtered array if value is an array, empty array otherwise.
 */
export declare function instancesFiltered<T>(value: unknown, ctor: types.Constructor<T>): T[];
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if it is of type T[], empty array if value is empty.
 * @throws ConversionError otherwise.
 */
export declare function instancesOrFail<T>(value: unknown, ctor: types.Constructor<T>): readonly T[];
/**
 * Converts value to NumStr.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function numStr(value: unknown): types.NumStr;
/**
 * Converts value to NumStrU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function numStrU(value: unknown): types.NumStrU;
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
export declare function number(value: unknown, defVal?: number): number;
export declare namespace number {
    var orFail: typeof numberOrFail;
}
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @returns Converted value.
 * @throws ConversionError on failure.
 */
export declare function numberOrFail(value: unknown): number;
/**
 * Converts value to numberU.
 *
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
export declare function numberU(value: unknown): types.numberU;
/**
 * Converts value to an object.
 *
 * @param value - Value.
 * @returns Value if it is an object, empty object otherwise.
 */
export declare function object(value: unknown): object;
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function string(value: unknown): string;
export declare namespace string {
    var orFail: typeof stringOrFail;
}
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 * @throws ConversionError if value is converted to an empty string.
 */
export declare function stringOrFail(value: unknown): string;
/**
 * Converts value to stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function stringU(value: unknown): types.stringU;
/**
 * Do nothing converter.
 *
 * @param value - Value.
 * @returns Value.
 */
export declare function unknown(value: unknown): unknown;
//# sourceMappingURL=converters.d.ts.map