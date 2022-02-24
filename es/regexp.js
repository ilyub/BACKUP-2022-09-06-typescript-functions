import * as a from "./array";
import * as assert from "./assertions";
import * as s from "./string";
/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
export function addFlags(re, flags) {
    flags = s.filter(flags, flag => !re.flags.includes(flag));
    // eslint-disable-next-line security/detect-non-literal-regexp
    return flags ? new RegExp(re, re.flags + flags) : re;
}
/**
 * Escapes regular expression special characters.
 *
 * @param str - String.
 * @returns Escaped string.
 */
export function escapeString(str) {
    return str.replace(/[$()*+.?[\\\]^{|}]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
/**
 * Finds all matches.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Matches.
 */
export function matchAll(str, re) {
    re = addFlags(re, "g");
    return a.fromIterable(function* () {
        let match = re.exec(str);
        while (match) {
            yield match;
            match = re.exec(str);
        }
    });
}
/**
 * Finds substring matching regular expression.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Substring if found, _undefined_ otherwise.
 */
export function slice(str, re) {
    const result = re.exec(str);
    return result ? result[0] : undefined;
}
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