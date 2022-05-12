import type { numbers } from "./types";
export declare const ceil: ((value: number, precision: number) => number) & {
    /**
     * Ceils number.
     *
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Ceiled value.
     */
    step(value: number, step: number, from?: number): number;
};
export declare const floor: ((value: number, precision: number) => number) & {
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
};
export declare const round: ((value: number, precision: number) => number) & {
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
};
/**
 * Averages values.
 *
 * @param values - Values.
 * @returns The average.
 */
export declare function average(...values: numbers): number;
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
export declare function rootMeanSquareDeviation(...values: numbers): number;
/**
 * Sums values.
 *
 * @param values - Values.
 * @returns The sum.
 */
export declare function sum(...values: numbers): number;
//# sourceMappingURL=number.d.ts.map