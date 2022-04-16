"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.pipe = exports.identity = exports.noop = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("@skylib/lodash-commonjs-es"));
const is = tslib_1.__importStar(require("./guards"));
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