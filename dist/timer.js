"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-identifier[timer] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTimeout = exports.addTimeout = exports.removeInterval = exports.addInterval = void 0;
const tslib_1 = require("tslib");
const is = (0, tslib_1.__importStar)(require("./guards"));
/**
 * Adds interval.
 *
 * @param callback - Callback.
 * @param delay - Delay.
 * @returns Handler.
 */
function addInterval(callback, delay) {
    return setInterval(callback, delay);
}
exports.addInterval = addInterval;
/**
 * Removes interval.
 *
 * @param handler - Handler.
 */
function removeInterval(handler) {
    if (is.not.empty(handler))
        clearInterval(handler);
}
exports.removeInterval = removeInterval;
/**
 * Adds timeout.
 *
 * @param callback - Callback.
 * @param delay - Delay.
 * @returns Handler.
 */
function addTimeout(callback, delay) {
    return setTimeout(callback, delay);
}
exports.addTimeout = addTimeout;
/**
 * Removes timeout.
 *
 * @param handler - Handler.
 */
function removeTimeout(handler) {
    if (is.not.empty(handler))
        clearTimeout(handler);
}
exports.removeTimeout = removeTimeout;
//# sourceMappingURL=timer.js.map