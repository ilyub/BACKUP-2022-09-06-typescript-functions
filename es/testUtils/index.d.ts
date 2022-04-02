import "jest-extended";
import * as fakeTimers from "@sinonjs/fake-timers";
import type { AsyncPromise } from "../types/function";
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
            readonly executionTimeToBeWithin: (min: number, max: number) => Promise<R>;
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
export interface ExpectFromMatcher<K extends keyof Matchers> {
    /**
     * Expect function.
     *
     * @param got - Got value.
     * @param args - Arguments.
     * @returns Result.
     */
    (got: unknown, ...args: MatcherParameters<K>): MatcherReturnType<K> extends Promise<unknown> ? Promise<ExpectReturnType> : ExpectReturnType;
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
export declare type Matcher<K extends keyof Matchers> = Matchers[K];
export declare type MatcherParameters<K extends keyof Matchers> = Parameters<Matcher<K>>;
export declare type MatcherReturnType<K extends keyof Matchers> = ReturnType<Matcher<K>>;
export declare type Matchers = Readonly<jest.Matchers<unknown>>;
export declare const clock: fakeTimers.Clock;
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param time - Expected time.
 * @returns Result.
 */
export declare const executionTimeToBe: ExpectFromMatcher<"executionTimeToBe">;
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param min - Min time (inclusive).
 * @param max - Max time (inclusive).
 * @returns Result.
 */
export declare const executionTimeToBeWithin: ExpectFromMatcher<"executionTimeToBeWithin">;
/**
 * Checks that two objects are identical.
 *
 * @param got - Got value.
 * @param expected - Expected object.
 * @returns Result.
 */
export declare const toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
export declare function installFakeTimer(options?: FakeTimerOptions): void;
/**
 * Jest reset.
 */
export declare function jestReset(): void;
/**
 * Jest setup.
 */
export declare function jestSetup(): void;
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
//# sourceMappingURL=index.d.ts.map