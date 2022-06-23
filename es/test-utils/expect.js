import { fn } from "..";
import { printDiffOrStringify, stringify } from "jest-matcher-utils";
/**
 * Builds result.
 *
 * @param pass - Pass.
 * @param message - Message.
 * @param got - Got.
 * @param expected - Expected.
 * @param immediate - Immediate.
 * @returns Info.
 */
export function buildResult(pass, message, got, expected, immediate = false) {
    return {
        message: immediate ? fn.factoryFromValue(factory()) : factory,
        pass
    };
    function factory() {
        if (pass)
            return stringify(expected);
        const info = printDiffOrStringify(got, expected, "Got", "Expected", true);
        return `${message}:\n${info}`;
    }
}
//# sourceMappingURL=expect.js.map