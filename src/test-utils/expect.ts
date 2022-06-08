import { as } from "..";
import type { Async } from "..";
import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";

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
       * Checks that two objects are identical.
       *
       * @param expected - Expected object.
       * @returns Result.
       */
      readonly toBeSameAs: (expected: object) => R;
    }
  }
}

export const executionTimeToBe: ExpectFromMatcher<"executionTimeToBe"> = async (
  got,
  expected,
  precision = 10
) => {
  const start = Date.now();

  await as.callable<Async<unknown>>(got, "Expecting async function")();

  const gotTime = Date.now() - start;

  return Math.abs(gotTime - expected) <= precision
    ? {
        message: () =>
          `Expected callback execution time not to be ${expected} ms`,
        pass: true
      }
    : {
        message: () =>
          `Expected callback execution time (${gotTime} ms) to be ${expected} ms`,
        pass: false
      };
};

export const toBeSameAs: ExpectFromMatcher<"toBeSameAs"> = (got, expected) =>
  got === expected
    ? { message: () => "Expected not the same object", pass: true }
    : { message: () => "Expected the same object", pass: false };

export const matchers = {
  executionTimeToBe,
  toBeSameAs
} as const;

export interface ExpectFromMatcher<K extends keyof Matchers> {
  /**
   * Expect function.
   *
   * @param got - Got value.
   * @param args - Arguments.
   * @returns Result.
   */
  (got: unknown, ...args: MatcherParameters<K>): If<
    Extends<MatcherReturnType<K>, Promise<unknown>>,
    Promise<ExpectReturnType>,
    ExpectReturnType
  >;
}

export interface ExpectReturnType {
  /**
   * Returns failure message.
   *
   * @returns Failure message.
   */
  readonly message: () => string;
  readonly pass: boolean;
}

export type Matcher<K extends keyof Matchers> = Matchers[K];

export type MatcherParameters<K extends keyof Matchers> = Parameters<
  Matcher<K>
>;

export type MatcherReturnType<K extends keyof Matchers> = ReturnType<
  Matcher<K>
>;

export type Matchers = Readonly<jest.Matchers<unknown>>;
