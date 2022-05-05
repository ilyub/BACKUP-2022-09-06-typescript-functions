import { json } from "..";
import { matchers as functionsMatchers } from "./expect";
import "jest-extended";
import matchers from "jest-extended/all";
import type { unknowns } from "..";

export type { ExpectFromMatcher } from "./expect";

export {
  clock,
  installFakeTimer,
  run,
  setRandomSystemTime
} from "./fake-timers";

/**
 * Jest reset.
 */
export function jestReset(): void {
  jest.clearAllMocks();
}

/**
 * Jest setup.
 */
export function jestSetup(): void {
  expect.extend(matchers);
  expect.extend(functionsMatchers);
  jest.spyOn(console, "error").mockImplementation((...args: unknowns) => {
    throw new Error(`console.error: ${json.encode(args)}`);
  });
  jest.spyOn(console, "warn").mockImplementation((...args: unknowns) => {
    throw new Error(`console.warn: ${json.encode(args)}`);
  });
  jestReset();
}
