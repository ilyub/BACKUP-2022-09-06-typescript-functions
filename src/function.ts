import * as is from "./guards";
import type { Async, PromiseAsync, PromiseAsyncSync, Sync } from "./types/core";

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
 * Prevents parallel running.
 *
 * @param async - Async function.
 * @returns Wrapped async function.
 */
export function doNotRunParallel<T extends unknown[] = never[]>(
  async: Async<void, T>
): Async<void, T> {
  let running = 0;

  return async (...args: T): Promise<void> => {
    if (running) {
      // Already running
    } else {
      running++;

      try {
        await async(...args);
      } finally {
        running--;
      }
    }
  };
}

export const noop: Function = () => {};

/**
 * Applies callbacks to the value.
 *
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @returns The value returned by callbacks sequence.
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
 * @returns The value returned by callbacks sequence.
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
