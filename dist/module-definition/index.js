"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.object] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.overloadedFn = exports.defineFn = void 0;
/**
 * Defines function with properties.
 *
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
exports.defineFn = Object.assign;
/**
 * Defines function with overloads.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
function overloadedFn(callback) {
    return callback();
}
exports.overloadedFn = overloadedFn;
//# sourceMappingURL=index.js.map