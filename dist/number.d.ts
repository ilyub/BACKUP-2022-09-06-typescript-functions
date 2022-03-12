/**
 * Averages values.
 *
 * @param values - Values.
 * @returns The average.
 */
export declare function average(...values: number[]): number;
/**
 * Ceils number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Ceiled value.
 */
export declare function ceil(value: number, precision: number): number;
export declare namespace ceil {
    var step: typeof ceilStep;
}
/**
 * Ceils number.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Ceiled value.
 */
export declare function ceilStep(value: number, step: number, from?: number): number;
/**
 * Floors number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Floored value.
 */
export declare function floor(value: number, precision: number): number;
export declare namespace floor {
    var step: typeof floorStep;
}
/**
 * Floors number.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Floored value.
 */
export declare function floorStep(value: number, step: number, from?: number): number;
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
 * Rounds number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
export declare function round(value: number, precision: number): number;
export declare namespace round {
    var step: typeof roundStep;
}
/**
 * Rounds number.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Rounded value.
 */
export declare function roundStep(value: number, step: number, from?: number): number;
/**
 * Sums values.
 *
 * @param values - Values.
 * @returns The sum.
 */
export declare function sum(...values: number[]): number;
//# sourceMappingURL=number.d.ts.map