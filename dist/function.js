"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.pipe = void 0;
const tslib_1 = require("tslib");
const is = (0, tslib_1.__importStar)(require("./guards"));
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