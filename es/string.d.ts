export declare type Eol = "\n" | "\r\n";
/**
 * Detects EOL sequence.
 *
 * @param str - String.
 * @returns EOL sequence.
 */
export declare function detectEol(str: string): Eol;
/**
 * Checks that string consists of spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of spaces, _false_ otherwise.
 */
export declare function empty(str: string): boolean;
/**
 * Filters string.
 *
 * @param str - String.
 * @param predicate - Filter function.
 * @returns Filtered string.
 */
export declare function filter(str: string, predicate: (char: string, index: number) => unknown): string;
/**
 * Gets leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
export declare function leadingSpaces(str: string): string;
/**
 * Converts first letter to lower case.
 *
 * @param str - String.
 * @returns Converted string.
 */
export declare function lcFirst(str: string): string;
/**
 * Splits string into lines.
 *
 * @param str - String.
 * @returns Array of strings.
 */
export declare function lines(str: string): string[];
/**
 * Not implemented.
 */
declare function pathUtils(): never;
declare namespace pathUtils {
    var addLeadingSlash: (path: string) => string;
    var addTrailingSlash: (path: string) => string;
    var canonicalize: (path: string) => string;
    var join: (...parts: string[]) => string;
    var removeLeadingSlash: (path: string) => string;
    var removeTrailingSlash: (path: string) => string;
}
export { pathUtils as path };
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
 * Gets trailing spaces.
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
//# sourceMappingURL=string.d.ts.map