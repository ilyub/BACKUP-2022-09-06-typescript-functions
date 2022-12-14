import * as is from "./guards";
import type { numberU } from "./types";

export { _clearInterval as clearInterval };

export { _clearTimeout as clearTimeout };

export { _setInterval as setInterval };

export { _setTimeout as setTimeout };

/**
 * Clears interval.
 *
 * @param id - ID.
 */
function _clearInterval(id: numberU): void {
  // eslint-disable-next-line @skylib/functions/program-flow/prefer-clearInterval -- Ok
  if (is.not.empty(id)) clearInterval(id);
}

/**
 * Clears timeout.
 *
 * @param id - ID.
 */
function _clearTimeout(id: numberU): void {
  // eslint-disable-next-line @skylib/functions/program-flow/prefer-clearTimeout -- Ok
  if (is.not.empty(id)) clearTimeout(id);
}

/**
 * Sets interval.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
function _setInterval(callback: () => void, timeout: number): number {
  return (setInterval as unknown as typeof window.setTimeout)(
    callback,
    timeout
  );
}

/**
 * Sets timeout.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
function _setTimeout(callback: () => void, timeout: number): number {
  return (setTimeout as unknown as typeof window.setTimeout)(callback, timeout);
}
