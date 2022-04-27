"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRandomSystemTime = exports.run = exports.installFakeTimer = exports.clock = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const fakeTimers = tslib_1.__importStar(require("@sinonjs/fake-timers"));
const _ = tslib_1.__importStar(require("@skylib/lodash-commonjs-es"));
exports.clock = (0, __1.onDemand)(() => {
    __1.assert.not.empty(_clock);
    return _clock;
});
/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
function installFakeTimer(options = {}) {
    __1.assert.empty(_clock);
    _clock = fakeTimers.install(Object.assign({ advanceTimeDelta: 10, loopLimit: 1000, now: Date.now(), shouldAdvanceTime: false, toFake: [] }, options));
}
exports.installFakeTimer = installFakeTimer;
/**
 * Executes promise or async function.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
async function run(promiseAsync) {
    const result = await Promise.all([__1.fn.run(promiseAsync), exports.clock.runAllAsync()]);
    return result[0];
}
exports.run = run;
/**
 * Sets random system time.
 */
function setRandomSystemTime() {
    exports.clock.setSystemTime(__1.fn.run(() => {
        const date = new Date();
        date.setFullYear(_.random(2000, 2100));
        date.setMonth(__1.a.random([0, 11, _.random(1, 10)]));
        date.setDate(__1.a.random([1, 31, _.random(2, 30)]));
        date.setHours(__1.a.random([0, 23, _.random(1, 22)]));
        date.setMinutes(__1.a.random([0, 59, _.random(1, 58)]));
        date.setSeconds(__1.a.random([0, 59, _.random(1, 58)]));
        return date;
    }));
}
exports.setRandomSystemTime = setRandomSystemTime;
let _clock;
//# sourceMappingURL=fake-timers.js.map