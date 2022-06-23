"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.pipe = exports.noopTrue = exports.identity = exports.factoryFromValue = exports.noop = void 0;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("./guards"));
const _ = tslib_1.__importStar(require("@skylib/lodash-commonjs-es"));
exports.noop = _.noop.bind(_);
/**
 * Creates factory function from value.
 *
 * @param value - Value.
 * @returns Factory function.
 */
function factoryFromValue(value) {
    return () => value;
}
exports.factoryFromValue = factoryFromValue;
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
function run(mixed) {
    return is.callable(mixed) ? mixed() : mixed;
}
exports.run = run;
//# sourceMappingURL=function.js.map