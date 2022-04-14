/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.object] */

/**
 * Defines function with properties.
 *
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
export const defineFn: <F, P>(fn: F, props: P) => F & P = Object.assign;

/**
 * Defines function with overloads.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export function overloadedFn<T>(callback: () => T): T {
  return callback();
}
