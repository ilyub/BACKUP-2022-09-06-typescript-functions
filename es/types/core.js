/* typerock/eslint-plugin disable @typerock/disallow-by-regexp[types.core] */
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
//# sourceMappingURL=core.js.map