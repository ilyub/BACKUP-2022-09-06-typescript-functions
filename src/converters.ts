/* eslint-disable @skylib/functions/converters/prefer-number -- Ok */
/* eslint-disable @skylib/functions/converters/prefer-string -- Ok */

import * as is from "./guards";
import type {
  numberU as baseNumberU,
  stringU as baseStringU,
  empty
} from "./types";

export const not = {
  /**
   * Converts value to not empty.
   *
   * @param value - Value.
   * @param defVal - Default value.
   * @returns Value if it is not empty, defVal otherwise.
   */
  empty: <T>(value: T, defVal: Exclude<T, empty>) =>
    is.not.empty(value) ? value : defVal
} as const;

/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
export function number(value: unknown, defVal = 0): number {
  return numberU(value) ?? defVal;
}

/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
export function numberU(value: unknown): baseNumberU {
  switch (typeof value) {
    case "boolean":
      return Number(value);

    case "number":
      return value;

    case "string": {
      if (value === "" || value === "\n" || value === "\r\n") return undefined;

      const result = Number(value);

      return Number.isNaN(result) ? undefined : result;
    }

    default:
      return undefined;
  }
}

/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function string(value: unknown): string {
  return is.not.empty(value) ? String(value) : "";
}

/**
 * Converts value to type stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function stringU(value: unknown): baseStringU {
  const str = is.not.empty(value) ? String(value) : "";

  return str || undefined;
}
