import * as _ from "@skylib/lodash-commonjs-es";
import * as is from "./guards";
import type { types, unknowns } from "./types";

export const noop: types.fn.Callable<void> = _.noop.bind(_);

export const never: types.fn.Callable = () => {
  throw new Error("This function should not be called");
};

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

export interface ValueGenerator<T> {
  /**
   * Generates value.
   */
  (): T;
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
 * Gets value from generator.
 *
 * @param mixed - Value or generator.
 * @returns Factory function.
 */
export function valueFromGenerator<T>(mixed: T | ValueGenerator<T>): T {
  return is.callable(mixed) ? mixed() : mixed;
}

/**
 * Creates generator from value.
 *
 * @param value - Value.
 * @returns Generator.
 */
export function valueToGenerator<T>(value: T): ValueGenerator<T> {
  return () => value;
}
