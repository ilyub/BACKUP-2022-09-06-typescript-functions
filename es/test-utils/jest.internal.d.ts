import type { ExpectFromMatcher } from "./expect";
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