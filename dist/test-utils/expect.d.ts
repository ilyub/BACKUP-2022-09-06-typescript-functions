import type { Matchers, Result } from "./expect.internal";
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
    (got: unknown, ...args: Parameters<Matchers[K]>): If<Extends<ReturnType<Matchers[K]>, Promise<unknown>>, Promise<Result>, Result>;
}
/**
 * Builds result.
 *
 * @param pass - Pass.
 * @param message - Message.
 * @param got - Got.
 * @param expected - Expected.
 * @param immediate - Immediate.
 * @returns Info.
 */
export declare function buildResult(pass: boolean, message: string, got: unknown, expected: unknown, immediate?: boolean): Result;
//# sourceMappingURL=expect.d.ts.map