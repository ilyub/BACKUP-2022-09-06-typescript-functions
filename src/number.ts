import * as assert from "./assertions";

/**
 * Rounds number to a given precision.
 *
 * @param value - Value to be rounded.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
export function round(value: number, precision: number): number {
  const divider = 10 ** precision;

  return Math.round(value * divider) / divider;
}

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
 * Sums values.
 *
 * @param values - Values.
 * @returns The sum.
 */
export function sum(...values: number[]): number {
  return values.reduce((x, y) => x + y, 0);
}
