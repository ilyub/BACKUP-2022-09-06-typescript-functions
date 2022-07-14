import * as is from "./guards";
export { _clearInterval as clearInterval };
export { _clearTimeout as clearTimeout };
export { _setInterval as setInterval };
export { _setTimeout as setTimeout };
/**
 * Clears interval.
 *
 * @param id - ID.
 */
function _clearInterval(id) {
    // eslint-disable-next-line @skylib/custom/functions/prefer-programFlow-clearInterval -- Ok
    if (is.not.empty(id))
        clearInterval(id);
}
/**
 * Clears timeout.
 *
 * @param id - ID.
 */
function _clearTimeout(id) {
    // eslint-disable-next-line @skylib/custom/functions/prefer-programFlow-clearTimeout -- Ok
    if (is.not.empty(id))
        clearTimeout(id);
}
/**
 * Sets interval.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
function _setInterval(callback, timeout) {
    return setInterval(callback, timeout);
}
/**
 * Sets timeout.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
function _setTimeout(callback, timeout) {
    return setTimeout(callback, timeout);
}
//# sourceMappingURL=program-flow.js.map