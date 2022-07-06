import * as as from "./inline-assertions";
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
 * Checks if string consists of spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of spaces, _false_ otherwise.
 */
export function empty(str) {
    return /^\s*$/u.test(str);
}
/**
 * Escapes regular expression special characters.
 *
 * @param str - String.
 * @returns Escaped string.
 */
export function escapeRegExpSpecialChars(str) {
    return str.replace(/[$()*+.?[\\\]^{|}]/gu, "\\$&").replace(/-/gu, "\\x2d");
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
 * Extracts leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
export function leadingSpaces(str) {
    return str.slice(0, str.length - trimStart(str).length);
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
 * Checks if string is multiline.
 *
 * @param str - String.
 * @returns _True_ if string is multiline, _false_ otherwise.
 */
export function multiline(str) {
    return str.includes("\n");
}
/**
 * Replaces all occurences of search term.
 *
 * @param str - String.
 * @param search - Search term.
 * @param replace - Replacement.
 * @returns New string with replacements done.
 */
export function replaceAll(str, search, replace) {
    return str.replace(
    // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
    new RegExp(escapeRegExpSpecialChars(search), "gu"), replace);
}
/**
 * Checks if string is single-line.
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
    const leadingLines = lines(leadingSpaces(str));
    return as.not.empty(leadingLines[leadingLines.length - 1]) + trimStart(str);
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
    const trailingLines = lines(trailingSpaces(str));
    return trimEnd(str) + as.not.empty(trailingLines[0]);
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
        ? replaceAll(str.trim(), as.not.empty(matches[0]), detectEol(str))
        : str;
}
export var path;
(function (path_1) {
    /**
     * Adds leading slash.
     *
     * @param path - Path.
     * @returns New string with leading slash added.
     */
    function addLeadingSlash(path) {
        return `/${removeLeadingSlash(path)}`;
    }
    path_1.addLeadingSlash = addLeadingSlash;
    /**
     * Adds trailing slash.
     *
     * @param path - Path.
     * @returns New string with trailing slash added.
     */
    function addTrailingSlash(path) {
        return `${removeTrailingSlash(path)}/`;
    }
    path_1.addTrailingSlash = addTrailingSlash;
    /**
     * Canonicalizes path.
     *
     * @param path - Path.
     * @returns Canonical path.
     */
    function canonicalize(path) {
        return path.replace(/[/\\]+/gu, "/");
    }
    path_1.canonicalize = canonicalize;
    /**
     * Creates path from parts.
     *
     * @param parts - Parts.
     * @returns Path.
     */
    function join(...parts) {
        return canonicalize(parts.join("/"));
    }
    path_1.join = join;
    /**
     * Removes leading slash.
     *
     * @param path - Path.
     * @returns New string with leading slash removed.
     */
    function removeLeadingSlash(path) {
        return canonicalize(path).replace(/^\//u, "");
    }
    path_1.removeLeadingSlash = removeLeadingSlash;
    /**
     * Removes trailing slash.
     *
     * @param path - Path.
     * @returns New string with trailing slash removed.
     */
    function removeTrailingSlash(path) {
        return canonicalize(path).replace(/\/$/u, "");
    }
    path_1.removeTrailingSlash = removeTrailingSlash;
})(path || (path = {}));
//# sourceMappingURL=string.js.map