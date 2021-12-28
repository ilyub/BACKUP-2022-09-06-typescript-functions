import * as set from "@/set";

it("delete", () => {
  const source: ReadonlySet<number> = new Set([1, 2]);

  const expected: ReadonlySet<number> = new Set([1]);

  expect(set.delete(source, 2)).toStrictEqual(expected);
});

it("set", () => {
  const source: ReadonlySet<number> = new Set([1]);

  const expected: ReadonlySet<number> = new Set([1, 2]);

  expect(set.add(source, 2)).toStrictEqual(expected);
});
