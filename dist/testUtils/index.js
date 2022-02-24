"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeSameAs = exports.setRandomSystemTime = exports.run = exports.jestSetup = exports.jestReset = exports.installFakeTimer = exports.getClock = exports.executionTimeToEqual = exports.executionTimeToBeWithin = void 0;
const tslib_1 = require("tslib");
// eslint-disable-next-line import/no-unassigned-import
require("jest-extended");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
const matchers = (0, tslib_1.__importStar)(require("jest-extended/all"));
const jquery_1 = (0, tslib_1.__importDefault)(require("jquery"));
const _ = (0, tslib_1.__importStar)(require("lodash"));
const fakeTimers = (0, tslib_1.__importStar)(require("@sinonjs/fake-timers"));
const a = (0, tslib_1.__importStar)(require("../array"));
const assert = (0, tslib_1.__importStar)(require("../assertions"));
const fn = (0, tslib_1.__importStar)(require("../function"));
const o = (0, tslib_1.__importStar)(require("../object"));
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param min - Min time (inclusive).
 * @param max - Max time (inclusive).
 * @returns Result object.
 */
async function executionTimeToBeWithin(got, min, max) {
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
}
exports.executionTimeToBeWithin = executionTimeToBeWithin;
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param time - Expected time.
 * @returns Result object.
 */
async function executionTimeToEqual(got, time) {
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
}
exports.executionTimeToEqual = executionTimeToEqual;
/**
 * Gets fake timer.
 *
 * @returns Fake timer.
 */
function getClock() {
    assert.not.empty(clock);
    return clock;
}
exports.getClock = getClock;
/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
function installFakeTimer(options = {}) {
    assert.empty(clock);
    clock = fakeTimers.install(o.extend({
        advanceTimeDelta: 10,
        loopLimit: 1000,
        now: Date.now(),
        shouldAdvanceTime: false,
        toFake: []
    }, options));
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
 * Jest reset.
 */
jestReset.dom = () => {
    while (document.body.children.length) {
        const child = document.body.children.item(0);
        assert.not.empty(child);
        child.remove();
    }
    jquery_1.default.expr.pseudos["visible"] = jqueryVisiblie;
};
/**
 * Jest setup.
 */
function jestSetup() {
    {
        const expectExtend = {
            executionTimeToBeWithin,
            executionTimeToEqual,
            toBeSameAs
        };
        // eslint-disable-next-line no-type-assertion/no-type-assertion
        expect.extend(matchers);
        // eslint-disable-next-line no-type-assertion/no-type-assertion
        expect.extend(expectExtend);
    }
    jestReset();
}
exports.jestSetup = jestSetup;
/**
 * Jest setup.
 */
jestSetup.dom = () => {
    jestReset.dom();
};
/**
 * Executes promise or async function.
 * Should be used instead of fn.run when fake timer is install.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
async function run(promiseAsync) {
    const result = await Promise.all([
        fn.run(promiseAsync),
        getClock().runAllAsync()
    ]);
    return result[0];
}
exports.run = run;
/**
 * Sets random system time.
 */
function setRandomSystemTime() {
    assert.not.empty(clock);
    const d = fn.run(() => {
        const result = new Date();
        result.setFullYear(_.random(2000, 2100));
        result.setMonth(a.random([0, 11, _.random(1, 10)]));
        result.setDate(a.random([1, 31, _.random(2, 30)]));
        result.setHours(a.random([0, 23, _.random(1, 22)]));
        result.setMinutes(a.random([0, 59, _.random(1, 58)]));
        result.setSeconds(a.random([0, 59, _.random(1, 58)]));
        return result;
    });
    clock.setSystemTime(d);
}
exports.setRandomSystemTime = setRandomSystemTime;
/**
 * Checks that two objects are identical.
 *
 * @param got - Got value.
 * @param expected - Expected object.
 * @returns Result object.
 */
function toBeSameAs(got, expected) {
    return got === expected
        ? {
            message: () => "Expected not the same object",
            pass: true
        }
        : {
            message: () => "Expected the same object",
            pass: false
        };
}
exports.toBeSameAs = toBeSameAs;
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
let clock;
/**
 * JQuery visible selector.
 *
 * @param el - Element.
 * @returns _True_ if element is visible, _false_ otherwise.
 */
function jqueryVisiblie(el) {
    return (0, jquery_1.default)(el).css("display").toLowerCase() !== "none";
}
//# sourceMappingURL=index.js.map