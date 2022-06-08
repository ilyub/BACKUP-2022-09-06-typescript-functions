import { AssertionError } from "./AssertionError";
export var ErrorArg;
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
                return new AssertionError(error);
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
})(ErrorArg || (ErrorArg = {}));
//# sourceMappingURL=error-arg.js.map