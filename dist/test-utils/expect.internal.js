"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMock = void 0;
const __1 = require("..");
/**
 * Checks that value type is Mock.
 *
 * @param value - Value.
 * @returns _True_ if value type is Mock, _false_ otherwise.
 */
function isMock(value) {
    return __1.is.callable(value);
}
exports.isMock = isMock;
//# sourceMappingURL=expect.internal.js.map