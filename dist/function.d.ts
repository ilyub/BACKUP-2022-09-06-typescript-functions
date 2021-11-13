import type { PromiseAsync, Sync } from "./types/core";
export declare type PipeCallback<V = unknown, R = unknown> = (value: V) => R;
/**
 * Applies callbacks to the value.
 *
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @returns The value returned by callbacks sequence.
 */
export declare function pipe<A, B, C>(value: A, callback1: PipeCallback<A, B>, callback2: PipeCallback<B, C>): C;
/**
 * Applies callbacks to the value.
 *
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @param callback3 - Callback 3.
 * @returns The value returned by callbacks sequence.
 */
export declare function pipe<A, B, C, D>(value: A, callback1: PipeCallback<A, B>, callback2: PipeCallback<B, C>, callback3: PipeCallback<C, D>): D;
/**
 * Executes callback.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export declare function run<T>(callback: Sync<T>): T;
/**
 * Executes promise or async function.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
export declare function run<T>(promiseAsync: PromiseAsync<T>): Promise<T>;
//# sourceMappingURL=function.d.ts.map