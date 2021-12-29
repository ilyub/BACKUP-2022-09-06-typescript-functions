import * as o from "@/object";

it("assign", () => {
  const obj = { a: 1, b: 2 };

  const source = { b: 3 };

  const expected = { a: 1, b: 3 };

  expect(o.assign(obj, source)).toStrictEqual(expected);
  expect(obj).toStrictEqual(expected);
});

it("clone", () => {
  const obj1 = { a: 1 };

  const obj2 = o.clone(obj1);

  expect(obj1).toStrictEqual({ a: 1 });
  expect(obj2).toStrictEqual({ a: 1 });
  expect(obj2).not.toBeSameAs(obj1);
});

it("defineProperty", () => {
  const obj = { a: 1 };

  const descriptor: o.Descriptor = {
    configurable: false,
    enumerable: false,
    get: () => 2
  };

  expect(obj.a).toStrictEqual(1);
  o.defineProperty(obj, "a", descriptor);
  expect(obj.a).toStrictEqual(2);
});

it("entries", () => {
  const obj = { a: 1, b: 2, c: 3 };

  const expected = [
    ["a", 1],
    ["b", 2],
    ["c", 3]
  ];

  expect(o.entries(obj)).toStrictEqual(expected);
  expect(o.entries(obj)).toStrictEqual(expected);
});

it("extend", () => {
  const obj = { a: 1 };

  const source = { b: 2 };

  const expected = { a: 1, b: 2 };

  expect(o.extend(obj, source)).toStrictEqual(expected);
  expect(obj).toStrictEqual(expected);
});

it("filter", () => {
  const obj = { a: 1, b: 2, c: 3 };

  const expected = { a: 1, c: 3 };

  expect(o.filter(obj, callback)).toStrictEqual(expected);

  function callback(value: number): boolean {
    return value % 2 === 1;
  }
});

it("freeze", () => {
  const obj1 = {};

  const obj2 = o.freeze(obj1);

  expect(obj1).toBeSameAs(obj2);
});

it("freeze.deep", () => {
  const obj1 = {};

  const obj2 = o.freeze.deep(obj1);

  expect(obj1).toBeSameAs(obj2);
});

it("fromEntries", () => {
  expect(o.fromEntries([["a", 1]])).toStrictEqual({ a: 1 });
  expect(o.fromEntries.exhaustive([["a", 1]])).toStrictEqual({ a: 1 });
});

it("getPrototypeOf", () => {
  class TestClass {
    public value = 1;
  }

  const obj = new TestClass();

  expect(o.getPrototypeOf(TestClass)).toBeUndefined();
  expect(o.getPrototypeOf(obj)).toBeSameAs(TestClass.prototype);
});

it("hasOwnProp", () => {
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
    const symbol1 = Symbol("SampleSymbol1");

    const symbol2 = Symbol("SampleSymbol2");

    expect(o.hasOwnProp(symbol1, { [symbol1]: 1 })).toBeTrue();
    expect(o.hasOwnProp(symbol1, { [symbol1]: undefined })).toBeTrue();
    expect(o.hasOwnProp(symbol2, { [symbol1]: 1 })).toBeFalse();
  }
});

it("keys", () => {
  const obj = { a: 1, b: 2, c: 3 };

  const expected = ["a", "b", "c"];

  expect(o.keys(obj)).toStrictEqual(expected);
});

it("map", () => {
  const obj = { a: "1", b: "12", c: "123" };

  const expected = { a: 1, b: 2, c: 3 };

  expect(o.map(obj, callback)).toStrictEqual(expected);

  function callback(value: string): number {
    return value.length;
  }
});

it("merge", () => {
  expect(
    o.merge(
      { a: 1, b: [1], c: "a" },
      { b: 2, c: [2], d: "b" },
      { c: 3, d: [3], e: "c" }
    )
  ).toStrictEqual({
    a: 1,
    b: [[1], 2],
    c: ["a", [2], 3],
    d: ["b", [3]],
    e: "c"
  });
});

it("omit", () => {
  expect(o.omit({ a: 1, b: 2, c: 3 }, "b")).toStrictEqual({ a: 1, c: 3 });
});

it("removeUndefinedKeys", () => {
  const obj = { a: 1, b: undefined };

  const expected = { a: 1 };

  expect(o.removeUndefinedKeys(obj)).toStrictEqual(expected);
});

it("size", () => {
  const symbol = Symbol("SampleSymbol");

  const obj = { a: 1, b: 2, c: 3, [symbol]: 4 };

  expect(o.size(obj)).toStrictEqual(3);
});

it("sort", () => {
  {
    const obj = o.fromEntries.exhaustive([
      ["a", 1],
      ["c", 3],
      ["b", 2]
    ]);

    const expected = { a: 1, b: 2, c: 3 };

    expect(o.sort(obj)).toStrictEqual(expected);
  }

  {
    const obj = o.fromEntries.exhaustive([
      ["a", 3],
      ["c", 1],
      ["b", 2]
    ]);

    const expected = { a: 3, b: 2, c: 1 };

    expect(o.sort(obj, (x, y) => y[1] - x[1])).toStrictEqual(expected);
  }
});

it("unfreeze", () => {
  const obj1 = {};

  const obj2 = o.unfreeze(obj1);

  expect(obj1).toBeSameAs(obj2);
});

it("unfreeze.deep", () => {
  const obj1 = {};

  const obj2 = o.unfreeze.deep(obj1);

  expect(obj1).toBeSameAs(obj2);
});

it("values", () => {
  const obj = { a: 1, b: 2, c: 3 };

  const expected = [1, 2, 3];

  expect(o.values(obj)).toStrictEqual(expected);
});
