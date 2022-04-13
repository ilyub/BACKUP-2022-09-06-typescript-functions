import type { Equals } from "ts-toolbelt/out/Any/Equals";
import type { AddPrefix, RemovePrefix } from "@/types/string";

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
