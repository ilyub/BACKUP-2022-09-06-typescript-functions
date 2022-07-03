/* disable @skylib/functions/no-restricted-syntax[prefer-mockCallsToBe] */

import { assert } from "..";
import { buildEqualsResult } from "./expect";
import { isMock } from "./expect.internal";
import { equals } from "@jest/expect-utils";
import type { Async } from "..";
import type { ExpectFromMatcher } from "./expect";

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

    return buildEqualsResult(
      Math.abs(gotTime - expected) <= precision,
      "Unexpected execution time",
      gotTime,
      expected
    );
  },
  mockCallsToBe: (got, ...expected) => {
    assert.byGuard(got, isMock, "Expecting mock function");

    const result = buildEqualsResult(
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

    return buildEqualsResult(
      got === expected,
      "Object are not identical",
      got,
      expected
    );
  }
} as const;
