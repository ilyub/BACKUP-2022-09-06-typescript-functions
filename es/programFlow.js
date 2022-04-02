/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.programFlow] */
import * as is from "./guards";
/**
 * Removes interval.
 *
 * @param id - Id.
 */
export function _clearInterval(id) {
    if (is.not.empty(id))
        clearInterval(id);
}
export { _clearInterval as clearInterval };
/**
 * Removes timeout.
 *
 * @param id - Id.
 */
export function _clearTimeout(id) {
    if (is.not.empty(id))
        clearTimeout(id);
}
export { _clearTimeout as clearTimeout };
/**
 * Adds interval.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
function _setInterval(callback, timeout) {
    return setInterval(callback, timeout);
}
export { _setInterval as setInterval };
/**
 * Adds timeout.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
export function _setTimeout(callback, timeout) {
    return setTimeout(callback, timeout);
}
export { _setTimeout as setTimeout };
//# sourceMappingURL=programFlow.js.map