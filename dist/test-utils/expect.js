"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMatcherResult = exports.buildEqualsMatcherResult = exports.buildResult = void 0;
const __1 = require("..");
const jest_matcher_utils_1 = require("jest-matcher-utils");
/**
 * @deprecated - Use "buildEqualsResult" function.
 */
exports.buildResult = buildEqualsMatcherResult;
/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param message - Message.
 * @param got - Got.
 * @param expected - Expected.
 * @param immediate - Immediate.
 * @returns Matcher result.
 */
function buildEqualsMatcherResult(pass, message, got, expected, immediate = false) {
    return {
        message: immediate ? __1.fn.valueToGenerator(factory()) : factory,
        pass
    };
    function factory() {
        const info = pass
            ? (0, jest_matcher_utils_1.stringify)(expected)
            : (0, jest_matcher_utils_1.printDiffOrStringify)(got, expected, "Got", "Expected", true);
        return `${message}:\n${info}`;
    }
}
exports.buildEqualsMatcherResult = buildEqualsMatcherResult;
/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param expectSuccess - Expect success message.
 * @param expectFailure - Expect failure message.
 * @returns Matcher result.
 */
function buildMatcherResult(pass, expectSuccess, expectFailure) {
    return { message: () => (pass ? expectFailure : expectSuccess), pass };
}
exports.buildMatcherResult = buildMatcherResult;
//# sourceMappingURL=expect.js.map