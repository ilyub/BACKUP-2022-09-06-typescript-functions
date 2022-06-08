import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";
declare global {
    namespace jest {
        interface Matchers<R> {
            /**
             * Checks that async function executes within expected time.
             *
             * @param expected - Expected time (ms).
             * @param precision - Precision (ms).
             * @returns Result.
             */
            readonly executionTimeToBe: (expected: number, precision?: number) => Promise<R>;
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
export declare const toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
export declare const matchers: {
    readonly executionTimeToBe: ExpectFromMatcher<"executionTimeToBe">;
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