import type { numberU } from "./types/core";
/**
 * Clears interval.
 *
 * @param id - ID.
 */
declare function _clearInterval(id: numberU): void;
export { _clearInterval as clearInterval };
/**
 * Clears timeout.
 *
 * @param id - ID.
 */
declare function _clearTimeout(id: numberU): void;
export { _clearTimeout as clearTimeout };
/**
 * Sets interval.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
declare function _setInterval(callback: () => void, timeout: number): number;
export { _setInterval as setInterval };
/**
 * Sets timeout.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
declare function _setTimeout(callback: () => void, timeout: number): number;
export { _setTimeout as setTimeout };
//# sourceMappingURL=programFlow.d.ts.map