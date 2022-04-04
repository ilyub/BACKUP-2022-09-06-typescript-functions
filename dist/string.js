"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpadMultiline = exports.ucFirst = exports.trimTrailingEmptyLines = exports.trimStart = exports.trimLeadingEmptyLines = exports.trimEnd = exports.trailingSpaces = exports.singleLine = exports.replaceAll = exports.path = exports.multiline = exports.lines = exports.lcFirst = exports.leadingSpaces = exports.filter = exports.empty = exports.detectEol = void 0;
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
 * Checks that string consists of only spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of only spaces, _false_ otherwise.
 */
function empty(str) {
    return /^\s*$/u.test(str);
}
exports.empty = empty;
/**
 * Filters string.
 *
 * @param str - String.
 * @param predicate - Predicate.
 * @returns Filtered string.
 */
function filter(str, predicate) {
    return a.fromString(str).filter(predicate).join("");
}
exports.filter = filter;
/**
 * Extracts leading spaces.
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
 * Checks that string is multiline.
 *
 * @param str - String.
 * @returns _True_ if string is multiline, _false_ otherwise.
 */
function multiline(str) {
    return str.includes("\n");
}
exports.multiline = multiline;
/**
 * Not implemented.
 */
function _path() {
    throw new Error("Not implemented");
}
exports.path = _path;
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
function replaceAll(str, search, replace) {
    // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
    return str.replace(new RegExp(regexp.escapeString(search), "gu"), replace);
}
exports.replaceAll = replaceAll;
/**
 * Checks that string is single-line.
 *
 * @param str - String.
 * @returns _True_ if string is single-line, _false_ otherwise.
 */
function singleLine(str) {
    return !str.includes("\n");
}
exports.singleLine = singleLine;
/**
 * Extracts trailing spaces.
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
    const matches = /^(?:\n|\r\n)\s+/u.exec(str);
    return matches
        ? replaceAll(str.trim(), a.first(matches), detectEol(str))
        : str;
}
exports.unpadMultiline = unpadMultiline;
//# sourceMappingURL=string.js.map