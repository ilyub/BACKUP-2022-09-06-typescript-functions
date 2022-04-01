import * as is from "./guards";
import type { numberU } from "./types/core";

/**
 * Removes interval.
 *
 * @param id - Id.
 */
export function _clearInterval(id: numberU): void {
  if (is.not.empty(id)) clearInterval(id);
}

export { _clearInterval as clearInterval };

/**
 * Removes timeout.
 *
 * @param id - Id.
 */
export function _clearTimeout(id: numberU): void {
  if (is.not.empty(id)) clearTimeout(id);
}

export { _clearTimeout as clearTimeout };

/**
 * Adds interval.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
function _setInterval(callback: () => void, timeout: number): number {
  return setInterval(callback, timeout);
}

export { _setInterval as setInterval };

/**
 * Adds timeout.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
export function _setTimeout(callback: () => void, timeout: number): number {
  return setTimeout(callback, timeout);
}

export { _setTimeout as setTimeout };
