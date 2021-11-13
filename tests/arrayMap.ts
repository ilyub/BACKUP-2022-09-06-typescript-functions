import * as arrayMap from "@/arrayMap";

export type Get<K extends PropertyKey, T> = (
  key: K,
  map: ReadonlyMap<K, readonly T[]>
) => readonly T[];

export type Get2<K extends PropertyKey, L extends PropertyKey, T> = (
  key1: K,
  key2: L,
  map: ReadonlyMap<K, ReadonlyMap<L, readonly T[]>>
) => readonly T[];

const get: Get<string, number> = arrayMap.get;

const get2: Get2<string, string, number> = arrayMap.get2;

it("push", () => {
  const got = new Map<string, number[]>();

  arrayMap.push("a", 1, got);
  arrayMap.push("a", 2, got);
  arrayMap.push("b", 3, got);

  const expected = new Map([
    ["a", [1, 2]],
    ["b", [3]]
  ]);

  expect(got).toStrictEqual(expected);
  expect(get("a", got)).toStrictEqual([1, 2]);
  expect(get("b", got)).toStrictEqual([3]);
  expect(get("c", got)).toStrictEqual([]);
});

it("push2", () => {
  const got = new Map<string, Map<string, number[]>>();

  arrayMap.push2("a", "x", 1, got);
  arrayMap.push2("a", "x", 2, got);
  arrayMap.push2("a", "y", 3, got);
  arrayMap.push2("b", "z", 4, got);

  const expected = new Map([
    [
      "a",
      new Map([
        ["x", [1, 2]],
        ["y", [3]]
      ])
    ],
    ["b", new Map([["z", [4]]])]
  ]);

  expect(got).toStrictEqual(expected);
  expect(get2("a", "x", got)).toStrictEqual([1, 2]);
  expect(get2("a", "y", got)).toStrictEqual([3]);
  expect(get2("a", "z", got)).toStrictEqual([]);
  expect(get2("b", "z", got)).toStrictEqual([4]);
  expect(get2("c", "z", got)).toStrictEqual([]);
});

it("unshift", () => {
  const got = new Map<string, number[]>();

  arrayMap.unshift("a", 1, got);
  arrayMap.unshift("a", 2, got);
  arrayMap.unshift("b", 3, got);

  const expected = new Map([
    ["a", [2, 1]],
    ["b", [3]]
  ]);

  expect(got).toStrictEqual(expected);
  expect(get("a", got)).toStrictEqual([2, 1]);
  expect(get("b", got)).toStrictEqual([3]);
  expect(get("c", got)).toStrictEqual([]);
});

it("unshift2", () => {
  const got = new Map<string, Map<string, number[]>>();

  arrayMap.unshift2("a", "x", 1, got);
  arrayMap.unshift2("a", "x", 2, got);
  arrayMap.unshift2("a", "y", 3, got);
  arrayMap.unshift2("b", "z", 4, got);

  const expected = new Map([
    [
      "a",
      new Map([
        ["x", [2, 1]],
        ["y", [3]]
      ])
    ],
    ["b", new Map([["z", [4]]])]
  ]);

  expect(got).toStrictEqual(expected);
  expect(get2("a", "x", got)).toStrictEqual([2, 1]);
  expect(get2("a", "y", got)).toStrictEqual([3]);
  expect(get2("a", "z", got)).toStrictEqual([]);
  expect(get2("b", "z", got)).toStrictEqual([4]);
  expect(get2("c", "z", got)).toStrictEqual([]);
});
