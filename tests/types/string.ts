import type { Equals } from "ts-toolbelt/out/Any/Equals";

import type { AddPrefix, RemovePrefix } from "@/types/string";

test("AddPrefix", () => {
  type To = AddPrefix<"a" | "b", "x">;

  type Expected = "xa" | "xb";

  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);
});

test("RemovePrefix", () => {
  type To = RemovePrefix<"xa" | "xb", "x">;

  type Expected = "a" | "b";

  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);
});
