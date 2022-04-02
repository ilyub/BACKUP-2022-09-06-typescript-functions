import type * as types from "./types/core";
/**
 * Not implemented.
 */
export declare function not(): never;
export declare namespace not {
    var empty: typeof notEmpty;
}
/**
 * Converts value to not empty.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Value if it is not empty, defVal otherwise.
 */
export declare function notEmpty<T>(value: T, defVal: Exclude<T, types.empty>): Exclude<T, types.empty>;
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
export declare function number(value: unknown, defVal?: number): number;
/**
 * Converts value to numberU.
 *
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
export declare function numberU(value: unknown): types.numberU;
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function string(value: unknown): string;
/**
 * Converts value to stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function stringU(value: unknown): types.stringU;
//# sourceMappingURL=converters.d.ts.map