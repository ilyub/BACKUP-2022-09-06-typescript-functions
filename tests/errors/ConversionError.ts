import { ConversionError } from "@/errors/ConversionError";

const error1 = new ConversionError();

const error2 = new ConversionError("Custom message");

it("message", () => {
  expect(error1.message).toStrictEqual("Conversion error");
  expect(error2.message).toStrictEqual("Custom message");
});

it("name", () => {
  expect(error1.name).toStrictEqual("ConversionError");
  expect(error2.name).toStrictEqual("ConversionError");
});
