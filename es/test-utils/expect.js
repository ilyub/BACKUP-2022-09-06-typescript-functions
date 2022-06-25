import { fn } from "..";
import { printDiffOrStringify, stringify } from "jest-matcher-utils";
/**
 * @deprecated - Use "buildEqualsResult" function.
 */
export const buildResult = buildEqualsMatcherResult;
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
export function buildEqualsMatcherResult(pass, message, got, expected, immediate = false) {
    return {
        message: immediate ? fn.valueToGenerator(factory()) : factory,
        pass
    };
    function factory() {
        const info = pass
            ? stringify(expected)
            : printDiffOrStringify(got, expected, "Got", "Expected", true);
        return `${message}:\n${info}`;
    }
}
/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param expectSuccess - Expect success message.
 * @param expectFailure - Expect failure message.
 * @returns Matcher result.
 */
export function buildMatcherResult(pass, expectSuccess, expectFailure) {
    return { message: () => (pass ? expectFailure : expectSuccess), pass };
}
//# sourceMappingURL=expect.js.map