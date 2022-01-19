// eslint-disable-next-line import/no-unassigned-import
import "jest-extended";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
import * as matchers from "jest-extended/all";
import $ from "jquery";
import * as _ from "lodash";
import * as fakeTimers from "@sinonjs/fake-timers";

import * as a from "../array";
import * as assert from "../assertions";
import * as fn from "../function";
import * as o from "../object";
import type { Async, DeepReadonly, PromiseAsync } from "../types/core";

declare global {
  namespace jest {
    // eslint-disable-next-line @skylib/prefer-readonly
    interface Matchers<R> {
      /**
       * Checks that async function executes within expected time.
       *
       * @param min - Min time (inclusive).
       * @param max - Max time (inclusive).
       * @returns Result object.
       */
      readonly executionTimeToBeWithin: (
        min: number,
        max: number
      ) => Promise<R>;
      /**
       * Checks that async function executes within expected time.
       *
       * @param time - Expected time.
       * @returns Result object.
       */
      readonly executionTimeToEqual: (time: number) => Promise<R>;
      /**
       * Checks that two objects are identical.
       *
       * @param expected - Expected object.
       * @returns Result object.
       */
      readonly toBeSameAs: (expected: object) => R;
    }
  }
}

export type ExpectFromMatcher<K extends keyof jest.Matchers<unknown>> = (
  got: unknown,
  ...args: Parameters<jest.Matchers<unknown>[K]>
) => ReturnType<jest.Matchers<unknown>[K]> extends Promise<unknown>
  ? Promise<ExpectReturnType>
  : ExpectReturnType;

export interface ExpectReturnType {
  /**
   * Generates failure message.
   *
   * @returns Failure message.
   */
  readonly message: () => string;
  readonly pass: boolean;
}

export interface FakeTimerOptions {
  readonly shouldAdvanceTime?: boolean;
}

/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param min - Min time (inclusive).
 * @param max - Max time (inclusive).
 * @returns Result object.
 */
export async function executionTimeToBeWithin(
  got: unknown,
  min: number,
  max: number
): Promise<ExpectReturnType> {
  assert.callable<Async<unknown>>(got, "Expecting async function");

  const start = Date.now();

  await got();

  const executionTime = Date.now() - start;

  return executionTime >= min && executionTime <= max
    ? {
        message: (): string =>
          `Expected callback execution time (${executionTime} ms) not to be within [${min}, ${max}] ms`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected callback execution time (${executionTime} ms) to be within [${min}, ${max}] ms`,
        pass: false
      };
}

/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param time - Expected time.
 * @returns Result object.
 */
export async function executionTimeToEqual(
  got: unknown,
  time: number
): Promise<ExpectReturnType> {
  assert.callable<Async<unknown>>(got, "Expecting async function");

  const start = Date.now();

  await got();

  const executionTime = Date.now() - start;

  return executionTime === time
    ? {
        message: (): string =>
          `Expected callback execution time not to be ${time} ms`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected callback execution time (${executionTime} ms) to be ${time} ms`,
        pass: false
      };
}

/**
 * Gets fake timer.
 *
 * @returns Fake timer.
 */
export function getClock(): DeepReadonly<fakeTimers.Clock> {
  assert.not.empty(clock);

  return clock;
}

/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
export function installFakeTimer(options: FakeTimerOptions = {}): void {
  assert.empty(clock);

  clock = fakeTimers.install(
    o.extend(
      {
        advanceTimeDelta: 10,
        loopLimit: 1000,
        now: Date.now(),
        shouldAdvanceTime: false,
        toFake: []
      },
      options
    )
  );
}

/**
 * Jest reset.
 */
export function jestReset(): void {
  jest.clearAllMocks();
}

/**
 * Jest reset.
 */
jestReset.dom = (): void => {
  document.body.innerHTML = "";
  $.expr.pseudos["visible"] = jqueryVisiblie;
};

/**
 * Jest setup.
 */
export function jestSetup(): void {
  {
    interface ExpectExtendMap {
      readonly executionTimeToBeWithin: ExpectFromMatcher<"executionTimeToBeWithin">;
      readonly executionTimeToEqual: ExpectFromMatcher<"executionTimeToEqual">;
      readonly toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
    }

    const expectExtend: ExpectExtendMap = {
      executionTimeToBeWithin,
      executionTimeToEqual,
      toBeSameAs
    };

    expect.extend(matchers as jest.ExpectExtendMap);
    expect.extend(expectExtend as jest.ExpectExtendMap & ExpectExtendMap);
  }

  jestReset();
}

/**
 * Jest setup.
 */
jestSetup.dom = (): void => {
  jestReset.dom();
};

/**
 * Executes promise or async function.
 * Should be used instead of fn.run when fake timer is install.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
export async function run<T>(promiseAsync: PromiseAsync<T>): Promise<T> {
  const result = await Promise.all([
    fn.run(promiseAsync),
    getClock().runAllAsync()
  ]);

  return result[0];
}

/**
 * Sets random system time.
 */
export function setRandomSystemTime(): void {
  assert.not.empty(clock);

  const d = fn.run(() => {
    const result = new Date();

    result.setFullYear(_.random(2000, 2100));
    result.setMonth(a.random([0, 11, _.random(1, 10)]));
    result.setDate(a.random([1, 31, _.random(2, 30)]));
    result.setHours(a.random([0, 23, _.random(1, 22)]));
    result.setMinutes(a.random([0, 59, _.random(1, 58)]));
    result.setSeconds(a.random([0, 59, _.random(1, 58)]));

    return result;
  });

  clock.setSystemTime(d);
}

/**
 * Checks that two objects are identical.
 *
 * @param got - Got value.
 * @param expected - Expected object.
 * @returns Result object.
 */
export function toBeSameAs(got: unknown, expected: object): ExpectReturnType {
  return got === expected
    ? {
        message: (): string => "Expected not the same object",
        pass: true
      }
    : {
        message: (): string => "Expected the same object",
        pass: false
      };
}

/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/

let clock: DeepReadonly<fakeTimers.Clock> | undefined = undefined;

/**
 * JQuery visible selector.
 *
 * @param el - Element.
 * @returns _True_ if element is visible, _false_ otherwise.
 */
function jqueryVisiblie(el: Element): boolean {
  return $(el).css("display").toLowerCase() !== "none";
}
