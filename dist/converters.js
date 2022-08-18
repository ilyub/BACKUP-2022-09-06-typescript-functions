"use strict";
/* eslint-disable @skylib/functions/converters/prefer-number -- Ok */
/* eslint-disable @skylib/functions/converters/prefer-string -- Ok */
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringU = exports.string = exports.numberU = exports.number = exports.not = void 0;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("./guards"));
exports.not = {
    /**
     * Converts value to not empty.
     *
     * @param value - Value.
     * @param defVal - Default value.
     * @returns Value if it is not empty, defVal otherwise.
     */
    empty: (value, defVal) => is.not.empty(value) ? value : defVal
};
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
function number(value, defVal = 0) {
    var _a;
    return (_a = numberU(value)) !== null && _a !== void 0 ? _a : defVal;
}
exports.number = number;
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
function numberU(value) {
    switch (typeof value) {
        case "boolean":
            return Number(value);
        case "number":
            return value;
        case "string": {
            if (value === "" || value === "\n" || value === "\r\n")
                return undefined;
            const result = Number(value);
            return Number.isNaN(result) ? undefined : result;
        }
        default:
            return undefined;
    }
}
exports.numberU = numberU;
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 */
function string(value) {
    return is.not.empty(value) ? String(value) : "";
}
exports.string = string;
/**
 * Converts value to type stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
function stringU(value) {
    const str = is.not.empty(value) ? String(value) : "";
    return str || undefined;
}
exports.stringU = stringU;
//# sourceMappingURL=converters.js.map