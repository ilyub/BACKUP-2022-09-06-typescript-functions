/* skylib/eslint-plugin disable @skylib/disallow-identifier[json] */

import * as is from "./guards";
import type { stringE } from "./types/core";

/**
 * Decodes JSON string.
 *
 * @param source - JSON string.
 * @returns Decoded value.
 */
export function decode(source: stringE): unknown {
  try {
    if (is.not.empty(source)) return JSON.parse(source);
  } catch {
    //
  }

  // eslint-disable-next-line unicorn/no-null
  return null;
}

/**
 * Encodes to JSON string.
 *
 * @param source - Value to encode.
 * @returns JSON string.
 */
export function encode(source: unknown): string {
  return JSON.stringify(source, replacer);
}

/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/

/**
 * JSON replacer. Replaces _undefined_ with _null_.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function replacer(_key: unknown, value: unknown): unknown {
  // eslint-disable-next-line unicorn/no-null
  return is.not.empty(value) ? value : null;
}
