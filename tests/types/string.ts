/* eslint-disable @skylib/custom/no-literal-union-type -- Ok */

import type { AddPrefix, RemovePrefix } from "@";
import type { Equals } from "ts-toolbelt/out/Any/Equals";

test("AddPrefix", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  type Expected = "xa" | "xb";

  type To = AddPrefix<"a" | "b", "x">;
});

test("RemovePrefix", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  type Expected = "a" | "b";

  type To = RemovePrefix<"xa" | "xb", "x">;
});
