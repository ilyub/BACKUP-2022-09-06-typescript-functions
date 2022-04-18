import "jest-extended";
import * as matchers from "jest-extended/all";
import { json } from "..";
import { matchers as functionsMatchers } from "./expect";
export { clock, installFakeTimer, run, setRandomSystemTime } from "./fake-timers";
/**
 * Jest reset.
 */
export function jestReset() {
    jest.clearAllMocks();
}
/**
 * Jest setup.
 */
export function jestSetup() {
    expect.extend(matchers);
    expect.extend(functionsMatchers);
    jest.spyOn(console, "error").mockImplementation((...args) => {
        throw new Error(`console.error: ${json.encode(args)}`);
    });
    jest.spyOn(console, "warn").mockImplementation((...args) => {
        throw new Error(`console.warn: ${json.encode(args)}`);
    });
    jestReset();
}
//# sourceMappingURL=index.js.map