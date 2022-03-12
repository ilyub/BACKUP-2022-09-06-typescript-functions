"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slice = exports.matchAll = exports.escapeString = exports.addFlags = void 0;
const tslib_1 = require("tslib");
const a = tslib_1.__importStar(require("./array"));
const assert = tslib_1.__importStar(require("./assertions"));
const s = tslib_1.__importStar(require("./string"));
/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
function addFlags(re, flags) {
    flags = s.filter(flags, flag => !re.flags.includes(flag));
    // eslint-disable-next-line security/detect-non-literal-regexp
    return flags ? new RegExp(re, re.flags + flags) : re;
}
exports.addFlags = addFlags;
/**
 * Escapes regular expression special characters.
 *
 * @param str - String.
 * @returns Escaped string.
 */
function escapeString(str) {
    return str.replace(/[$()*+.?[\\\]^{|}]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
exports.escapeString = escapeString;
/**
 * Finds all matches.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Matches.
 */
function matchAll(str, re) {
    re = addFlags(re, "g");
    return a.fromIterable(function* () {
        let match = re.exec(str);
        while (match) {
            yield match;
            match = re.exec(str);
        }
    });
}
exports.matchAll = matchAll;
/**
 * Finds substring matching regular expression.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Substring if found, _undefined_ otherwise.
 */
function slice(str, re) {
    const result = re.exec(str);
    return result ? result[0] : undefined;
}
exports.slice = slice;
/**
 * Finds substring matching regular expression.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Substring if found.
 * @throws AssertionError otherwise.
 */
slice.orFail = (str, re) => {
    const result = re.exec(str);
    assert.not.empty(result);
    assert.not.empty(result[0]);
    return result[0];
};
//# sourceMappingURL=regexp.js.map