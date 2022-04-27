import * as testUtils from "@/test-utils";

testUtils.installFakeTimer();

test("jestSetup", () => {
  expect(() => {
    // eslint-disable-next-line no-console -- Ok
    console.error("Test error");
  }).toThrow(new Error('console.error: ["Test error"]'));

  expect(() => {
    // eslint-disable-next-line no-console -- Ok
    console.warn("Test warning");
  }).toThrow(new Error('console.warn: ["Test warning"]'));
});
