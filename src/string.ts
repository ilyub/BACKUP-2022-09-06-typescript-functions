import * as a from "./array";
import * as regexp from "./regexp";

export type Eol = "\r\n" | "\n";

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
 * Checks that string consists of spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of spaces, _false_ otherwise.
 */
export function empty(str: string): boolean {
  return /^\s*$/u.test(str);
}

/**
 * Gets leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
export function leadingSpaces(str: string): string {
  return str.slice(0, str.length - trimStart(str).length);
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
 * Splits string into lines.
 *
 * @param str - String.
 * @returns Array of strings.
 */
export function lines(str: string): string[] {
  return str.split(/\r\n|\n/u);
}

/**
 * Not implemented.
 */
function pathUtils(): never {
  throw new Error("Not implemented");
}

export { pathUtils as path };

/**
 * Adds leading slash.
 *
 * @param path - Path.
 * @returns New string with leading slash added.
 */
pathUtils.addLeadingSlash = (path: string): string =>
  `/${path.replace(/^[/\\]/u, "")}`;

/**
 * Adds trailing slash.
 *
 * @param path - Path.
 * @returns New string with trailing slash added.
 */
pathUtils.addTrailingSlash = (path: string): string =>
  `${path.replace(/[/\\]$/u, "")}/`;

/**
 * Canonicalizes path.
 *
 * @param path - Path.
 * @returns Canonical path.
 */
pathUtils.canonicalize = (path: string): string =>
  path.replace(/[/\\]+/gu, "/");

/**
 * Creates path from parts.
 *
 * @param parts - Parts.
 * @returns Path.
 */
pathUtils.join = (...parts: string[]): string =>
  pathUtils.canonicalize(parts.join("/"));

/**
 * Removes leading slash.
 *
 * @param path - Path.
 * @returns New string with leading slash removed.
 */
pathUtils.removeLeadingSlash = (path: string): string =>
  path.replace(/^[/\\]/u, "");

/**
 * Removes trailing slash.
 *
 * @param path - Path.
 * @returns New string with trailing slash removed.
 */
pathUtils.removeTrailingSlash = (path: string): string =>
  path.replace(/[/\\]$/u, "");

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
  return str.replace(new RegExp(regexp.escapeString(search), "gu"), replace);
}

/**
 * Gets trailing spaces.
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
  return str.replace(/(?<!\s)\s+$/u, "");
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
  const matches = /^\s+/u.exec(str);

  return matches
    ? replaceAll(str.trim(), a.first(matches), detectEol(str))
    : str;
}
