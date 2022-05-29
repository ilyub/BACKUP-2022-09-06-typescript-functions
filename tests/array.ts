import { a, AssertionError } from "@";

interface Reducible {
  id: unknown;
}

function reduce(obj: Reducible): unknown {
  return obj.id;
}

test("chain", () => {
  expect(a.chain([1, 2, 3, 4, 5])).toStrictEqual([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
  ]);
});

test("clone", () => {
  const arr1 = [1, 2, 3];

  const arr2 = a.clone(arr1);

  expect(arr1).toStrictEqual([1, 2, 3]);
  expect(arr2).toStrictEqual([1, 2, 3]);
  expect(arr2).not.toBeSameAs(arr1);
});

test("drop", () => {
  expect(a.drop([1, 2, 3], 1)).toStrictEqual([1, 3]);
});

test("findBy", () => {
  const arr = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 },
    { data: "d", id: 2 }
  ];

  const expected = { data: "b", id: 2 };

  expect(a.findBy(arr, { id: 2 }, "id")).toStrictEqual(expected);
  expect(a.findBy(arr, { id: 4 }, "id")).toBeUndefined();
  expect(a.findBy(arr, { id: 2 }, reduce)).toStrictEqual(expected);
  expect(a.findBy(arr, { id: 4 }, reduce)).toBeUndefined();
});

test("first", () => {
  expect(a.first([1, 2, 3, 4, 5])).toBe(1);
  expect(a.first([null, 2, 3, 4, 5])).toBeNull();
  expect(a.first([undefined, 2, 3, 4, 5])).toBeUndefined();
});

test("fromIterable", () => {
  const arr1 = [1, 2, 3];

  const arr2 = a.fromIterable(arr1);

  expect(arr1).toStrictEqual([1, 2, 3]);
  expect(arr2).toStrictEqual([1, 2, 3]);
  expect(arr2).not.toBeSameAs(arr1);
});

test("fromRange", () => {
  expect(a.fromRange(5, 7)).toStrictEqual([5, 6, 7]);
  expect(a.fromRange(5, 7, 2)).toStrictEqual([5, 7]);
  expect(a.fromRange(5, 8, 2)).toStrictEqual([5, 7]);
});

test("fromString", () => {
  expect(a.fromString("abc")).toStrictEqual(["a", "b", "c"]);
});

test("get", () => {
  expect(a.get([1, 2, 3, 4, 5], 3)).toBe(4);
  expect(a.get([1, 2, 3, null, 5], 3)).toBeNull();
  expect(a.get([1, 2, 3, undefined, 5], 3)).toBeUndefined();
});

test("includesBy", () => {
  const arr = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 },
    { data: "d", id: 2 }
  ];

  expect(a.includesBy(arr, { id: 2 }, "id")).toBeTrue();
  expect(a.includesBy(arr, { id: 4 }, "id")).toBeFalse();
  expect(a.includesBy(arr, { id: 2 }, reduce)).toBeTrue();
  expect(a.includesBy(arr, { id: 4 }, reduce)).toBeFalse();
});

test("last", () => {
  expect(a.last([1, 2, 3, 4, 5])).toBe(4);
  expect(a.last([1, 2, 3, 4, null])).toBeNull();
  expect(a.last([1, 2, 3, 4, undefined])).toBeUndefined();
});

test("push", () => {
  const arr = [1, 2, 3];

  expect(a.push([1, 2, 3], 4)).toStrictEqual([1, 2, 3, 4]);
  expect(arr).toStrictEqual([1, 2, 3]);
});

test.each([
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 }
    ],
    value: { data: "c", id: 3 }
  },
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 },
      { data: "d", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "e", id: 2 },
      { data: "c", id: 3 },
      { data: "e", id: 2 }
    ],
    value: { data: "e", id: 2 }
  }
])("pushOrReplaceBy", ({ arr, expected, value }) => {
  expect(a.pushOrReplaceBy(arr, value, "id")).toStrictEqual(expected);
});

test("random", () => {
  expect(a.random([1, 2, 3])).toBeOneOf([1, 2, 3]);
  expect(() => a.random([])).toThrow(new AssertionError("Invalid index"));
});

test("removeBy", () => {
  const arr = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 },
    { data: "d", id: 2 }
  ];

  const expected = [
    { data: "a", id: 1 },
    { data: "c", id: 3 }
  ];

  expect(a.removeBy(arr, { id: 2 }, "id")).toStrictEqual(expected);
  expect(a.removeBy(arr, { id: 2 }, reduce)).toStrictEqual(expected);
});

test("replace", () => {
  expect(a.replace(["a", "b", "c"], 1, "d")).toStrictEqual(["a", "d", "c"]);
});

test.each([
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    value: { data: "c", id: 3 }
  },
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 },
      { data: "d", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "e", id: 2 },
      { data: "c", id: 3 },
      { data: "e", id: 2 }
    ],
    value: { data: "e", id: 2 }
  }
])("replaceBy", ({ arr, expected, value }) => {
  expect(a.replaceBy(arr, value, "id")).toStrictEqual(expected);
});

test("reverse", () => {
  expect(a.reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
});

test("second", () => {
  expect(a.second([1, 2, 3, 4, 5])).toBe(2);
  expect(a.second([1, null, 3, 4, 5])).toBeNull();
  expect(a.second([1, undefined, 3, 4, 5])).toBeUndefined();
});

test("sort", () => {
  expect(a.sort([1, 3, 2])).toStrictEqual([1, 2, 3]);
  expect(a.sort([1, 3, 2], (x, y) => x - y)).toStrictEqual([1, 2, 3]);
  expect(a.sort([1, 3, 2], (x, y) => y - x)).toStrictEqual([3, 2, 1]);
});

test("third", () => {
  expect(a.third([1, 2, 3, 4, 5])).toBe(3);
  expect(a.third([1, 2, null, 4, 5])).toBeNull();
  expect(a.third([1, 2, undefined, 4, 5])).toBeUndefined();
});

test.each([
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 }
    ],
    value: { data: "c", id: 3 }
  },
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 },
      { data: "d", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "c", id: 3 }
    ],
    value: { data: "e", id: 2 }
  }
])("toggleBy", ({ arr, expected, value }) => {
  expect(a.toggleBy(arr, value, "id")).toStrictEqual(expected);
  expect(a.toggleBy(arr, value, reduce)).toStrictEqual(expected);
});

test("truncate", () => {
  const arr = [1, 2, 3];

  a.truncate(arr);
  expect(arr).toStrictEqual([]);
});

test("uniqueBy", () => {
  const arr = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 },
    { data: "d", id: 2 }
  ];

  const expected = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 }
  ];

  expect(a.uniqueBy(arr, "id")).toStrictEqual(expected);
  expect(a.uniqueBy(arr, reduce)).toStrictEqual(expected);
});

test("unshift", () => {
  const arr = [1, 2, 3];

  expect(a.unshift([1, 2, 3], 4)).toStrictEqual([4, 1, 2, 3]);
  expect(arr).toStrictEqual([1, 2, 3]);
});

test.each([
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    expected: [
      { data: "c", id: 3 },
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    value: { data: "c", id: 3 }
  },
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 },
      { data: "d", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "e", id: 2 },
      { data: "c", id: 3 },
      { data: "e", id: 2 }
    ],
    value: { data: "e", id: 2 }
  }
])("unshiftOrReplaceBy", ({ arr, expected, value }) => {
  expect(a.unshiftOrReplaceBy(arr, value, "id")).toStrictEqual(expected);
});
