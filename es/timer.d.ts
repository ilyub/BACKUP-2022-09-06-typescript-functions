import type { Interval, Timeout } from "./types/core";
/**
 * Adds interval.
 *
 * @param callback - Callback.
 * @param delay - Delay.
 * @returns Handler.
 */
export declare function addInterval(callback: () => void, delay: number): Interval;
/**
 * Removes interval.
 *
 * @param handler - Handler.
 */
export declare function removeInterval(handler: Interval | undefined): void;
/**
 * Adds timeout.
 *
 * @param callback - Callback.
 * @param delay - Delay.
 * @returns Handler.
 */
export declare function addTimeout(callback: () => void, delay: number): Timeout;
/**
 * Removes timeout.
 *
 * @param handler - Handler.
 */
export declare function removeTimeout(handler: Timeout | undefined): void;
//# sourceMappingURL=timer.d.ts.map