"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.programFlow] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTimeout = exports._setTimeout = exports.setInterval = exports.clearTimeout = exports._clearTimeout = exports.clearInterval = exports._clearInterval = void 0;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("./guards"));
/**
 * Removes interval.
 *
 * @param id - Id.
 */
function _clearInterval(id) {
    if (is.not.empty(id))
        clearInterval(id);
}
exports._clearInterval = _clearInterval;
exports.clearInterval = _clearInterval;
/**
 * Removes timeout.
 *
 * @param id - Id.
 */
function _clearTimeout(id) {
    if (is.not.empty(id))
        clearTimeout(id);
}
exports._clearTimeout = _clearTimeout;
exports.clearTimeout = _clearTimeout;
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
exports.setInterval = _setInterval;
/**
 * Adds timeout.
 *
 * @param callback - Callback.
 * @param timeout - Timeout.
 * @returns Handler.
 */
function _setTimeout(callback, timeout) {
    return setTimeout(callback, timeout);
}
exports._setTimeout = _setTimeout;
exports.setTimeout = _setTimeout;
//# sourceMappingURL=programFlow.js.map