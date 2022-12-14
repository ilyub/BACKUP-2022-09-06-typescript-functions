"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTimeout = exports.setInterval = exports.clearTimeout = exports.clearInterval = void 0;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("./guards"));
/**
 * Clears interval.
 *
 * @param id - ID.
 */
function _clearInterval(id) {
    // eslint-disable-next-line @skylib/functions/program-flow/prefer-clearInterval -- Ok
    if (is.not.empty(id))
        clearInterval(id);
}
exports.clearInterval = _clearInterval;
/**
 * Clears timeout.
 *
 * @param id - ID.
 */
function _clearTimeout(id) {
    // eslint-disable-next-line @skylib/functions/program-flow/prefer-clearTimeout -- Ok
    if (is.not.empty(id))
        clearTimeout(id);
}
exports.clearTimeout = _clearTimeout;
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
exports.setInterval = _setInterval;
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
exports.setTimeout = _setTimeout;
//# sourceMappingURL=program-flow.js.map