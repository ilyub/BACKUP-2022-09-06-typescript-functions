/* eslint-disable @skylib/custom/functions/prefer-cast-string -- Ok */

/* eslint-disable @skylib/custom/functions/prefer-o-entries -- Ok */

/* eslint-disable @skylib/custom/functions/prefer-o-values -- Ok */

import type {
  AsyncPromise,
  AsyncPromiseSync,
  IndexedObject,
  NumStr,
  Rec,
  Sync,
  Writable
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-shadow -- Wait for @skylib/config update
export const ReadonlyMap: {
  // eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
  new <K, V>(entries?: ReadonlyArray<readonly [K, V]>): ReadonlyMap<K, V>;
} = Map;

// eslint-disable-next-line @typescript-eslint/no-shadow -- Wait for @skylib/config update
export const ReadonlySet: {
  new <T>(values?: readonly T[]): ReadonlySet<T>;
} = Set;

/**
 * Defines function with properties.
 *
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
export const defineFn: <F, P>(fn: F, props: P) => F & Readonly<P> =
  Object.assign;

export type ValidationObject<T extends PropertyKey> = ReadonlySet<T>;

/**
 * Creates validation object.
 *
 * @param source - Source.
 * @returns Validation object.
 */
export function createValidationObject<T extends NumStr>(
  source: Rec<T, T>
): ValidationObject<T> {
  if (Object.entries(source).every(([key, value]) => key === String(value)))
    return new Set(Object.values(source));

  throw new Error("Invalid source");
}

/**
 * Executes callback.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export function evaluate<T>(callback: Sync<T>): T;

/**
 * Executes promise or async function.
 *
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export async function evaluate<T>(mixed: AsyncPromise<T>): Promise<T>;

export function evaluate<T>(mixed: AsyncPromiseSync<T>): Promise<T> | T {
  return typeof mixed === "function" ? mixed() : mixed;
}

/**
 * Marks value as readonly.
 *
 * @param value - Value.
 * @returns Value.
 */
export function freeze<T>(value: T): Readonly<T> {
  return value;
}

/**
 * Marks value as indexed.
 *
 * @param value - Value.
 * @returns Value.
 */
export function indexed(value: object): IndexedObject {
  return value as IndexedObject;
}

/**
 * Defines function with overloads.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export function overload<T>(callback: () => T): T {
  return callback();
}

/**
 * Defines value type.
 *
 * @param value - Value.
 * @returns Value.
 */
export function typedef<T>(value: T): T {
  return value;
}

/**
 * Marks value as writable.
 *
 * @param value - Value.
 * @returns Value.
 */
export function unfreeze<T>(value: T): Writable<T> {
  return value;
}
