"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jestSetup = exports.jestReset = exports.setRandomSystemTime = exports.run = exports.installFakeTimer = exports.clock = void 0;
require("jest-extended");
const __1 = require("..");
const expect_1 = require("./expect");
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
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-var-requires -- Ok
    expect.extend(require("jest-extended/all"));
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