"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchers = exports.toBeSameAs = exports.executionTimeToBe = void 0;
const __1 = require("..");
const executionTimeToBe = async (got, expected) => {
    __1.assert.callable(got, "Expecting async function");
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
exports.executionTimeToBe = executionTimeToBe;
const toBeSameAs = (got, expected) => got === expected
    ? { message: () => "Expected not the same object", pass: true }
    : { message: () => "Expected the same object", pass: false };
exports.toBeSameAs = toBeSameAs;
exports.matchers = { executionTimeToBe: exports.executionTimeToBe, toBeSameAs: exports.toBeSameAs };
//# sourceMappingURL=expect.js.map