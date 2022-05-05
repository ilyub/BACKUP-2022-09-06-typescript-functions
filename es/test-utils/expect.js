import { assert } from "..";
export const executionTimeToBe = async (got, expected) => {
    assert.callable(got, "Expecting async function");
    const start = Date.now();
    await got();
    const gotTime = Date.now() - start;
    return gotTime === expected
        ? {
            message: () => `Expected callback execution time not to be ${expected} ms`,
            pass: true
        }
        : {
            message: () => `Expected callback execution time (${gotTime} ms) to be ${expected} ms`,
            pass: false
        };
};
export const toBeSameAs = (got, expected) => got === expected
    ? { message: () => "Expected not the same object", pass: true }
    : { message: () => "Expected the same object", pass: false };
export const matchers = { executionTimeToBe, toBeSameAs };
//# sourceMappingURL=expect.js.map