import type { unknowns } from "..";
import type { ExpectFromMatcher } from "./expect";
export declare const error: (...data: any[]) => void;
export declare const warn: (...data: any[]) => void;
export declare const matchers: {
    readonly executionResultToBe: ExpectFromMatcher<"executionResultToBe">;
    readonly executionTimeToBe: ExpectFromMatcher<"executionTimeToBe">;
    readonly mockCallsToBe: ExpectFromMatcher<"mockCallsToBe">;
    readonly toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
};
export declare type Calls = readonly unknowns[];
export interface ExecutionResult {
    readonly failure?: unknown;
    readonly success?: unknown;
}
//# sourceMappingURL=jest.internal.d.ts.map