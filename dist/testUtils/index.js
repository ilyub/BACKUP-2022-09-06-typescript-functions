"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRandomSystemTime = exports.run = exports.jestSetup = exports.jestReset = exports.installFakeTimer = exports.toBeSameAs = exports.executionTimeToBeWithin = exports.executionTimeToBe = exports.clock = void 0;
const tslib_1 = require("tslib");
// eslint-disable-next-line import/no-unassigned-import
require("jest-extended");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
// eslint-disable-next-line @skylib/consistent-import
const matchers = tslib_1.__importStar(require("jest-extended/all"));
const _ = tslib_1.__importStar(require("lodash"));
// eslint-disable-next-line @skylib/consistent-import
const fakeTimers = tslib_1.__importStar(require("@sinonjs/fake-timers"));
const a = tslib_1.__importStar(require("../array"));
const assert = tslib_1.__importStar(require("../assertions"));
const fn = tslib_1.__importStar(require("../function"));
const helpers_1 = require("../helpers");
const json = tslib_1.__importStar(require("../json"));
exports.clock = (0, helpers_1.onDemand)(() => {
    assert.not.empty(_clock);
    return _clock;
});
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param time - Expected time.
 * @returns Result.
 */
const executionTimeToBe = async (got, time) => {
    assert.callable(got, "Expecting async function");
    const start = Date.now();
    await got();
    const executionTime = Date.now() - start;
    return executionTime === time
        ? {
            message: () => `Expected callback execution time not to be ${time} ms`,
            pass: true
        }
        : {
            message: () => `Expected callback execution time (${executionTime} ms) to be ${time} ms`,
            pass: false
        };
};
exports.executionTimeToBe = executionTimeToBe;
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param min - Min time (inclusive).
 * @param max - Max time (inclusive).
 * @returns Result.
 */
const executionTimeToBeWithin = async (got, min, max) => {
    assert.callable(got, "Expecting async function");
    const start = Date.now();
    await got();
    const executionTime = Date.now() - start;
    return executionTime >= min && executionTime <= max
        ? {
            message: () => `Expected callback execution time (${executionTime} ms) not to be within [${min}, ${max}] ms`,
            pass: true
        }
        : {
            message: () => `Expected callback execution time (${executionTime} ms) to be within [${min}, ${max}] ms`,
            pass: false
        };
};
exports.executionTimeToBeWithin = executionTimeToBeWithin;
/**
 * Checks that two objects are identical.
 *
 * @param got - Got value.
 * @param expected - Expected object.
 * @returns Result.
 */
const toBeSameAs = (got, expected) => got === expected
    ? { message: () => "Expected not the same object", pass: true }
    : { message: () => "Expected the same object", pass: false };
exports.toBeSameAs = toBeSameAs;
/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
function installFakeTimer(options = {}) {
    assert.empty(_clock);
    _clock = fakeTimers.install(Object.assign({ advanceTimeDelta: 10, loopLimit: 1000, now: Date.now(), shouldAdvanceTime: false, toFake: [] }, options));
}
exports.installFakeTimer = installFakeTimer;
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
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    expect.extend(matchers);
    expect.extend({
        executionTimeToBe: exports.executionTimeToBe,
        executionTimeToBeWithin: exports.executionTimeToBeWithin,
        toBeSameAs: exports.toBeSameAs
    });
    jest.spyOn(console, "error").mockImplementation((...args) => {
        throw new Error(`console.error: ${json.encode(args)}`);
    });
    jest.spyOn(console, "warn").mockImplementation((...args) => {
        throw new Error(`console.warn: ${json.encode(args)}`);
    });
    jestReset();
}
exports.jestSetup = jestSetup;
/**
 * Executes promise or async function.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
async function run(promiseAsync) {
    const result = await Promise.all([fn.run(promiseAsync), exports.clock.runAllAsync()]);
    return result[0];
}
exports.run = run;
/**
 * Sets random system time.
 */
function setRandomSystemTime() {
    exports.clock.setSystemTime(fn.run(() => {
        const date = new Date();
        date.setFullYear(_.random(2000, 2100));
        date.setMonth(a.random([0, 11, _.random(1, 10)]));
        date.setDate(a.random([1, 31, _.random(2, 30)]));
        date.setHours(a.random([0, 23, _.random(1, 22)]));
        date.setMinutes(a.random([0, 59, _.random(1, 58)]));
        date.setSeconds(a.random([0, 59, _.random(1, 58)]));
        return date;
    }));
}
exports.setRandomSystemTime = setRandomSystemTime;
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
let _clock;
//# sourceMappingURL=index.js.map