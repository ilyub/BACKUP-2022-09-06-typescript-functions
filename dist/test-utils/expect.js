"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildResult = void 0;
const __1 = require("..");
const jest_matcher_utils_1 = require("jest-matcher-utils");
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
function buildResult(pass, message, got, expected, immediate = false) {
    return {
        message: immediate ? __1.fn.factoryFromValue(factory()) : factory,
        pass
    };
    function factory() {
        if (pass)
            return (0, jest_matcher_utils_1.stringify)(expected);
        const info = (0, jest_matcher_utils_1.printDiffOrStringify)(got, expected, "Got", "Expected", true);
        return `${message}:\n${info}`;
    }
}
exports.buildResult = buildResult;
//# sourceMappingURL=expect.js.map