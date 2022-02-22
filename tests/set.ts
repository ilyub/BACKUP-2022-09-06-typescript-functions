import * as set from "@/set";

test("delete", () => {
  const source: ReadonlySet<number> = new Set([1, 2]);

  const expected: ReadonlySet<number> = new Set([1]);

  expect(set.delete(source, 2)).toStrictEqual(expected);
});

test("set", () => {
  const source: ReadonlySet<number> = new Set([1]);

  const expected: ReadonlySet<number> = new Set([1, 2]);

  expect(set.add(source, 2)).toStrictEqual(expected);
});
