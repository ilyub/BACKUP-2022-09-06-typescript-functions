import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";
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
export declare const executionTimeToBe: ExpectFromMatcher<"executionTimeToBe">;
export declare const executionTimeToBeWithin: ExpectFromMatcher<"executionTimeToBeWithin">;
export declare const toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
export declare const matchers: {
    readonly executionTimeToBe: ExpectFromMatcher<"executionTimeToBe">;
    readonly executionTimeToBeWithin: ExpectFromMatcher<"executionTimeToBeWithin">;
    readonly toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
};
export interface ExpectFromMatcher<K extends keyof Matchers> {
    /**
     * Expect function.
     *
     * @param got - Got value.
     * @param args - Arguments.
     * @returns Result.
     */
    (got: unknown, ...args: MatcherParameters<K>): If<Extends<MatcherReturnType<K>, Promise<unknown>>, Promise<ExpectReturnType>, ExpectReturnType>;
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
export declare type Matcher<K extends keyof Matchers> = Matchers[K];
export declare type MatcherParameters<K extends keyof Matchers> = Parameters<Matcher<K>>;
export declare type MatcherReturnType<K extends keyof Matchers> = ReturnType<Matcher<K>>;
export declare type Matchers = Readonly<jest.Matchers<unknown>>;
//# sourceMappingURL=expect.d.ts.map