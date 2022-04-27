"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jestSetup = exports.jestReset = exports.setRandomSystemTime = exports.run = exports.installFakeTimer = exports.clock = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const expect_1 = require("./expect");
require("jest-extended");
const matchers = tslib_1.__importStar(require("jest-extended/all"));
var fake_timers_1 = require("./fake-timers");
Object.defineProperty(exports, "clock", { enumerable: true, get: function () { return fake_timers_1.clock; } });
Object.defineProperty(exports, "installFakeTimer", { enumerable: true, get: function () { return fake_timers_1.installFakeTimer; } });
Object.defineProperty(exports, "run", { enumerable: true, get: function () { return fake_timers_1.run; } });
Object.defineProperty(exports, "setRandomSystemTime", { enumerable: true, get: function () { return fake_timers_1.setRandomSystemTime; } });
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
    expect.extend(matchers);
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