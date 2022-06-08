export declare type ErrorArg = ErrorArg.Fn | string;
export declare namespace ErrorArg {
    interface Fn {
        /**
         * Creates error.
         *
         * @returns Error.
         */
        (): unknown;
    }
    /**
     * Builds error.
     *
     * @param error - Error.
     * @returns Error.
     */
    function toError(error?: ErrorArg): unknown;
    /**
     * Wraps error.
     *
     * @param e - Error.
     * @returns Wrapped error.
     */
    function wrapError<T>(e: T): () => T;
}
//# sourceMappingURL=error-arg.d.ts.map