"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueToGenerator = exports.pipe = exports.noopTrue = exports.identity = exports.noop = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("@skylib/lodash-commonjs-es"));
exports.noop = _.noop.bind(_);
/**
 * Identity function.
 *
 * @param value - Value.
 * @returns Value.
 */
function identity(value) {
    return value;
}
exports.identity = identity;
/**
 * Noop function.
 *
 * @param _args - Arguments.
 * @returns _True_.
 */
function noopTrue(..._args) {
    return true;
}
exports.noopTrue = noopTrue;
function pipe(value, ...callbacks) {
    for (const callback of callbacks)
        value = callback(value);
    return value;
}
exports.pipe = pipe;
/**
 * Creates factory function from value.
 *
 * @param value - Value.
 * @returns Factory function.
 */
function valueToGenerator(value) {
    return () => value;
}
exports.valueToGenerator = valueToGenerator;
//# sourceMappingURL=function.js.map