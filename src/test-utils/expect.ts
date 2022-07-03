import { fn } from "..";
import { printDiffOrStringify, stringify } from "jest-matcher-utils";
import type { MatchersRecord, Result } from "./expect.internal";
import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";

export interface ExpectFromMatcher<K extends keyof MatchersRecord> {
  /**
   * Expect function.
   *
   * @param got - Got.
   * @param args - Arguments.
   * @returns Result.
   */
  (got: unknown, ...args: Parameters<MatchersRecord[K]>): If<
    Extends<ReturnType<MatchersRecord[K]>, Promise<unknown>>,
    Promise<Result>,
    Result
  >;
}

/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param message - Message.
 * @param got - Got.
 * @param expected - Expected.
 * @param immediate - Immediate.
 * @returns Matcher result.
 */
export function buildEqualsResult(
  pass: boolean,
  message: string,
  got: unknown,
  expected: unknown,
  immediate = false
): Result {
  return {
    message: immediate ? fn.valueToGenerator(factory()) : factory,
    pass
  };

  function factory(): string {
    const info = pass
      ? stringify(expected)
      : printDiffOrStringify(got, expected, "Got", "Expected", true);

    return `${message}:\n${info}`;
  }
}

/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param expectSuccess - Expect success message.
 * @param expectFailure - Expect failure message.
 * @returns Matcher result.
 */
export function buildResult(
  pass: boolean,
  expectSuccess: string,
  expectFailure: string
): Result {
  return { message: () => (pass ? expectFailure : expectSuccess), pass };
}
