import * as fakeTimers from "@sinonjs/fake-timers";
import "jest-extended";
import type { AsyncPromise } from "..";
export declare const clock: fakeTimers.Clock;
export interface Options {
    readonly shouldAdvanceTime?: boolean;
}
/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
export declare function installFakeTimer(options?: Options): void;
/**
 * Executes promise or async function.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
export declare function run<T>(promiseAsync: AsyncPromise<T>): Promise<T>;
/**
 * Sets random system time.
 */
export declare function setRandomSystemTime(): void;
//# sourceMappingURL=fake-timers.d.ts.map