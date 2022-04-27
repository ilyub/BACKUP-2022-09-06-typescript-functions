/* eslint-disable @skylib/consistent-filename -- Ok */

import { ConversionError } from "@";

const error1 = new ConversionError();

const error2 = new ConversionError("Custom message");

test("message", () => {
  expect(error1.message).toBe("Conversion error");
  expect(error2.message).toBe("Custom message");
});

test("name", () => {
  expect(error1.name).toBe("ConversionError");
  expect(error2.name).toBe("ConversionError");
});
