/**
 * Defines function with properties.
 *
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
export declare const defineFn: <F, P>(fn: F, props: P) => F & P;
/**
 * Defines function with overloads.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export declare function overloadedFn<T>(callback: () => T): T;
//# sourceMappingURL=index.d.ts.map