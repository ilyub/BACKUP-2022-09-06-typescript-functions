import type * as types from "./types";
export declare const not: (() => never) & {
    /**
     * Converts value to not empty.
     *
     * @param this - No this.
     * @param value - Value.
     * @param defVal - Default value.
     * @returns Value if it is not empty, defVal otherwise.
     */
    empty<T>(this: void, value: T, defVal: Exclude<T, types.empty>): Exclude<T, types.empty>;
};
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
export declare function number(value: unknown, defVal?: number): number;
/**
 * Converts value to a number.
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
 * Converts value to type stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function stringU(value: unknown): types.stringU;
//# sourceMappingURL=converters.d.ts.map