import { ErrorArg } from "@";

test("wrapError", () => {
  expect(ErrorArg.wrapError(1)()).toBe(1);
});
