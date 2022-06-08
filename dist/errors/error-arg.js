"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorArg = void 0;
const AssertionError_1 = require("./AssertionError");
var ErrorArg;
(function (ErrorArg) {
    /**
     * Builds error.
     *
     * @param error - Error.
     * @returns Error.
     */
    function toError(error) {
        switch (typeof error) {
            case "function":
                return error();
            case "string":
            case "undefined":
                return new AssertionError_1.AssertionError(error);
        }
    }
    ErrorArg.toError = toError;
    /**
     * Wraps error.
     *
     * @param e - Error.
     * @returns Wrapped error.
     */
    function wrapError(e) {
        return () => e;
    }
    ErrorArg.wrapError = wrapError;
})(ErrorArg = exports.ErrorArg || (exports.ErrorArg = {}));
//# sourceMappingURL=error-arg.js.map