/* skylib/eslint-plugin disable @skylib/functions/no-restricted-syntax[prefer-mockCallsToBe] */

import { assert } from "..";
import { buildResult } from "./expect";
import { isMock } from "./expect.internal";
import { equals } from "@jest/expect-utils";
import type { Async, Writable } from "..";
import type { ExpectFromMatcher } from "./expect";
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

// eslint-disable-next-line no-console -- Ok
export const error = console.error;

// eslint-disable-next-line no-console -- Ok
export const warn = console.warn;

export const matchers: {
  readonly executionTimeToBe: ExpectFromMatcher<"executionTimeToBe">;
  readonly mockCallsToBe: ExpectFromMatcher<"mockCallsToBe">;
  readonly toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
} = {
  executionTimeToBe: async (got, expected, precision = 10) => {
    assert.callable<Async<unknown>>(got, "Expecting async function");

    const t1 = Date.now();

    await got();

    const t2 = Date.now();

    const gotTime = t2 - t1;

    return buildResult(
      Math.abs(gotTime - expected) <= precision,
      "Unexpected execution time",
      gotTime,
      expected
    );
  },
  mockCallsToBe: (got, ...expected) => {
    assert.byGuard(got, isMock, "Expecting mock function");

    const result = buildResult(
      equals(got.mock.calls, expected),
      "Unexpected mock calls",
      got.mock.calls,
      expected,
      true
    );

    got.mockClear();

    return result;
  },
  toBeSameAs: (got, expected) => {
    assert.object(got, "Expecting object");

    // eslint-disable-next-line no-warning-comments -- Postponed
    // fixme - Report that removing "return" does not produce error
    return buildResult(
      got === expected,
      "Object are not identical",
      got,
      expected
    );
  }
} as const;
