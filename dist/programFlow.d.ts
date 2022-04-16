import type { numberU } from "./types";
export { _clearInterval as clearInterval };
export { _clearTimeout as clearTimeout };
export { _setInterval as setInterval };
export { _setTimeout as setTimeout };
/**
 * Clears interval.
 *
 * @param id - ID.
 */
declare function _clearInterval(id: numberU): void;
/**
 * Clears timeout.
 *
 * @param id - ID.
 */
declare function _clearTimeout(id: numberU): void;
/**
 * Sets interval.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
declare function _setInterval(callback: () => void, timeout: number): number;
/**
 * Sets timeout.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
declare function _setTimeout(callback: () => void, timeout: number): number;
//# sourceMappingURL=programFlow.d.ts.map