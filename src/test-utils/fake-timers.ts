import { onDemand, assert, fn, a } from "..";
import * as fakeTimers from "@sinonjs/fake-timers";
import * as _ from "@skylib/lodash-commonjs-es";
import type { AsyncPromise } from "..";

export const clock = onDemand(() => {
  assert.not.empty(_clock);

  return _clock;
});

export interface Options {
  readonly shouldAdvanceTime?: boolean;
}

/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
export function installFakeTimer(options: Options = {}): void {
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