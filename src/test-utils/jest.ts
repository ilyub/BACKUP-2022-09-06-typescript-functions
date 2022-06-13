import { matchers as functionsMatchers } from "./expect";
import { error, warn } from "./jest.internal";
import "jest-extended";
import matchers from "jest-extended/all";
import type { unknowns } from "..";

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
  jest.spyOn(console, "error").mockImplementation(errorMock);
  jest.spyOn(console, "warn").mockImplementation(warnMock);
  jestReset();

  function errorMock(...args: unknowns): void {
    error(...args);

    throw new Error("Console error");
  }

  function warnMock(...args: unknowns): void {
    warn(...args);

    throw new Error("Console warn");
  }
}
