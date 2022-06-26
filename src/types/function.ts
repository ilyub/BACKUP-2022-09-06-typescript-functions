import type { nevers, unknowns } from "./core";

export interface Async<R, A extends unknowns = nevers> {
  /**
   * Async function.
   *
   * @param args - Arguments.
   * @returns Promise.
   */
  (...args: A): Promise<R>;
}

export type AsyncPromise<R, A extends unknowns = nevers> =
  | Async<R, A>
  | Promise<R>;

export type AsyncPromiseSync<R, A extends unknowns = nevers> =
  | Async<R, A>
  | Promise<R>
  | Sync<R, A>;

export interface CallSignature<T extends Callable> {
  /**
   * Call signature.
   *
   * @param this - This argument.
   * @param args - Arguments.
   * @returns Result.
   */
  (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T>;
}

export interface Callable<T = any> {
  /**
   * Function.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  // eslint-disable-next-line @skylib/prefer-alias-for-array-types -- Wait for @skylib/eslint-plugin update
  (...args: any[]): T;
}

export interface ConstructSignature<T extends Constructor> {
  /**
   * Construct signature.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  new (...args: ConstructorParameters<T>): InstanceType<T>;
}

export interface Constructor<T = any> {
  /**
   * Constructor.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  // eslint-disable-next-line @skylib/prefer-alias-for-array-types -- Wait for @skylib/eslint-plugin update
  new (...args: any[]): T;
}

export interface Sync<R, A extends unknowns = nevers> {
  /**
   * Function.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  (...args: A): R;
}
