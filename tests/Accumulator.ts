/* eslint-disable @skylib/consistent-filename -- Ok */

import { a, Accumulator } from "@";

test("get", () => {
  const accumulator = new Accumulator<string, unknown>([
    ["a", [1, 2]],
    ["b", [3]]
  ]);

  expect(accumulator.get("a")).toStrictEqual([1, 2]);
  expect(accumulator.get("b")).toStrictEqual([3]);
  expect(accumulator.get("c")).toStrictEqual([]);
});

test("push", () => {
  const accumulator = new Accumulator<string, number>();

  const expected = [
    ["a", [1, 2]],
    ["b", [3]]
  ];

  accumulator.push("a", 1);
  accumulator.push("a", 2);
  accumulator.push("b", 3);
  expect(a.fromIterable(accumulator)).toStrictEqual(expected);
});

test("unshift", () => {
  const accumulator = new Accumulator<string, number>();

  const expected = [
    ["a", [2, 1]],
    ["b", [3]]
  ];

  accumulator.unshift("a", 1);
  accumulator.unshift("a", 2);
  accumulator.unshift("b", 3);
  expect(a.fromIterable(accumulator)).toStrictEqual(expected);
});

test("values", () => {
  const accumulator = new Accumulator<string, unknown>([
    ["a", [1, 2]],
    ["b", [3]]
  ]);

  expect(a.fromIterable(accumulator.values())).toStrictEqual([[1, 2], [3]]);
});
