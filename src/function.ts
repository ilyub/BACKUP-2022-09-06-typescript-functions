import * as is from "./guards";
import * as _ from "@skylib/lodash-commonjs-es";
import type {
  AsyncPromise,
  AsyncPromiseSync,
  Callable,
  Sync,
  unknowns
} from "./types";

export const noop: Callable = _.noop.bind(_);

export interface PipeCallback<V = unknown, R = unknown> {
  /**
   * Pipe callback.
   *
   * @param value - Value.
   * @returns Result.
   */
  (value: V): R;
}

export type PipeCallbacks = readonly PipeCallback[];

/**
 * Creates factory function from value.
 *
 * @param value - Value.
 * @returns Factory function.
 */
export function factoryFromValue<T>(value: T): () => T {
  return () => value;
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

/**
 * Noop function.
 *
 * @param _args - Arguments.
 * @returns _True_.
 */
export function noopTrue(..._args: unknowns): true {
  return true;
}

/**
 * Applies callbacks to a value.
 *
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @returns The value returned by callback sequence.
 */
export function pipe<V, A, R>(
  value: V,
  callback1: PipeCallback<V, A>,
  callback2: PipeCallback<A, R>
): R;

/**
 * Applies callbacks to a value.
 *
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @param callback3 - Callback 3.
 * @returns The value returned by callback sequence.
 */
export function pipe<V, A, B, R>(
  value: V,
  callback1: PipeCallback<V, A>,
  callback2: PipeCallback<A, B>,
  callback3: PipeCallback<B, R>
): R;

export function pipe(value: unknown, ...callbacks: PipeCallbacks): unknown {
  for (const callback of callbacks) value = callback(value);

  return value;
}

/**
 * Executes callback.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 * @deprecated Use "evaluate" instead.
 */
export function run<T>(callback: Sync<T>): T;

/**
 * Executes promise or async function.
 *
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 * @deprecated Use "evaluate" instead.
 */
export async function run<T>(mixed: AsyncPromise<T>): Promise<T>;

export function run<T>(mixed: AsyncPromiseSync<T>): Promise<T> | T {
  return is.callable(mixed) ? mixed() : mixed;
}
