"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchers = exports.toBeSameAs = exports.executionTimeToBeWithin = exports.executionTimeToBe = void 0;
const __1 = require("..");
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param time - Expected time.
 * @returns Result.
 */
const executionTimeToBe = async (got, time) => {
    __1.assert.callable(got, "Expecting async function");
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
    __1.assert.callable(got, "Expecting async function");
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
exports.matchers = {
    executionTimeToBe: exports.executionTimeToBe,
    executionTimeToBeWithin: exports.executionTimeToBeWithin,
    toBeSameAs: exports.toBeSameAs
};
//# sourceMappingURL=expect.js.map