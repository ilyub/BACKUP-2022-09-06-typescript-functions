import * as _ from "@skylib/lodash-commonjs-es";
/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
export function addFlags(re, flags) {
    flags = _.uniq([...re.flags, ...flags]).join("");
    // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
    return flags === re.flags ? re : new RegExp(re, flags);
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
    const result = [];
    let match = re.exec(str);
    while (match) {
        result.push(match);
        match = re.exec(str);
    }
    return result;
}
//# sourceMappingURL=regexp.js.map