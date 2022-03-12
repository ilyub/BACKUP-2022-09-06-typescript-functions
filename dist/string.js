"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpadMultiline = exports.ucFirst = exports.trimTrailingEmptyLines = exports.trimStart = exports.trimLeadingEmptyLines = exports.trimEnd = exports.trailingSpaces = exports.replaceAll = exports.path = exports.lines = exports.lcFirst = exports.leadingSpaces = exports.filter = exports.empty = exports.detectEol = void 0;
const tslib_1 = require("tslib");
const a = tslib_1.__importStar(require("./array"));
const regexp = tslib_1.__importStar(require("./regexp"));
/**
 * Detects EOL sequence.
 *
 * @param str - String.
 * @returns EOL sequence.
 */
function detectEol(str) {
    return str.includes("\r\n") ? "\r\n" : "\n";
}
exports.detectEol = detectEol;
/**
 * Checks that string consists of spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of spaces, _false_ otherwise.
 */
function empty(str) {
    return /^\s*$/u.test(str);
}
exports.empty = empty;
/**
 * Filters string.
 *
 * @param str - String.
 * @param predicate - Filter function.
 * @returns Filtered string.
 */
function filter(str, predicate) {
    return a.fromString(str).filter(predicate).join("");
}
exports.filter = filter;
/**
 * Gets leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
function leadingSpaces(str) {
    return str.slice(0, str.length - trimStart(str).length);
}
exports.leadingSpaces = leadingSpaces;
/**
 * Converts first letter to lower case.
 *
 * @param str - String.
 * @returns Converted string.
 */
function lcFirst(str) {
    return str ? str.charAt(0).toLowerCase() + str.slice(1) : str;
}
exports.lcFirst = lcFirst;
/**
 * Splits string into lines.
 *
 * @param str - String.
 * @returns Array of strings.
 */
function lines(str) {
    return str.split(/\r\n|\n/u);
}
exports.lines = lines;
/**
 * Not implemented.
 */
function pathUtils() {
    throw new Error("Not implemented");
}
exports.path = pathUtils;
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
function replaceAll(str, search, replace) {
    // eslint-disable-next-line security/detect-non-literal-regexp
    return str.replace(new RegExp(regexp.escapeString(search), "gu"), replace);
}
exports.replaceAll = replaceAll;
/**
 * Gets trailing spaces.
 *
 * @param str - String.
 * @returns String containing trailing spaces.
 */
function trailingSpaces(str) {
    return str.slice(trimEnd(str).length);
}
exports.trailingSpaces = trailingSpaces;
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
function trimEnd(str) {
    return str.replace(/(^|\S)\s+$/u, "$1");
}
exports.trimEnd = trimEnd;
/**
 * Trims leading empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
function trimLeadingEmptyLines(str) {
    return a.last(lines(leadingSpaces(str))) + trimStart(str);
}
exports.trimLeadingEmptyLines = trimLeadingEmptyLines;
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
function trimStart(str) {
    return str.replace(/^\s+/u, "");
}
exports.trimStart = trimStart;
/**
 * Trims trailing empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
function trimTrailingEmptyLines(str) {
    return trimEnd(str) + a.first(lines(trailingSpaces(str)));
}
exports.trimTrailingEmptyLines = trimTrailingEmptyLines;
/**
 * Converts first letter to upper case.
 *
 * @param str - String.
 * @returns New string.
 */
function ucFirst(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}
exports.ucFirst = ucFirst;
/**
 * Unpads multiline string.
 *
 * @param str - String.
 * @returns Unpadded string.
 */
function unpadMultiline(str) {
    const matches = /^\s+/u.exec(str);
    return matches
        ? replaceAll(str.trim(), a.first(matches), detectEol(str))
        : str;
}
exports.unpadMultiline = unpadMultiline;
//# sourceMappingURL=string.js.map