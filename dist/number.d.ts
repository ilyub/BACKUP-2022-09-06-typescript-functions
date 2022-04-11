/**
 * Ceils number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Ceiled value.
 */
export declare const ceil: {
    /**
     * Ceils number.
     *
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Ceiled value.
     */
    step(value: number, step: number, from?: number): number;
} & ((value: number, precision: number) => number);
/**
 * Floors number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Floored value.
 */
export declare const floor: {
    /**
     * Floors number.
     *
     * @param this - No this.
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Floored value.
     */
    step(this: void, value: number, step: number, from?: number): number;
} & ((value: number, precision: number) => number);
/**
 * Rounds number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
export declare const round: {
    /**
     * Rounds number.
     *
     * @param this - No this.
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Rounded value.
     */
    step(this: void, value: number, step: number, from?: number): number;
} & ((value: number, precision: number) => number);
/**
 * Averages values.
 *
 * @param values - Values.
 * @returns The average.
 */
export declare function average(...values: number[]): number;
/**
 * Limits value to be within [min, max] range.
 *
 * @param value - Value.
 * @param min - Min.
 * @param max - Max.
 * @returns Limited value.
 */
export declare function limit(value: number, min: number, max: number): number;
/**
 * Calculates root-mean-square deviation.
 *
 * @param values - Values.
 * @returns Root-mean-square deviation.
 */
export declare function rootMeanSquareDeviation(...values: number[]): number;
/**
 * Sums values.
 *
 * @param values - Values.
 * @returns The sum.
 */
export declare function sum(...values: number[]): number;
//# sourceMappingURL=number.d.ts.map