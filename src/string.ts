import * as a from "./array";
import { defineFn } from "./core";
import * as regexp from "./regexp";
import type { strings } from "./types/core";

export { _path as path };

export type Eol = "\n" | "\r\n";

/**
 * Detects EOL sequence.
 *
 * @param str - String.
 * @returns EOL sequence.
 */
export function detectEol(str: string): Eol {
  return str.includes("\r\n") ? "\r\n" : "\n";
}

/**
 * Checks that string consists of only spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of only spaces, _false_ otherwise.
 */
export function empty(str: string): boolean {
  return /^\s*$/u.test(str);
}

/**
 * Filters string.
 *
 * @param str - String.
 * @param predicate - Predicate.
 * @returns Filtered string.
 */
export function filter(
  str: string,
  predicate: (char: string, index: number) => boolean
): string {
  return a.fromString(str).filter(predicate).join("");
}

/**
 * Converts first letter to lower case.
 *
 * @param str - String.
 * @returns Converted string.
 */
export function lcFirst(str: string): string {
  return str ? str.charAt(0).toLowerCase() + str.slice(1) : str;
}

/**
 * Extracts leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
export function leadingSpaces(str: string): string {
  return str.slice(0, str.length - trimStart(str).length);
}

/**
 * Splits string into lines.
 *
 * @param str - String.
 * @returns Array of strings.
 */
export function lines(str: string): strings {
  return str.split(/\r\n|\n/u);
}

/**
 * Checks that string is multiline.
 *
 * @param str - String.
 * @returns _True_ if string is multiline, _false_ otherwise.
 */
export function multiline(str: string): boolean {
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
export function replaceAll(
  str: string,
  search: string,
  replace: string
): string {
  // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
  return str.replace(new RegExp(regexp.escapeString(search), "gu"), replace);
}

/**
 * Checks that string is single-line.
 *
 * @param str - String.
 * @returns _True_ if string is single-line, _false_ otherwise.
 */
export function singleLine(str: string): boolean {
  return !str.includes("\n");
}

/**
 * Extracts trailing spaces.
 *
 * @param str - String.
 * @returns String containing trailing spaces.
 */
export function trailingSpaces(str: string): string {
  return str.slice(trimEnd(str).length);
}

/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimEnd(str: string): string {
  return str.replace(/(^|\S)\s+$/u, "$1");
}

/**
 * Trims leading empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimLeadingEmptyLines(str: string): string {
  return a.last(lines(leadingSpaces(str))) + trimStart(str);
}

/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimStart(str: string): string {
  return str.replace(/^\s+/u, "");
}

/**
 * Trims trailing empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimTrailingEmptyLines(str: string): string {
  return trimEnd(str) + a.first(lines(trailingSpaces(str)));
}

/**
 * Converts first letter to upper case.
 *
 * @param str - String.
 * @returns New string.
 */
export function ucFirst(str: string): string {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}

/**
 * Unpads multiline string.
 *
 * @param str - String.
 * @returns Unpadded string.
 */
export function unpadMultiline(str: string): string {
  const matches = /^(?:\n|\r\n)\s+/u.exec(str);

  return matches
    ? replaceAll(str.trim(), a.first(matches), detectEol(str))
    : str;
}

/**
 * Not implemented.
 */
const _path = defineFn(
  (): never => {
    throw new Error("Not implemented");
  },
  {
    /**
     * Adds leading slash.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns New string with leading slash added.
     */
    addLeadingSlash(this: void, path: string): string {
      return `/${_path.removeLeadingSlash(path)}`;
    },
    /**
     * Adds trailing slash.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns New string with trailing slash added.
     */
    addTrailingSlash(this: void, path: string): string {
      return `${_path.removeTrailingSlash(path)}/`;
    },
    /**
     * Canonicalizes path.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns Canonical path.
     */
    canonicalize(this: void, path: string): string {
      return path.replace(/[/\\]+/gu, "/");
    },
    /**
     * Creates path from parts.
     *
     * @param parts - Parts.
     * @returns Path.
     */
    join(...parts: strings): string {
      return _path.canonicalize(parts.join("/"));
    },
    /**
     * Removes leading slash.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns New string with leading slash removed.
     */
    removeLeadingSlash(this: void, path: string): string {
      return _path.canonicalize(path).replace(/^\//u, "");
    },
    /**
     * Removes trailing slash.
     *
     * @param this - No this.
     * @param path - Path.
     * @returns New string with trailing slash removed.
     */
    removeTrailingSlash(this: void, path: string): string {
      return _path.canonicalize(path).replace(/\/$/u, "");
    }
  }
);
