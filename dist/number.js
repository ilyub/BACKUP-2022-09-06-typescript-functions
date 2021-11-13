"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.average = exports.round = void 0;
const tslib_1 = require("tslib");
const assert = (0, tslib_1.__importStar)(require("./assertions"));
/**
 * Rounds number to a given precision.
 *
 * @param value - Value to be rounded.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
function round(value, precision) {
    const divider = 10 ** precision;
    return Math.round(value * divider) / divider;
}
exports.round = round;
/**
 * Averages values.
 *
 * @param values - Values.
 * @returns The average.
 */
function average(...values) {
    assert.toBeTrue(values.length > 0);
    return sum(...values) / values.length;
}
exports.average = average;
/**
 * Sums values.
 *
 * @param values - Values.
 * @returns The sum.
 */
function sum(...values) {
    return values.reduce((x, y) => x + y, 0);
}
exports.sum = sum;
//# sourceMappingURL=number.js.map