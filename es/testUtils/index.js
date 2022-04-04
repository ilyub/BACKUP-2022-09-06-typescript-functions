import "jest-extended";
import * as matchers from "jest-extended/all";
import * as _ from "lodash-es";
import * as fakeTimers from "@sinonjs/fake-timers";
import * as a from "../array";
import * as assert from "../assertions";
import * as fn from "../function";
import { onDemand } from "../helpers";
import * as json from "../json";
export const clock = onDemand(() => {
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
export const executionTimeToBe = async (got, time) => {
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
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param min - Min time (inclusive).
 * @param max - Max time (inclusive).
 * @returns Result.
 */
export const executionTimeToBeWithin = async (got, min, max) => {
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
/**
 * Checks that two objects are identical.
 *
 * @param got - Got value.
 * @param expected - Expected object.
 * @returns Result.
 */
export const toBeSameAs = (got, expected) => got === expected
    ? { message: () => "Expected not the same object", pass: true }
    : { message: () => "Expected the same object", pass: false };
/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
export function installFakeTimer(options = {}) {
    assert.empty(_clock);
    _clock = fakeTimers.install(Object.assign({ advanceTimeDelta: 10, loopLimit: 1000, now: Date.now(), shouldAdvanceTime: false, toFake: [] }, options));
}
/**
 * Jest reset.
 */
export function jestReset() {
    jest.clearAllMocks();
}
/**
 * Jest setup.
 */
export function jestSetup() {
    expect.extend(matchers);
    expect.extend({
        executionTimeToBe,
        executionTimeToBeWithin,
        toBeSameAs
    });
    jest.spyOn(console, "error").mockImplementation((...args) => {
        throw new Error(`console.error: ${json.encode(args)}`);
    });
    jest.spyOn(console, "warn").mockImplementation((...args) => {
        throw new Error(`console.warn: ${json.encode(args)}`);
    });
    jestReset();
}
/**
 * Executes promise or async function.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
export async function run(promiseAsync) {
    const result = await Promise.all([fn.run(promiseAsync), clock.runAllAsync()]);
    return result[0];
}
/**
 * Sets random system time.
 */
export function setRandomSystemTime() {
    clock.setSystemTime(fn.run(() => {
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
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
let _clock;
//# sourceMappingURL=index.js.map