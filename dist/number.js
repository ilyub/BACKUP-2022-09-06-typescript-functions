"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.rootMeanSquareDeviation = exports.limit = exports.average = exports.round = exports.floor = exports.ceil = void 0;
const tslib_1 = require("tslib");
const assert = tslib_1.__importStar(require("./assertions"));
const o = tslib_1.__importStar(require("./object"));
/**
 * Ceils number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Ceiled value.
 */
exports.ceil = o.extend((value, precision) => {
    const divider = 10 ** precision;
    return Math.ceil(value * divider) / divider;
}, {
    /**
     * Ceils number.
     *
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Ceiled value.
     */
    step(value, step, from = 0) {
        return Math.ceil((value - from) / step) * step + from;
    }
});
/**
 * Floors number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Floored value.
 */
exports.floor = o.extend((value, precision) => {
    const divider = 10 ** precision;
    return Math.floor(value * divider) / divider;
}, {
    /**
     * Floors number.
     *
     * @param this - No this.
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Floored value.
     */
    step(value, step, from = 0) {
        return Math.floor((value - from) / step) * step + from;
    }
});
/**
 * Rounds number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
exports.round = o.extend((value, precision) => {
    const divider = 10 ** precision;
    return Math.round(value * divider) / divider;
}, {
    /**
     * Rounds number.
     *
     * @param this - No this.
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Rounded value.
     */
    step(value, step, from = 0) {
        return Math.round((value - from) / step) * step + from;
    }
});
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
    const averageValue = average(...values);
    return Math.sqrt(sum(...values.map(value => (value - averageValue) ** 2)) / values.length);
}
exports.rootMeanSquareDeviation = rootMeanSquareDeviation;
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