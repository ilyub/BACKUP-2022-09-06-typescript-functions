import type { numberU } from "./types/core";
/**
 * Removes interval.
 *
 * @param id - Id.
 */
export declare function _clearInterval(id: numberU): void;
export { _clearInterval as clearInterval };
/**
 * Removes timeout.
 *
 * @param id - Id.
 */
export declare function _clearTimeout(id: numberU): void;
export { _clearTimeout as clearTimeout };
/**
 * Adds interval.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
declare function _setInterval(callback: () => void, timeout: number): number;
export { _setInterval as setInterval };
/**
 * Adds timeout.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
export declare function _setTimeout(callback: () => void, timeout: number): number;
export { _setTimeout as setTimeout };
//# sourceMappingURL=programFlow.d.ts.map