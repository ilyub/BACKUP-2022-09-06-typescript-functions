import { AssertionError } from "./AssertionError";

export type ErrorArg = ErrorArg.Factory | string;

export namespace ErrorArg {
  export interface Factory {
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
  export function toError(error?: ErrorArg): unknown {
    switch (typeof error) {
      case "function":
        return error();

      case "string":
      case "undefined":
        return new AssertionError(error);
    }
  }

  /**
   * Wraps error.
   *
   * @param e - Error.
   * @returns Wrapped error.
   */
  export function wrapError<T>(e: T): () => T {
    return () => e;
  }
}
