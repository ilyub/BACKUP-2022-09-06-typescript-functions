/* skylib/eslint-plugin disable @skylib/disallow-identifier[timer] */

import * as is from "./guards";
import type { Interval, Timeout } from "./types/core";

/**
 * Adds interval.
 *
 * @param callback - Callback.
 * @param delay - Delay.
 * @returns Handler.
 */
export function addInterval(callback: () => void, delay: number): Interval {
  return setInterval(callback, delay);
}

/**
 * Removes interval.
 *
 * @param handler - Handler.
 */
export function removeInterval(handler: Interval | undefined): void {
  if (is.not.empty(handler)) clearInterval(handler);
}

/**
 * Adds timeout.
 *
 * @param callback - Callback.
 * @param delay - Delay.
 * @returns Handler.
 */
export function addTimeout(callback: () => void, delay: number): Timeout {
  return setTimeout(callback, delay);
}

/**
 * Removes timeout.
 *
 * @param handler - Handler.
 */
export function removeTimeout(handler: Timeout | undefined): void {
  if (is.not.empty(handler)) clearTimeout(handler);
}
