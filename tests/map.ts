import { map } from "@";

test("delete", () => {
  const source = new Map([
    ["a", 1],
    ["b", 2]
  ]);

  const expected1 = new Map([["a", 1]]);

  const expected2 = new Map([
    ["a", 1],
    ["b", 2]
  ]);

  expect(map.delete(source, "b")).toStrictEqual(expected1);
  expect(source).toStrictEqual(expected2);
});

test("set", () => {
  const source = new Map([["a", 1]]);

  const expected1 = new Map([
    ["a", 1],
    ["b", 2]
  ]);

  const expected2 = new Map([["a", 1]]);

  expect(map.set(source, "b", 2)).toStrictEqual(expected1);
  expect(source).toStrictEqual(expected2);
});
