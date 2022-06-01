import * as _ from "@skylib/lodash-commonjs-es";
import type { Writable } from "./types";

export type RegExpExecArrays = readonly RegExpExecArray[];

/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
export function addFlags(re: RegExp, flags: string): RegExp {
  // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
  return flags ? new RegExp(re, _.uniq([...re.flags, ...flags]).join("")) : re;
}

/**
 * Finds all matches.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Matches.
 */
export function matchAll(str: string, re: RegExp): RegExpExecArrays {
  re = addFlags(re, "g");

  const result: Writable<RegExpExecArrays> = [];

  let match = re.exec(str);

  while (match) {
    result.push(match);
    match = re.exec(str);
  }

  return result;
}
