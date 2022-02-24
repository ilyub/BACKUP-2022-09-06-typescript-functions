import "jest-extended";
import * as fakeTimers from "@sinonjs/fake-timers";
import type { DeepReadonly, PromiseAsync } from "../types/core";
declare global {
    namespace jest {
        interface Matchers<R> {
            /**
             * Checks that async function executes within expected time.
             *
             * @param min - Min time (inclusive).
             * @param max - Max time (inclusive).
             * @returns Result object.
             */
            readonly executionTimeToBeWithin: (min: number, max: number) => Promise<R>;
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
export interface ExpectFromMatcher<K extends keyof jest.Matchers<unknown>> {
    /**
     * Converts matcher function to expect function.
     *
     * @param got - Got value.
     * @param args - Args.
     * @returns Result.
     */
    (got: unknown, ...args: Parameters<jest.Matchers<unknown>[K]>): ReturnType<jest.Matchers<unknown>[K]> extends Promise<unknown> ? Promise<ExpectReturnType> : ExpectReturnType;
}
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
export declare function executionTimeToBeWithin(got: unknown, min: number, max: number): Promise<ExpectReturnType>;
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param time - Expected time.
 * @returns Result object.
 */
export declare function executionTimeToEqual(got: unknown, time: number): Promise<ExpectReturnType>;
/**
 * Gets fake timer.
 *
 * @returns Fake timer.
 */
export declare function getClock(): DeepReadonly<fakeTimers.Clock>;
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
export declare namespace jestReset {
    var dom: () => void;
}
/**
 * Jest setup.
 */
export declare function jestSetup(): void;
export declare namespace jestSetup {
    var dom: () => void;
}
/**
 * Executes promise or async function.
 * Should be used instead of fn.run when fake timer is install.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
export declare function run<T>(promiseAsync: PromiseAsync<T>): Promise<T>;
/**
 * Sets random system time.
 */
export declare function setRandomSystemTime(): void;
/**
 * Checks that two objects are identical.
 *
 * @param got - Got value.
 * @param expected - Expected object.
 * @returns Result object.
 */
export declare function toBeSameAs(got: unknown, expected: object): ExpectReturnType;
//# sourceMappingURL=index.d.ts.map