import type { Callable, unknowns } from "..";
import type { ExpectFromMatcher } from "./expect";
export declare const error: Callable<any>;
export declare const warn: Callable<any>;
export declare const matchers: {
    readonly executionTimeToBe: ExpectFromMatcher<"executionTimeToBe">;
    readonly mockCallsToBe: ExpectFromMatcher<"mockCallsToBe">;
    readonly toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
};
export declare type Calls = readonly unknowns[];
//# sourceMappingURL=jest.internal.d.ts.map