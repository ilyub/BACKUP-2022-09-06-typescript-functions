import * as assert from "./assertions";
import * as o from "./object";
/**
 * Ceils number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Ceiled value.
 */
export const ceil = o.extend((value, precision) => {
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
export const floor = o.extend((value, precision) => {
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
export const round = o.extend((value, precision) => {
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
export function average(...values) {
    assert.toBeTrue(values.length > 0);
    return sum(...values) / values.length;
}
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
 * Calculates root-mean-square deviation.
 *
 * @param values - Values.
 * @returns Root-mean-square deviation.
 */
export function rootMeanSquareDeviation(...values) {
    const averageValue = average(...values);
    return Math.sqrt(sum(...values.map(value => (value - averageValue) ** 2)) / values.length);
}
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