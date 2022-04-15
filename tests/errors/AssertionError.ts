import { AssertionError } from "@";

const error1 = new AssertionError();

const error2 = new AssertionError("Custom message");

test("message", () => {
  expect(error1.message).toBe("Assertion failed");
  expect(error2.message).toBe("Custom message");
});

test("name", () => {
  expect(error1.name).toBe("AssertionError");
  expect(error2.name).toBe("AssertionError");
});
