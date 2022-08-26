import "jest-extended";
import type { Writable, unknowns } from "..";
import { error, matchers, warn } from "./jest.internal";
import type { Calls } from "./jest.internal";
import jestExtendedMatchers from "jest-extended/all";

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

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Checks function execution result.
       *
       * @param expected - Function execution result.
       * @param expectedToThrow - Whether function is expected to throw error.
       * @returns Result.
       */
      readonly executionResultToBe: (
        expected: unknown,
        expectedToThrow?: boolean
      ) => R;
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
       * Checks promise execution result.
       *
       * @param expected - Promise execution result.
       * @param expectedToThrow - Whether promise is expected to throw error.
       * @returns Result.
       */
      readonly promiseResultToBe: (
        expected: unknown,
        expectedToThrow?: boolean
      ) => Promise<R>;
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
