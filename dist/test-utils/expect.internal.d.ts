/// <reference types="jest" />
import type { Writable, unknowns } from "..";
export declare type Calls = readonly unknowns[];
export declare type Matchers = Readonly<jest.Matchers<unknown, unknown>>;
export interface Result {
    /**
     * Returns failure message.
     *
     * @returns Failure message.
     */
    readonly message: () => string;
    readonly pass: boolean;
}
/**
 * Checks that value type is Mock.
 *
 * @param value - Value.
 * @returns _True_ if value type is Mock, _false_ otherwise.
 */
export declare function isMock(value: unknown): value is jest.Mock<unknown, Writable<unknowns>>;
//# sourceMappingURL=expect.internal.d.ts.map