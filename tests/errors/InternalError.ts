import { InternalError } from "@/errors/InternalError";

const error1 = new InternalError();

const error2 = new InternalError("Custom message");

it("message", () => {
  expect(error1.message).toStrictEqual("Internal error");
  expect(error2.message).toStrictEqual("Custom message");
});

it("name", () => {
  expect(error1.name).toStrictEqual("InternalError");
  expect(error2.name).toStrictEqual("InternalError");
});
