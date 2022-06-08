"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jestSetup = exports.jestReset = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const expect_1 = require("./expect");
require("jest-extended");
const all_1 = tslib_1.__importDefault(require("jest-extended/all"));
tslib_1.__exportStar(require("./fake-timers"), exports);
/**
 * Jest reset.
 */
function jestReset() {
    jest.clearAllMocks();
}
exports.jestReset = jestReset;
/**
 * Jest setup.
 */
function jestSetup() {
    expect.extend(all_1.default);
    expect.extend(expect_1.matchers);
    jest.spyOn(console, "error").mockImplementation((...args) => {
        throw new Error(`console.error: ${__1.json.encode(args)}`);
    });
    jest.spyOn(console, "warn").mockImplementation((...args) => {
        throw new Error(`console.warn: ${__1.json.encode(args)}`);
    });
    jestReset();
}
exports.jestSetup = jestSetup;
//# sourceMappingURL=index.js.map