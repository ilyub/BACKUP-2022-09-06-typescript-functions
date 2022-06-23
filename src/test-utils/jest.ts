import { error, matchers, warn } from "./jest.internal";
import "jest-extended";
import jestExtendedMatchers from "jest-extended/all";
import type { Writable, unknowns } from "..";
import type { Calls } from "./expect.internal";

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Checks that async function executes within expected time.
       *
       * @param expected - Expected time (ms).
       * @param precision - Precision (ms).
       * @returns Result.
       */
      readonly executionTimeToBe: (
        expected: number,
        precision?: number
      ) => Promise<R>;
      /**
       * Checks that mock calls are equal to expected value.
       *
       * @param expected -- Calls.
       * @returns Result.
       */
      readonly mockCallsToBe: (...expected: Writable<Calls>) => R;
      /**
       * Checks that two objects are identical.
       *
       * @param expected - Object.
       * @returns Result.
       */
      readonly toBeSameAs: (expected: object) => R;
    }
  }
}

/**
 * Jest reset.
 */
export function jestReset(): void {
  jest.clearAllMocks();
}

/**
 * Jest setup.
 */
export function jestSetup(): void {
  expect.extend(jestExtendedMatchers);
  expect.extend(matchers);
  jest.spyOn(console, "error").mockImplementation(errorMock);
  jest.spyOn(console, "warn").mockImplementation(warnMock);
  jestReset();

  function errorMock(...args: unknowns): void {
    error(...args);

    throw new Error("Console error");
  }

  function warnMock(...args: unknowns): void {
    warn(...args);

    throw new Error("Console warn");
  }
}
