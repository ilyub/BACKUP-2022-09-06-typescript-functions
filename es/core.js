/* disable @skylib/functions/no-restricted-syntax[prefer-cast-string] */
/**
 * Defines function with properties.
 *
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
export const defineFn = Object.assign;
/**
 * Creates validation object.
 *
 * @param source - Source.
 * @returns Validation object.
 */
export function createValidationObject(source) {
    if (Object.entries(source).every(([key, value]) => key === String(value)))
        return new Set(Object.values(source));
    throw new Error("Invalid source");
}
export function evaluate(mixed) {
    return typeof mixed === "function" ? mixed() : mixed;
}
/**
 * Marks value as readonly.
 *
 * @param value - Value.
 * @returns Value.
 */
export function freeze(value) {
    return value;
}
/**
 * Marks value as indexed.
 *
 * @param value - Value.
 * @returns Value.
 */
export function indexed(value) {
    return value;
}
/**
 * Defines function with overloads.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export function overload(callback) {
    return callback();
}
/**
 * Defines value type.
 *
 * @param value - Value.
 * @returns Value.
 */
export function typedef(value) {
    return value;
}
/**
 * Marks value as writable.
 *
 * @param value - Value.
 * @returns Value.
 */
export function unfreeze(value) {
    return value;
}
//# sourceMappingURL=core.js.map