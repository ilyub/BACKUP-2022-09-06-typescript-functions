"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpadMultiline = exports.ucFirst = exports.trimTrailingEmptyLines = exports.trimStart = exports.trimLeadingEmptyLines = exports.trimEnd = exports.trailingSpaces = exports.singleLine = exports.replaceAll = exports.multiline = exports.lines = exports.leadingSpaces = exports.lcFirst = exports.escapeRegExpSpecialChars = exports.empty = exports.detectEol = exports.path = void 0;
const tslib_1 = require("tslib");
const core_1 = require("./core");
const as = tslib_1.__importStar(require("./inline-assertions"));
exports.path = (0, core_1.evaluate)(() => {
    return {
        addLeadingSlash,
        addTrailingSlash,
        canonicalize,
        join,
        removeLeadingSlash,
        removeTrailingSlash
    };
    /**
     * Adds leading slash.
     *
     * @param path - Path.
     * @returns New string with leading slash added.
     */
    // eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
    function addLeadingSlash(path) {
        return `/${removeLeadingSlash(path)}`;
    }
    /**
     * Adds trailing slash.
     *
     * @param path - Path.
     * @returns New string with trailing slash added.
     */
    // eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
    function addTrailingSlash(path) {
        return `${removeTrailingSlash(path)}/`;
    }
    /**
     * Canonicalizes path.
     *
     * @param path - Path.
     * @returns Canonical path.
     */
    // eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
    function canonicalize(path) {
        return path.replace(/[/\\]+/gu, "/");
    }
    /**
     * Creates path from parts.
     *
     * @param parts - Parts.
     * @returns Path.
     */
    function join(...parts) {
        return canonicalize(parts.join("/"));
    }
    /**
     * Removes leading slash.
     *
     * @param path - Path.
     * @returns New string with leading slash removed.
     */
    // eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
    function removeLeadingSlash(path) {
        return canonicalize(path).replace(/^\//u, "");
    }
    /**
     * Removes trailing slash.
     *
     * @param path - Path.
     * @returns New string with trailing slash removed.
     */
    // eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
    function removeTrailingSlash(path) {
        return canonicalize(path).replace(/\/$/u, "");
    }
});
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
 * Checks if string consists of spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of spaces, _false_ otherwise.
 */
function empty(str) {
    return /^\s*$/u.test(str);
}
exports.empty = empty;
/**
 * Escapes regular expression special characters.
 *
 * @param str - String.
 * @returns Escaped string.
 */
function escapeRegExpSpecialChars(str) {
    return str.replace(/[$()*+.?[\\\]^{|}]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
exports.escapeRegExpSpecialChars = escapeRegExpSpecialChars;
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
 * Checks if string is multiline.
 *
 * @param str - String.
 * @returns _True_ if string is multiline, _false_ otherwise.
 */
function multiline(str) {
    return str.includes("\n");
}
exports.multiline = multiline;
/**
 * Replaces all occurences of search term.
 *
 * @param str - String.
 * @param search - Search term.
 * @param replace - Replacement.
 * @returns New string with replacements done.
 */
function replaceAll(str, search, replace) {
    return str.replace(
    // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
    new RegExp(escapeRegExpSpecialChars(search), "gu"), replace);
}
exports.replaceAll = replaceAll;
/**
 * Checks if string is single-line.
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
    const leadingLines = lines(leadingSpaces(str));
    // eslint-disable-next-line unicorn/prefer-at -- Ok
    return as.not.empty(leadingLines[leadingLines.length - 1]) + trimStart(str);
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
    const trailingLines = lines(trailingSpaces(str));
    return trimEnd(str) + as.not.empty(trailingLines[0]);
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
        ? replaceAll(str.trim(), as.not.empty(matches[0]), detectEol(str))
        : str;
}
exports.unpadMultiline = unpadMultiline;
//# sourceMappingURL=string.js.map