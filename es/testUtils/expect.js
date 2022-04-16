import { assert } from "..";
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
export const matchers = {
    executionTimeToBe,
    executionTimeToBeWithin,
    toBeSameAs
};
//# sourceMappingURL=expect.js.map