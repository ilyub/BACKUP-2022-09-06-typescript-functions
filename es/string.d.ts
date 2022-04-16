import type { strings } from "./types";
export { _path as path };
export declare type Eol = "\n" | "\r\n";
/**
 * Detects EOL sequence.
 *
 * @param str - String.
 * @returns EOL sequence.
 */
export declare function detectEol(str: string): Eol;
/**
 * Checks that string consists of only spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of only spaces, _false_ otherwise.
 */
export declare function empty(str: string): boolean;
/**
 * Filters string.
 *
 * @param str - String.
 * @param predicate - Predicate.
 * @returns Filtered string.
 */
export declare function filter(str: string, predicate: (char: string, index: number) => boolean): string;
/**
 * Converts first letter to lower case.
 *
 * @param str - String.
 * @returns Converted string.
 */
export declare function lcFirst(str: string): string;
/**
 * Extracts leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
export declare function leadingSpaces(str: string): string;
/**
 * Splits string into lines.
 *
 * @param str - String.
 * @returns Array of strings.
 */
export declare function lines(str: string): strings;
/**
 * Checks that string is multiline.
 *
 * @param str - String.
 * @returns _True_ if string is multiline, _false_ otherwise.
 */
export declare function multiline(str: string): boolean;
/**
 * Replaces all occurences of search term.
 *
 * @param str - String.
 * @param search - Search term.
 * @param replace - Replacement.
 * @returns New string with replacements done.
 */
export declare function replaceAll(str: string, search: string, replace: string): string;
/**
 * Checks that string is single-line.
 *
 * @param str - String.
 * @returns _True_ if string is single-line, _false_ otherwise.
 */
export declare function singleLine(str: string): boolean;
/**
 * Extracts trailing spaces.
 *
 * @param str - String.
 * @returns String containing trailing spaces.
 */
export declare function trailingSpaces(str: string): string;
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export declare function trimEnd(str: string): string;
/**
 * Trims leading empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export declare function trimLeadingEmptyLines(str: string): string;
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export declare function trimStart(str: string): string;
/**
 * Trims trailing empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export declare function trimTrailingEmptyLines(str: string): string;
/**
 * Converts first letter to upper case.
 *
 * @param str - String.
 * @returns New string.
 */
export declare function ucFirst(str: string): string;
/**
 * Unpads multiline string.
 *
 * @param str - String.
 * @returns Unpadded string.
 */
export declare function unpadMultiline(str: string): string;
/**
 * Not implemented.
 */
declare const _path: (() => never) & {
    /**
     * Adds leading slash.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns New string with leading slash added.
     */
    addLeadingSlash(this: void, path: string): string;
    /**
     * Adds trailing slash.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns New string with trailing slash added.
     */
    addTrailingSlash(this: void, path: string): string;
    /**
     * Canonicalizes path.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns Canonical path.
     */
    canonicalize(this: void, path: string): string;
    /**
     * Creates path from parts.
     *
     * @param parts - Parts.
     * @returns Path.
     */
    join(...parts: strings): string;
    /**
     * Removes leading slash.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns New string with leading slash removed.
     */
    removeLeadingSlash(this: void, path: string): string;
    /**
     * Removes trailing slash.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns New string with trailing slash removed.
     */
    removeTrailingSlash(this: void, path: string): string;
};
//# sourceMappingURL=string.d.ts.map