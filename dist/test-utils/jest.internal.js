"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchers = exports.warn = exports.error = void 0;
const __1 = require("..");
const expect_1 = require("./expect");
const expect_utils_1 = require("@jest/expect-utils");
// eslint-disable-next-line no-console -- Ok
exports.error = console.error;
// eslint-disable-next-line no-console -- Ok
exports.warn = console.warn;
exports.matchers = {
    executionTimeToBe: async (got, expected, precision = 10) => {
        __1.assert.callable(got, "Expecting async function");
        const t1 = Date.now();
        await got();
        const t2 = Date.now();
        const gotTime = t2 - t1;
        return (0, expect_1.buildEqualsResult)(Math.abs(gotTime - expected) <= precision, "Unexpected execution time", gotTime, expected);
    },
    mockCallsToBe: (got, ...expected) => {
        __1.assert.byGuard(got, isMock, "Expecting mock function");
        const result = (0, expect_1.buildEqualsResult)((0, expect_utils_1.equals)(got.mock.calls, expected), "Unexpected mock calls", got.mock.calls, expected, true);
        // eslint-disable-next-line @skylib/custom/functions/prefer-mockCallsToBe -- Ok
        got.mockClear();
        return result;
    },
    toBeSameAs: (got, expected) => {
        __1.assert.object(got, "Expecting object");
        return (0, expect_1.buildEqualsResult)(got === expected, "Object are not identical", got, expected);
    }
};
/**
 * Checks that value type is Mock.
 *
 * @param value - Value.
 * @returns _True_ if value type is Mock, _false_ otherwise.
 */
function isMock(value) {
    return __1.is.callable(value);
}
//# sourceMappingURL=jest.internal.js.map