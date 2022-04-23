import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";
import type { Async } from "..";
import { assert } from "..";

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Checks that async function executes within expected time.
       *
       * @param time - Expected time.
       * @returns Result.
       */
      readonly executionTimeToBe: (time: number) => Promise<R>;
      /**
       * Checks that async function executes within expected time.
       *
       * @param min - Min time (inclusive).
       * @param max - Max time (inclusive).
       * @returns Result.
       */
      readonly executionTimeToBeWithin: (
        min: number,
        max: number
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
  time
) => {
  assert.callable<Async<unknown>>(got, "Expecting async function");

  const start = Date.now();

  await got();

  const executionTime = Date.now() - start;

  return executionTime === time
    ? {
        message: () => `Expected callback execution time not to be ${time} ms`,
        pass: true
      }
    : {
        message: () =>
          `Expected callback execution time (${executionTime} ms) to be ${time} ms`,
        pass: false
      };
};

export const executionTimeToBeWithin: ExpectFromMatcher<
  "executionTimeToBeWithin"
> = async (got, min, max) => {
  assert.callable<Async<unknown>>(got, "Expecting async function");

  const start = Date.now();

  await got();

  const executionTime = Date.now() - start;

  return executionTime >= min && executionTime <= max
    ? {
        message: () =>
          `Expected callback execution time (${executionTime} ms) not to be within [${min}, ${max}] ms`,
        pass: true
      }
    : {
        message: () =>
          `Expected callback execution time (${executionTime} ms) to be within [${min}, ${max}] ms`,
        pass: false
      };
};

export const toBeSameAs: ExpectFromMatcher<"toBeSameAs"> = (got, expected) =>
  got === expected
    ? { message: () => "Expected not the same object", pass: true }
    : { message: () => "Expected the same object", pass: false };

export const matchers = {
  executionTimeToBe,
  executionTimeToBeWithin,
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
