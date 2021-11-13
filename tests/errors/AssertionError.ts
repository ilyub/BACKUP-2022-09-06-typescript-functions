import { AssertionError } from "@/errors/AssertionError";

const error1 = new AssertionError();

const error2 = new AssertionError("Custom message");

it("message", () => {
  expect(error1.message).toStrictEqual("Assertion failed");
  expect(error2.message).toStrictEqual("Custom message");
});

it("name", () => {
  expect(error1.name).toStrictEqual("AssertionError");
  expect(error2.name).toStrictEqual("AssertionError");
});
