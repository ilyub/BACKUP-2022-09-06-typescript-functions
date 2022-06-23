import type { Writable } from "..";
import type { ExpectFromMatcher } from "./expect";
import type { Calls } from "./expect.internal";
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
             * Checks that mock calls are equal to expected value.
             *
             * @param expected -- Calls.
             * @returns Result.
             */
            readonly mockCallsToBe: (...expected: Writable<Calls>) => R;
            /**
             * Checks that two objects are identical.
             *
             * @param expected - Object.
             * @returns Result.
             */
            readonly toBeSameAs: (expected: object) => R;
        }
    }
}
export declare const error: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
export declare const warn: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
export declare const matchers: {
    readonly executionTimeToBe: ExpectFromMatcher<"executionTimeToBe">;
    readonly mockCallsToBe: ExpectFromMatcher<"mockCallsToBe">;
    readonly toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
};
//# sourceMappingURL=jest.internal.d.ts.map