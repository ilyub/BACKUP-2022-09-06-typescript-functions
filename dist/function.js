"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.pipe = exports.noop = exports.identity = void 0;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("./guards"));
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
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };
exports.noop = noop;
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