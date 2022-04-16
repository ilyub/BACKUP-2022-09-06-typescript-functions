/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.object] */
/**
 * Defines function with properties.
 *
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
export const defineFn = Object.assign;
/**
 * Defines function with overloads.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export function overloadedFn(callback) {
    return callback();
}
//# sourceMappingURL=index.js.map