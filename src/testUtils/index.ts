import "jest-extended";
import * as matchers from "jest-extended/all";
import * as _ from "lodash";
import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";
import * as fakeTimers from "@sinonjs/fake-timers";

import * as a from "../array";
import * as assert from "../assertions";
import * as fn from "../function";
import { onDemand } from "../helpers";
import * as json from "../json";
import type { unknowns } from "../types/core";
import type { Async, AsyncPromise } from "../types/function";

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

export const clock = onDemand(() => {
  assert.not.empty(_clock);

  return _clock;
});

/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param time - Expected time.
 * @returns Result.
 */
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

/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param min - Min time (inclusive).
 * @param max - Max time (inclusive).
 * @returns Result.
 */
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

/**
 * Checks that two objects are identical.
 *
 * @param got - Got value.
 * @param expected - Expected object.
 * @returns Result.
 */
export const toBeSameAs: ExpectFromMatcher<"toBeSameAs"> = (got, expected) =>
  got === expected
    ? { message: () => "Expected not the same object", pass: true }
    : { message: () => "Expected the same object", pass: false };

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

export interface FakeTimerOptions {
  readonly shouldAdvanceTime?: boolean;
}

export type Matcher<K extends keyof Matchers> = Matchers[K];

export type MatcherParameters<K extends keyof Matchers> = Parameters<
  Matcher<K>
>;

export type MatcherReturnType<K extends keyof Matchers> = ReturnType<
  Matcher<K>
>;

export type Matchers = Readonly<jest.Matchers<unknown>>;

/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
export function installFakeTimer(options: FakeTimerOptions = {}): void {
  assert.empty(_clock);

  _clock = fakeTimers.install({
    advanceTimeDelta: 10,
    loopLimit: 1000,
    now: Date.now(),
    shouldAdvanceTime: false,
    toFake: [],
    ...options
  });
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
  expect.extend(matchers);

  expect.extend({
    executionTimeToBe,
    executionTimeToBeWithin,
    toBeSameAs
  });

  jest.spyOn(console, "error").mockImplementation((...args: unknowns) => {
    throw new Error(`console.error: ${json.encode(args)}`);
  });

  jest.spyOn(console, "warn").mockImplementation((...args: unknowns) => {
    throw new Error(`console.warn: ${json.encode(args)}`);
  });

  jestReset();
}

/**
 * Executes promise or async function.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
export async function run<T>(promiseAsync: AsyncPromise<T>): Promise<T> {
  const result = await Promise.all([fn.run(promiseAsync), clock.runAllAsync()]);

  return result[0];
}

/**
 * Sets random system time.
 */
export function setRandomSystemTime(): void {
  clock.setSystemTime(
    fn.run(() => {
      const date = new Date();

      date.setFullYear(_.random(2000, 2100));
      date.setMonth(a.random([0, 11, _.random(1, 10)]));
      date.setDate(a.random([1, 31, _.random(2, 30)]));
      date.setHours(a.random([0, 23, _.random(1, 22)]));
      date.setMinutes(a.random([0, 59, _.random(1, 58)]));
      date.setSeconds(a.random([0, 59, _.random(1, 58)]));

      return date;
    })
  );
}

let _clock: fakeTimers.Clock | undefined;
