import type { AsyncPromise, Callable, Sync, unknowns } from "./types";
export declare const noop: Callable;
export interface PipeCallback<V = unknown, R = unknown> {
    /**
     * Pipe callback.
     *
     * @param value - Value.
     * @returns Result.
     */
    (value: V): R;
}
export declare type PipeCallbacks = readonly PipeCallback[];
/**
 * Identity function.
 *
 * @param value - Value.
 * @returns Value.
 */
export declare function identity<T>(value: T): T;
/**
 * Noop function.
 *
 * @param _args - Arguments.
 * @returns _True_.
 */
export declare function noopTrue(..._args: unknowns): true;
/**
 * Applies callbacks to a value.
 *
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @returns The value returned by callback sequence.
 */
export declare function pipe<V, A, R>(value: V, callback1: PipeCallback<V, A>, callback2: PipeCallback<A, R>): R;
/**
 * Applies callbacks to a value.
 *
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @param callback3 - Callback 3.
 * @returns The value returned by callback sequence.
 */
export declare function pipe<V, A, B, R>(value: V, callback1: PipeCallback<V, A>, callback2: PipeCallback<A, B>, callback3: PipeCallback<B, R>): R;
/**
 * Executes callback.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 * @deprecated Use "evaluate" instead.
 */
export declare function run<T>(callback: Sync<T>): T;
/**
 * Executes promise or async function.
 *
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 * @deprecated Use "evaluate" instead.
 */
export declare function run<T>(mixed: AsyncPromise<T>): Promise<T>;
/**
 * Creates factory function from value.
 *
 * @param value - Value.
 * @returns Factory function.
 */
export declare function valueToGenerator<T>(value: T): () => T;
//# sourceMappingURL=function.d.ts.map