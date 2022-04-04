import type { Equals } from "ts-toolbelt/out/Any/Equals";

import { AssertionError } from "@/errors/AssertionError";
import * as is from "@/guards";
import * as o from "@/object";

test("clone", () => {
  const obj1 = { a: 1 };

  const obj2 = o.clone(obj1);

  expect(obj1).toStrictEqual({ a: 1 });
  expect(obj2).toStrictEqual({ a: 1 });
  expect(obj2).not.toBeSameAs(obj1);
});

test("every", () => {
  expect(o.every({ a: 1, b: 2 }, is.number)).toBeTrue();
  expect(o.every({ a: 1, b: "a" }, is.number)).toBeFalse();
});

test("filter", () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3
  };

  const expected = { a: 1, c: 3 };

  expect(o.filter(obj, callback)).toStrictEqual(expected);

  function callback(value: number): boolean {
    return value % 2 === 1;
  }
});

test("freeze", () => {
  interface TestInterface {
    value: number;
  }

  const obj1: TestInterface = { value: 1 };

  const obj2 = o.freeze(obj1);

  const typeCheck1: Equals<typeof obj1, { value: number }> = 1;

  const typeCheck2: Equals<typeof obj2, { readonly value: number }> = 1;

  expect(obj1).toBeSameAs(obj2);
  expect(typeCheck1).toBe(1);
  expect(typeCheck2).toBe(1);
});

test("fromEntries", () => {
  expect(o.fromEntries([["a", 1]])).toStrictEqual({ a: 1 });
});

test("fromEntries.exhaustive", () => {
  expect(o.fromEntries.exhaustive([["a", 1]])).toStrictEqual({ a: 1 });
});

test("get", () => {
  expect(o.get({ a: 1 }, "a", is.number)).toBe(1);
  expect(() => o.get({ a: 1 }, "a", is.string)).toThrow(new AssertionError());
});

test("getPrototypeOf", () => {
  class TestClass {}

  expect(o.getPrototypeOf(new TestClass())).toBeSameAs(TestClass.prototype);
  expect(o.getPrototypeOf(TestClass)).toBeUndefined();
});

test("hasOwnProp", () => {
  {
    expect(o.hasOwnProp("a", { a: 1 })).toBeTrue();
    expect(o.hasOwnProp("a", { a: undefined })).toBeTrue();
    expect(o.hasOwnProp("b", { a: 1 })).toBeFalse();
  }

  {
    expect(o.hasOwnProp(0, { 0: 1 })).toBeTrue();
    expect(o.hasOwnProp(0, { 0: undefined })).toBeTrue();
    expect(o.hasOwnProp(1, { 0: 1 })).toBeFalse();
  }

  {
    const symbol1 = Symbol("TestSymbol1");

    const symbol2 = Symbol("TestSymbol2");

    expect(o.hasOwnProp(symbol1, { [symbol1]: 1 })).toBeTrue();
    expect(o.hasOwnProp(symbol1, { [symbol1]: undefined })).toBeTrue();
    expect(o.hasOwnProp(symbol2, { [symbol1]: 1 })).toBeFalse();
  }
});

test("map", () => {
  const obj = {
    a: "1",
    b: "12",
    c: "123"
  };

  const expected = {
    a: 1,
    b: 2,
    c: 3
  };

  expect(o.map(obj, callback)).toStrictEqual(expected);

  function callback(value: string): number {
    return value.length;
  }
});

test("merge", () => {
  expect(
    o.merge(
      {
        a: 1,
        b: [1],
        c: "a"
      },
      {
        b: 2,
        c: [2],
        d: "b"
      },
      {
        c: 3,
        d: [3],
        e: "c"
      }
    )
  ).toStrictEqual({
    a: 1,
    b: [[1], 2],
    c: ["a", [2], 3],
    d: ["b", [3]],
    e: "c"
  });
});

test("omit", () => {
  expect(
    o.omit(
      {
        a: 1,
        b: 2,
        c: 3
      },
      "b"
    )
  ).toStrictEqual({ a: 1, c: 3 });
});

test("removeUndefinedKeys", () => {
  const obj = { a: 1, b: undefined };

  const expected = { a: 1 };

  expect(o.removeUndefinedKeys(obj)).toStrictEqual(expected);
});

test("size", () => {
  const symbol = Symbol("TestSymbol");

  const obj = {
    a: 1,
    b: 2,
    c: 3,
    [symbol]: 4
  };

  expect(o.size(obj)).toBe(3);
});

test("some", () => {
  expect(o.some({ a: 1, b: "a" }, is.string)).toBeTrue();
  expect(o.some({ a: 1, b: 2 }, is.string)).toBeFalse();
});

test.each([
  {
    expected: {
      a: 1,
      b: 2,
      c: 3
    },
    obj: o.fromEntries.exhaustive([
      ["a", 1],
      ["c", 3],
      ["b", 2]
    ])
  },
  {
    compareFn(x: number, y: number): number {
      return x - y;
    },
    expected: {
      a: 1,
      b: 2,
      c: 3
    },
    obj: o.fromEntries.exhaustive([
      ["a", 1],
      ["c", 3],
      ["b", 2]
    ])
  },
  {
    compareFn(x: number, y: number): number {
      return y - x;
    },
    expected: {
      a: 3,
      b: 2,
      c: 1
    },
    obj: o.fromEntries.exhaustive([
      ["a", 3],
      ["c", 1],
      ["b", 2]
    ])
  }
])("sort", ({ compareFn, expected, obj }) => {
  expect(o.sort(obj, compareFn)).toStrictEqual(expected);
});

test("unfreeze", () => {
  interface TestInterface {
    readonly value: number;
  }

  const obj1: TestInterface = { value: 1 };

  const obj2 = o.unfreeze(obj1);

  const typeCheck1: Equals<typeof obj1, { readonly value: number }> = 1;

  const typeCheck2: Equals<typeof obj2, { value: number }> = 1;

  expect(obj1).toBeSameAs(obj2);
  expect(typeCheck1).toBe(1);
  expect(typeCheck2).toBe(1);
});
