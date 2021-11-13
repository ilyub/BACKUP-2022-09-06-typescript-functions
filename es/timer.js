/* typerock/eslint-plugin disable @typerock/disallow-identifier[timer] */
import * as is from "./guards";
/**
 * Adds interval.
 *
 * @param callback - Callback.
 * @param delay - Delay.
 * @returns Handler.
 */
export function addInterval(callback, delay) {
    return setInterval(callback, delay);
}
/**
 * Removes interval.
 *
 * @param handler - Handler.
 */
export function removeInterval(handler) {
    if (is.not.empty(handler))
        clearInterval(handler);
}
/**
 * Adds timeout.
 *
 * @param callback - Callback.
 * @param delay - Delay.
 * @returns Handler.
 */
export function addTimeout(callback, delay) {
    return setTimeout(callback, delay);
}
/**
 * Removes timeout.
 *
 * @param handler - Handler.
 */
export function removeTimeout(handler) {
    if (is.not.empty(handler))
        clearTimeout(handler);
}
//# sourceMappingURL=timer.js.map