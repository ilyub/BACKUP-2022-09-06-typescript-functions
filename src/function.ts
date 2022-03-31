import * as is from "./guards";
import type {
  Callable,
  PromiseAsync,
  PromiseAsyncSync,
  Sync
} from "./types/core";

export interface PipeCallback<V = unknown, R = unknown> {
  /**
   * Pipe callback.
   *
   * @param value - Value.
   * @returns Result.
   */
  (value: V): R;
}

/**
 * Identity function.
 *
 * @param value - Value.
 * @returns Value.
 */
export function identity<T>(value: T): T {
  return value;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop: Callable = () => {};

/**
 * Applies callbacks to the value.
 *
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @returns The value returned by callback sequence.
 */
export function pipe<A, B, C>(
  value: A,
  callback1: PipeCallback<A, B>,
  callback2: PipeCallback<B, C>
): C;

/**
 * Applies callbacks to the value.
 *
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @param callback3 - Callback 3.
 * @returns The value returned by callback sequence.
 */
export function pipe<A, B, C, D>(
  value: A,
  callback1: PipeCallback<A, B>,
  callback2: PipeCallback<B, C>,
  callback3: PipeCallback<C, D>
): D;

export function pipe(value: unknown, ...callbacks: PipeCallback[]): unknown {
  for (const callback of callbacks) value = callback(value);

  return value;
}

/**
 * Executes callback.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export function run<T>(callback: Sync<T>): T;

/**
 * Executes promise or async function.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
export async function run<T>(promiseAsync: PromiseAsync<T>): Promise<T>;

export function run<T>(mixed: PromiseAsyncSync<T>): Promise<T> | T {
  return is.callable(mixed) ? mixed() : mixed;
}
