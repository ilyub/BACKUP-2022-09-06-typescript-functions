"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slice = exports.matchAll = exports.escapeString = void 0;
const tslib_1 = require("tslib");
const a = (0, tslib_1.__importStar)(require("./array"));
const assert = (0, tslib_1.__importStar)(require("./assertions"));
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
    if (re.flags.includes("g")) {
        // Already has global flag
    }
    else
        re = new RegExp(re, `${re.flags}g`);
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