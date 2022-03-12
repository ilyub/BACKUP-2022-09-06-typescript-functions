import * as assert from "./assertions";
/**
 * Averages values.
 *
 * @param values - Values.
 * @returns The average.
 */
export function average(...values) {
    assert.toBeTrue(values.length > 0);
    return sum(...values) / values.length;
}
/**
 * Ceils number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Ceiled value.
 */
export function ceil(value, precision) {
    const divider = 10 ** precision;
    return Math.ceil(value * divider) / divider;
}
/**
 * Ceils number.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Ceiled value.
 */
export function ceilStep(value, step, from = 0) {
    return Math.ceil((value - from) / step) * step + from;
}
ceil.step = ceilStep;
/**
 * Floors number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Floored value.
 */
export function floor(value, precision) {
    const divider = 10 ** precision;
    return Math.floor(value * divider) / divider;
}
/**
 * Floors number.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Floored value.
 */
export function floorStep(value, step, from = 0) {
    return Math.floor((value - from) / step) * step + from;
}
floor.step = floorStep;
/**
 * Limits value to be within [min, max] range.
 *
 * @param value - Value.
 * @param min - Min.
 * @param max - Max.
 * @returns Limited value.
 */
export function limit(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Rounds number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
export function round(value, precision) {
    const divider = 10 ** precision;
    return Math.round(value * divider) / divider;
}
/**
 * Rounds number.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Rounded value.
 */
export function roundStep(value, step, from = 0) {
    return Math.round((value - from) / step) * step + from;
}
round.step = roundStep;
/**
 * Sums values.
 *
 * @param values - Values.
 * @returns The sum.
 */
export function sum(...values) {
    return values.reduce((x, y) => x + y, 0);
}
//# sourceMappingURL=number.js.map