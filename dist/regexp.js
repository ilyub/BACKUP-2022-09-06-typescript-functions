"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchAll = exports.addFlags = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("@skylib/lodash-commonjs-es"));
/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
function addFlags(re, flags) {
    flags = _.uniq([...re.flags, ...flags]).join("");
    // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
    return flags === re.flags ? re : new RegExp(re, flags);
}
exports.addFlags = addFlags;
/**
 * Finds all matches.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Matches.
 */
function matchAll(str, re) {
    re = addFlags(re, "g");
    const result = [];
    let match = re.exec(str);
    while (match) {
        result.push(match);
        match = re.exec(str);
    }
    return result;
}
exports.matchAll = matchAll;
//# sourceMappingURL=regexp.js.map