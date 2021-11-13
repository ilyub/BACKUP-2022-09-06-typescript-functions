import * as a from "@/array";
import { AssertionError } from "@/errors/AssertionError";
import * as reflect from "@/reflect";

function reduce(obj: object): unknown {
  return reflect.get(obj, "id");
}

it("chain", () => {
  expect(a.chain([1, 2, 3, 4, 5])).toStrictEqual([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
  ]);
});

it("clone", () => {
  const arr1 = [1, 2, 3];

  const arr2 = a.clone(arr1);

  expect(arr1).toStrictEqual([1, 2, 3]);
  expect(arr2).toStrictEqual([1, 2, 3]);
  expect(arr2).not.toBeSameAs(arr1);
});

it("drop", () => {
  const error = new AssertionError("Invalid index");

  expect(() => a.drop([1, 2, 3], -1)).toThrow(error);
  expect(() => a.drop([1, 2, 3], 3)).toThrow(error);
  expect(a.drop([1, 2, 3], 1)).toStrictEqual([1, 3]);
});

it("findBy", () => {
  const arr = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" },
    { id: 2, value: "d" }
  ];

  const expected = { id: 2, value: "b" };

  expect(a.findBy(arr, { id: 2 }, "id")).toStrictEqual(expected);
  expect(a.findBy(arr, { id: 4 }, "id")).toBeUndefined();
  expect(a.findBy(arr, { id: 2 }, reduce)).toStrictEqual(expected);
  expect(a.findBy(arr, { id: 4 }, reduce)).toBeUndefined();
});

it("first", () => {
  const error = new AssertionError("Invalid index");

  expect(a.first([1, 2, 3])).toStrictEqual(1);
  expect(a.first([null, 2, 3])).toBeNull();
  expect(a.first([undefined, 2, 3])).toBeUndefined();
  expect(() => a.first([])).toThrow(error);
});

it("fromIterable", () => {
  const arr1 = [1, 2, 3];

  const arr2 = a.fromIterable(arr1);

  const arr3 = a.fromIterable(() => arr1);

  expect(arr1).toStrictEqual([1, 2, 3]);
  expect(arr2).toStrictEqual([1, 2, 3]);
  expect(arr3).toStrictEqual([1, 2, 3]);
  expect(arr2).not.toBeSameAs(arr1);
  expect(arr3).not.toBeSameAs(arr1);
});

it("fromRange", () => {
  expect(a.fromRange(5, 7)).toStrictEqual([5, 6, 7]);
  expect(a.fromRange(5, 7, 2)).toStrictEqual([5, 7]);
  expect(a.fromRange(5, 8, 2)).toStrictEqual([5, 7]);
});

it("get", () => {
  const error = new AssertionError("Invalid index");

  expect(a.get([1, 2, 3], 1)).toStrictEqual(2);
  expect(a.get([1, null, 3], 1)).toBeNull();
  expect(a.get([1, undefined, 3], 1)).toBeUndefined();
  expect(() => a.get([], 0)).toThrow(error);
});

it("includesBy", () => {
  const arr = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" },
    { id: 2, value: "d" }
  ];

  expect(a.includesBy(arr, { id: 2 }, "id")).toBeTrue();
  expect(a.includesBy(arr, { id: 4 }, "id")).toBeFalse();
  expect(a.includesBy(arr, { id: 2 }, reduce)).toBeTrue();
  expect(a.includesBy(arr, { id: 4 }, reduce)).toBeFalse();
});

it("last", () => {
  const error = new AssertionError("Invalid index");

  expect(a.last([1, 2, 3])).toStrictEqual(3);
  expect(a.last([1, 2, null])).toBeNull();
  expect(a.last([1, 2, undefined])).toBeUndefined();
  expect(() => a.last([])).toThrow(error);
});

it("push", () => {
  const arr = [1, 2, 3];

  expect(a.push([1, 2, 3], 4)).toStrictEqual([1, 2, 3, 4]);
  expect(arr).toStrictEqual([1, 2, 3]);
});

it("random", () => {
  expect(a.random([1, 2, 3])).toBeOneOf([1, 2, 3]);
  expect(() => a.random([])).toThrow(new AssertionError("Invalid index"));
});

it("removeBy", () => {
  const arr = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" },
    { id: 2, value: "d" }
  ];

  const expected = [
    { id: 1, value: "a" },
    { id: 3, value: "c" }
  ];

  expect(a.removeBy(arr, { id: 2 }, "id")).toStrictEqual(expected);
  expect(a.removeBy(arr, { id: 2 }, reduce)).toStrictEqual(expected);
});

it("replace", () => {
  const error = new AssertionError("Invalid index");

  expect(() => a.replace(["a", "b", "c"], -1, "d")).toThrow(error);
  expect(() => a.replace(["a", "b", "c"], 3, "d")).toThrow(error);
  expect(a.replace(["a", "b", "c"], 1, "d")).toStrictEqual(["a", "d", "c"]);
});

it("reverse", () => {
  expect(a.reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
});

it("sort", () => {
  expect(a.sort([1, 3, 2])).toStrictEqual([1, 2, 3]);
  expect(a.sort([1, 3, 2], (x, y) => y - x)).toStrictEqual([3, 2, 1]);
});

it("truncate", () => {
  const arr = [1, 2, 3];

  a.truncate(arr);
  expect(arr).toStrictEqual([]);
});

it("uniqueBy", () => {
  const arr = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" },
    { id: 2, value: "d" }
  ];

  const expected = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" }
  ];

  expect(a.uniqueBy(arr, "id")).toStrictEqual(expected);
  expect(a.uniqueBy(arr, reduce)).toStrictEqual(expected);
});

it("unshift", () => {
  const arr = [1, 2, 3];

  expect(a.unshift([1, 2, 3], 4)).toStrictEqual([4, 1, 2, 3]);
  expect(arr).toStrictEqual([1, 2, 3]);
});
