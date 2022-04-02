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
 * Checks that string consists of only spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of only spaces, _false_ otherwise.
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
 * Extracts leading spaces.
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
function _path() {
    throw new Error("Not implemented");
}
export { _path as path };
/**
 * Adds leading slash.
 *
 * @param path - Path.
 * @returns New string with leading slash added.
 */
_path.addLeadingSlash = (path) => `/${_path.removeLeadingSlash(path)}`;
/**
 * Adds trailing slash.
 *
 * @param path - Path.
 * @returns New string with trailing slash added.
 */
_path.addTrailingSlash = (path) => `${_path.removeTrailingSlash(path)}/`;
/**
 * Canonicalizes path.
 *
 * @param path - Path.
 * @returns Canonical path.
 */
_path.canonicalize = (path) => path.replace(/[/\\]+/gu, "/");
/**
 * Creates path from parts.
 *
 * @param parts - Parts.
 * @returns Path.
 */
_path.join = (...parts) => _path.canonicalize(parts.join("/"));
/**
 * Removes leading slash.
 *
 * @param path - Path.
 * @returns New string with leading slash removed.
 */
_path.removeLeadingSlash = (path) => _path.canonicalize(path).replace(/^\//u, "");
/**
 * Removes trailing slash.
 *
 * @param path - Path.
 * @returns New string with trailing slash removed.
 */
_path.removeTrailingSlash = (path) => _path.canonicalize(path).replace(/\/$/u, "");
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
 * Extracts trailing spaces.
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
    const matches = /^(?:\n|\r\n)\s+/u.exec(str);
    return matches
        ? replaceAll(str.trim(), a.first(matches), detectEol(str))
        : str;
}
//# sourceMappingURL=string.js.map