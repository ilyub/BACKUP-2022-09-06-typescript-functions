import * as assert from "./assertions";

/**
 * Averages values.
 *
 * @param values - Values.
 * @returns The average.
 */
export function average(...values: number[]): number {
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
export function ceil(value: number, precision: number): number {
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
ceil.step = (value: number, step: number, from = 0): number =>
  Math.ceil((value - from) / step) * step + from;

/**
 * Floors number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Floored value.
 */
export function floor(value: number, precision: number): number {
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
floor.step = (value: number, step: number, from = 0): number =>
  Math.floor((value - from) / step) * step + from;

/**
 * Limits value to be within [min, max] range.
 *
 * @param value - Value.
 * @param min - Min.
 * @param max - Max.
 * @returns Limited value.
 */
export function limit(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Calculates root-mean-square deviation.
 *
 * @param values - Values.
 * @returns Root-mean-square deviation.
 */
export function rootMeanSquareDeviation(...values: number[]): number {
  const averageValue = average(...values);

  return Math.sqrt(
    sum(...values.map(value => (value - averageValue) ** 2)) / values.length
  );
}

/**
 * Rounds number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
export function round(value: number, precision: number): number {
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
round.step = (value: number, step: number, from = 0): number =>
  Math.round((value - from) / step) * step + from;

/**
 * Sums values.
 *
 * @param values - Values.
 * @returns The sum.
 */
export function sum(...values: number[]): number {
  return values.reduce((x, y) => x + y, 0);
}
