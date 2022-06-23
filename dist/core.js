"use strict";
/* skylib/eslint-plugin disable @skylib/functions/no-restricted-syntax[prefer-cast-string] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedef = exports.overload = exports.evaluate = exports.createValidationObject = exports.defineFn = void 0;
/**
 * Defines function with properties.
 *
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
exports.defineFn = Object.assign;
/**
 * Creates validation object.
 *
 * @param source - Source.
 * @returns Validation object.
 */
function createValidationObject(source) {
    if (Object.entries(source).every(([key, value]) => key === String(value)))
        return new Set(Object.values(source));
    throw new Error("Invalid source");
}
exports.createValidationObject = createValidationObject;
function evaluate(mixed) {
    return typeof mixed === "function" ? mixed() : mixed;
}
exports.evaluate = evaluate;
/**
 * Defines function with overloads.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
function overload(callback) {
    return callback();
}
exports.overload = overload;
/**
 * Defines value type.
 *
 * @param value - Value.
 * @returns Value.
 */
function typedef(value) {
    return value;
}
exports.typedef = typedef;
//# sourceMappingURL=core.js.map