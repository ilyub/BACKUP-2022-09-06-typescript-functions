"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.roundStep = exports.round = exports.rootMeanSquareDeviation = exports.limit = exports.floorStep = exports.floor = exports.ceilStep = exports.ceil = exports.average = void 0;
const tslib_1 = require("tslib");
const assert = tslib_1.__importStar(require("./assertions"));
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
 * Ceils number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Ceiled value.
 */
function ceil(value, precision) {
    const divider = 10 ** precision;
    return Math.ceil(value * divider) / divider;
}
exports.ceil = ceil;
/**
 * Ceils number.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Ceiled value.
 */
function ceilStep(value, step, from = 0) {
    return Math.ceil((value - from) / step) * step + from;
}
exports.ceilStep = ceilStep;
ceil.step = ceilStep;
/**
 * Floors number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Floored value.
 */
function floor(value, precision) {
    const divider = 10 ** precision;
    return Math.floor(value * divider) / divider;
}
exports.floor = floor;
/**
 * Floors number.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Floored value.
 */
function floorStep(value, step, from = 0) {
    return Math.floor((value - from) / step) * step + from;
}
exports.floorStep = floorStep;
floor.step = floorStep;
/**
 * Limits value to be within [min, max] range.
 *
 * @param value - Value.
 * @param min - Min.
 * @param max - Max.
 * @returns Limited value.
 */
function limit(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
exports.limit = limit;
/**
 * Calculates root-mean-square deviation.
 *
 * @param values - Values.
 * @returns Root-mean-square deviation.
 */
function rootMeanSquareDeviation(...values) {
    assert.toBeTrue(values.length > 0);
    const averageValue = average(...values);
    return Math.sqrt(sum(...values.map(value => (value - averageValue) ** 2)) / values.length);
}
exports.rootMeanSquareDeviation = rootMeanSquareDeviation;
/**
 * Rounds number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
function round(value, precision) {
    const divider = 10 ** precision;
    return Math.round(value * divider) / divider;
}
exports.round = round;
/**
 * Rounds number.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Rounded value.
 */
function roundStep(value, step, from = 0) {
    return Math.round((value - from) / step) * step + from;
}
exports.roundStep = roundStep;
round.step = roundStep;
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