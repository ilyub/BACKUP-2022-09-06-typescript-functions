import * as map from "@/map";

test("delete", () => {
  const source: ReadonlyMap<string, number> = new Map([
    ["a", 1],
    ["b", 2]
  ]);

  const expected: ReadonlyMap<string, number> = new Map([["a", 1]]);

  expect(map.delete(source, "b")).toStrictEqual(expected);
});

test("set", () => {
  const source: ReadonlyMap<string, number> = new Map([["a", 1]]);

  const expected: ReadonlyMap<string, number> = new Map([
    ["a", 1],
    ["b", 2]
  ]);

  expect(map.set(source, "b", 2)).toStrictEqual(expected);
});
