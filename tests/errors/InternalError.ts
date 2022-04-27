/* eslint-disable @skylib/consistent-filename -- Ok */

import { InternalError } from "@";

const error1 = new InternalError();

const error2 = new InternalError("Custom message");

test("message", () => {
  expect(error1.message).toBe("Internal error");
  expect(error2.message).toBe("Custom message");
});

test("name", () => {
  expect(error1.name).toBe("InternalError");
  expect(error2.name).toBe("InternalError");
});
