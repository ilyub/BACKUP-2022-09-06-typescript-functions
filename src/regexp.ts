import * as a from "./array";
import * as fn from "./function";
import * as s from "./string";

/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
export function addFlags(re: RegExp, flags: string): RegExp {
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
export function escapeString(str: string): string {
  return str.replace(/[$()*+.?[\\\]^{|}]/gu, "\\$&").replace(/-/gu, "\\x2d");
}

/**
 * Finds all matches.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Matches.
 */
export function matchAll(str: string, re: RegExp): RegExpExecArray[] {
  re = addFlags(re, "g");

  return a.fromIterable(
    fn.run(function* (): Generator<RegExpExecArray> {
      let match = re.exec(str);

      while (match) {
        yield match;
        match = re.exec(str);
      }
    })
  );
}
