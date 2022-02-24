import type { stringU } from "./types/core";
/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
export declare function addFlags(re: RegExp, flags: string): RegExp;
/**
 * Escapes regular expression special characters.
 *
 * @param str - String.
 * @returns Escaped string.
 */
export declare function escapeString(str: string): string;
/**
 * Finds all matches.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Matches.
 */
export declare function matchAll(str: string, re: RegExp): RegExpExecArray[];
/**
 * Finds substring matching regular expression.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Substring if found, _undefined_ otherwise.
 */
export declare function slice(str: string, re: RegExp): stringU;
export declare namespace slice {
    var orFail: (str: string, re: RegExp) => string;
}
//# sourceMappingURL=regexp.d.ts.map