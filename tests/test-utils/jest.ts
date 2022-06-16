import { fn } from "@";
import * as testUtils from "@/test-utils";
// eslint-disable-next-line @skylib/consistent-import, import/no-internal-modules -- Ok
import * as internal from "@/test-utils/jest.internal";

testUtils.installFakeTimer();

test("jestSetup: error", () => {
  const error = jest.spyOn(internal, "error");

  error.mockImplementationOnce(fn.noop);
  expect(() => {
    // eslint-disable-next-line no-console -- Ok
    console.error("Test error");
  }).toThrow(new Error("Console error"));
  expect(error).toHaveBeenCalledTimes(1);
  expect(error).toHaveBeenCalledWith("Test error");
});

test("jestSetup: warn", () => {
  const warn = jest.spyOn(internal, "warn");

  warn.mockImplementationOnce(fn.noop);
  expect(() => {
    // eslint-disable-next-line no-console -- Ok
    console.warn("Test warning");
  }).toThrow(new Error("Console warn"));
  expect(warn).toHaveBeenCalledTimes(1);
  expect(warn).toHaveBeenCalledWith("Test warning");
});