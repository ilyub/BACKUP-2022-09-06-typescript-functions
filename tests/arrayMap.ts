import * as arrayMap from "@/arrayMap";

test("get", () => {
  const map = new Map([
    ["a", [1, 2]],
    ["b", [3]]
  ]);

  expect(arrayMap.get("a", map)).toStrictEqual([1, 2]);
  expect(arrayMap.get("b", map)).toStrictEqual([3]);
  expect(arrayMap.get("c", map)).toStrictEqual([]);
});

test("get2", () => {
  const map = new Map([
    ["a", new Map([["x", [1, 2]]])],
    ["b", new Map([["y", [3]]])]
  ]);

  expect(arrayMap.get2("a", "x", map)).toStrictEqual([1, 2]);
  expect(arrayMap.get2("b", "y", map)).toStrictEqual([3]);
  expect(arrayMap.get2("c", "z", map)).toStrictEqual([]);
});

test("push", () => {
  const map = new Map<string, number[]>();

  arrayMap.push("a", 1, map);
  arrayMap.push("a", 2, map);
  arrayMap.push("b", 3, map);

  const expected = new Map([
    ["a", [1, 2]],
    ["b", [3]]
  ]);

  expect(map).toStrictEqual(expected);
});

test("push2", () => {
  const map = new Map<string, Map<string, number[]>>();

  arrayMap.push2("a", "x", 1, map);
  arrayMap.push2("a", "x", 2, map);
  arrayMap.push2("a", "y", 3, map);
  arrayMap.push2("b", "z", 4, map);

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

  expect(map).toStrictEqual(expected);
});

test("unshift", () => {
  const map = new Map<string, number[]>();

  arrayMap.unshift("a", 1, map);
  arrayMap.unshift("a", 2, map);
  arrayMap.unshift("b", 3, map);

  const expected = new Map([
    ["a", [2, 1]],
    ["b", [3]]
  ]);

  expect(map).toStrictEqual(expected);
});

test("unshift2", () => {
  const map = new Map<string, Map<string, number[]>>();

  arrayMap.unshift2("a", "x", 1, map);
  arrayMap.unshift2("a", "x", 2, map);
  arrayMap.unshift2("a", "y", 3, map);
  arrayMap.unshift2("b", "z", 4, map);

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

  expect(map).toStrictEqual(expected);
});
