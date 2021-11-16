"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[types.core] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidationObject = void 0;
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
//# sourceMappingURL=core.js.map