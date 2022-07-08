import { fn } from "..";
import { printDiffOrStringify, stringify } from "jest-matcher-utils";
import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";

export interface ExpectFromMatcher<K extends keyof Matchers> {
  /**
   * Expect function.
   *
   * @param got - Got.
   * @param args - Arguments.
   * @returns Result.
   */
  (got: unknown, ...args: Parameters<Matchers[K]>): If<
    Extends<ReturnType<Matchers[K]>, Promise<unknown>>,
    Promise<ExpectResult>,
    ExpectResult
  >;
}

export interface ExpectResult {
  /**
   * Returns failure message.
   *
   * @returns Failure message.
   */
  readonly message: () => string;
  readonly pass: boolean;
}

export type Matchers = Readonly<jest.Matchers<unknown, unknown>>;

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
): ExpectResult {
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
): ExpectResult {
  return { message: () => (pass ? expectFailure : expectSuccess), pass };
}
