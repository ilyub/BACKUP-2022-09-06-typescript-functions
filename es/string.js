import * as a from "./array";
import * as regexp from "./regexp";
/**
 * Detects EOL sequence.
 *
 * @param str - String.
 * @returns EOL sequence.
 */
export function detectEol(str) {
    return str.includes("\r\n") ? "\r\n" : "\n";
}
/**
 * Checks that string consists of spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of spaces, _false_ otherwise.
 */
export function empty(str) {
    return /^\s*$/u.test(str);
}
/**
 * Filters string.
 *
 * @param str - String.
 * @param predicate - Filter function.
 * @returns Filtered string.
 */
export function filter(str, predicate) {
    return a.fromString(str).filter(predicate).join("");
}
/**
 * Gets leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
export function leadingSpaces(str) {
    return str.slice(0, str.length - trimStart(str).length);
}
/**
 * Converts first letter to lower case.
 *
 * @param str - String.
 * @returns Converted string.
 */
export function lcFirst(str) {
    return str ? str.charAt(0).toLowerCase() + str.slice(1) : str;
}
/**
 * Splits string into lines.
 *
 * @param str - String.
 * @returns Array of strings.
 */
export function lines(str) {
    return str.split(/\r\n|\n/u);
}
/**
 * Checks that string is multiline.
 *
 * @param str - String.
 * @returns _True_ if string is multiline, _false_ otherwise.
 */
export function multiline(str) {
    return str.includes("\n");
}
/**
 * Not implemented.
 */
function pathUtils() {
    throw new Error("Not implemented");
}
export { pathUtils as path };
/**
 * Adds leading slash.
 *
 * @param path - Path.
 * @returns New string with leading slash added.
 */
pathUtils.addLeadingSlash = (path) => `/${path.replace(/^[/\\]/u, "")}`;
/**
 * Adds trailing slash.
 *
 * @param path - Path.
 * @returns New string with trailing slash added.
 */
pathUtils.addTrailingSlash = (path) => `${path.replace(/[/\\]$/u, "")}/`;
/**
 * Canonicalizes path.
 *
 * @param path - Path.
 * @returns Canonical path.
 */
pathUtils.canonicalize = (path) => path.replace(/[/\\]+/gu, "/");
/**
 * Creates path from parts.
 *
 * @param parts - Parts.
 * @returns Path.
 */
pathUtils.join = (...parts) => pathUtils.canonicalize(parts.join("/"));
/**
 * Removes leading slash.
 *
 * @param path - Path.
 * @returns New string with leading slash removed.
 */
pathUtils.removeLeadingSlash = (path) => path.replace(/^[/\\]/u, "");
/**
 * Removes trailing slash.
 *
 * @param path - Path.
 * @returns New string with trailing slash removed.
 */
pathUtils.removeTrailingSlash = (path) => path.replace(/[/\\]$/u, "");
/**
 * Replaces all occurences of search term.
 *
 * @param str - String.
 * @param search - Search term.
 * @param replace - Replacement.
 * @returns New string with replacements done.
 */
export function replaceAll(str, search, replace) {
    // eslint-disable-next-line security/detect-non-literal-regexp
    return str.replace(new RegExp(regexp.escapeString(search), "gu"), replace);
}
/**
 * Checks that string is single-line.
 *
 * @param str - String.
 * @returns _True_ if string is single-line, _false_ otherwise.
 */
export function singleLine(str) {
    return !str.includes("\n");
}
/**
 * Gets trailing spaces.
 *
 * @param str - String.
 * @returns String containing trailing spaces.
 */
export function trailingSpaces(str) {
    return str.slice(trimEnd(str).length);
}
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimEnd(str) {
    return str.replace(/(^|\S)\s+$/u, "$1");
}
/**
 * Trims leading empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimLeadingEmptyLines(str) {
    return a.last(lines(leadingSpaces(str))) + trimStart(str);
}
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimStart(str) {
    return str.replace(/^\s+/u, "");
}
/**
 * Trims trailing empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimTrailingEmptyLines(str) {
    return trimEnd(str) + a.first(lines(trailingSpaces(str)));
}
/**
 * Converts first letter to upper case.
 *
 * @param str - String.
 * @returns New string.
 */
export function ucFirst(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}
/**
 * Unpads multiline string.
 *
 * @param str - String.
 * @returns Unpadded string.
 */
export function unpadMultiline(str) {
    const matches = /^\s+/u.exec(str);
    return matches
        ? replaceAll(str.trim(), a.first(matches), detectEol(str))
        : str;
}
//# sourceMappingURL=string.js.map