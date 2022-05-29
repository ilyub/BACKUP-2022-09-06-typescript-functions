import { assert, AssertionError, fn, is, createValidationObject } from "@";
import type { unknowns, Callable } from "@";

function createSubtest(assertion: Callable, ...args: unknowns) {
  return (value: unknown) => (): void => {
    assertion(value, ...args);
  };
}

test("array", () => {
  const subtest = createSubtest(assert.array);

  expect(subtest([1])).not.toThrow();
  expect(subtest(["a"])).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
});

test("array.of", () => {
  const subtest = createSubtest(assert.array.of, is.number);

  expect(subtest([1])).not.toThrow();
  expect(subtest(["a"])).toThrow(AssertionError);
  expect(subtest(1)).toThrow(AssertionError);
});

test("boolean", () => {
  const subtest = createSubtest(assert.boolean);

  expect(subtest(true)).not.toThrow();
  expect(subtest(false)).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test.each([
  { expected: new AssertionError() },
  { error: "Test error", expected: new AssertionError("Test error") },
  {
    error: (): Error => new Error("Test error"),
    expected: new Error("Test error")
  }
])("byGuard", ({ error, expected }) => {
  expect(() => {
    assert.byGuard(1, is.string, error);
  }).toThrow(expected);
});

test("callable", () => {
  const subtest = createSubtest(assert.callable);

  class TestClass {}

  expect(subtest(TestClass)).not.toThrow();
  expect(subtest(fn.noop)).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("empty", () => {
  const subtest = createSubtest(assert.empty);

  expect(subtest(null)).not.toThrow();
  expect(subtest(undefined)).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
});

test("enumeration", () => {
  const TestEnumVO = createValidationObject({ 1: 1, a: "a" });

  const subtest = createSubtest(assert.enumeration, TestEnumVO);

  expect(subtest(1)).not.toThrow();
  expect(subtest("a")).not.toThrow();
  expect(subtest("1")).toThrow(AssertionError);
  expect(subtest("b")).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("indexedObject", () => {
  const subtest = createSubtest(assert.indexedObject);

  expect(subtest({ a: 1 })).not.toThrow();
  expect(subtest({ a: "a" })).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
  expect(subtest(null)).toThrow(AssertionError);
});

test("indexedObject.of", () => {
  const subtest = createSubtest(assert.indexedObject.of, is.number);

  expect(subtest({ a: 1 })).not.toThrow();
  expect(subtest({ a: "a" })).toThrow(AssertionError);
  expect(subtest(1)).toThrow(AssertionError);
  expect(subtest(null)).toThrow(AssertionError);
});

test("instance", () => {
  class TestClass {}

  const subtest = createSubtest(assert.instance, TestClass);

  expect(subtest(new TestClass())).not.toThrow();
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("instances", () => {
  class TestClass {}

  const subtest = createSubtest(assert.instances, TestClass);

  expect(subtest([new TestClass()])).not.toThrow();
  expect(subtest([{}])).toThrow(AssertionError);
  expect(subtest([undefined])).toThrow(AssertionError);
});

test("map", () => {
  const subtest = createSubtest(assert.map);

  expect(subtest(new Map([["a", 1]]))).not.toThrow();
  expect(subtest(new Map([[1, 1]]))).not.toThrow();
  expect(subtest(new Map([["a", "a"]]))).not.toThrow();
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("map.of", () => {
  const subtest = createSubtest(assert.map.of, is.string, is.number);

  expect(subtest(new Map([["a", 1]]))).not.toThrow();
  expect(subtest(new Map([[1, 1]]))).toThrow(AssertionError);
  expect(subtest(new Map([["a", "a"]]))).toThrow(AssertionError);
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("not", () => {
  expect(assert.not).toThrow(new Error("Not implemented"));
});

test("not.empty", () => {
  const subtest = createSubtest(assert.not.empty);

  expect(subtest(1)).not.toThrow();
  expect(subtest(null)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("numStr", () => {
  const subtest = createSubtest(assert.numStr);

  expect(subtest(1)).not.toThrow();
  expect(subtest("a")).not.toThrow();
  expect(subtest(Number.NaN)).toThrow(AssertionError);
  expect(subtest(true)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("number", () => {
  const subtest = createSubtest(assert.number);

  expect(subtest(1)).not.toThrow();
  expect(subtest("a")).toThrow(AssertionError);
  expect(subtest(Number.NaN)).toThrow(AssertionError);
  expect(subtest(true)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("object", () => {
  const subtest = createSubtest(assert.object);

  expect(subtest({ num: 1, str: "a" })).not.toThrow();
  expect(subtest({ num: 1 })).not.toThrow();
  expect(subtest({ num: 1, str: true })).not.toThrow();
  expect(subtest({ num: true, str: "a" })).not.toThrow();
  expect(subtest({ str: "a" })).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
  expect(subtest(null)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("set", () => {
  const subtest = createSubtest(assert.set);

  expect(subtest(new Set(["a"]))).not.toThrow();
  expect(subtest(new Set([1]))).not.toThrow();
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("set.of", () => {
  const subtest = createSubtest(assert.set.of, is.string);

  expect(subtest(new Set(["a"]))).not.toThrow();
  expect(subtest(new Set([1]))).toThrow(AssertionError);
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("string", () => {
  const subtest = createSubtest(assert.string);

  expect(subtest("a")).not.toThrow();
  expect(subtest("")).not.toThrow();
  expect(subtest(undefined)).toThrow(AssertionError);
  expect(subtest(1)).toThrow(AssertionError);
});

test("stringU", () => {
  const subtest = createSubtest(assert.stringU);

  expect(subtest("a")).not.toThrow();
  expect(subtest(undefined)).not.toThrow();
  expect(subtest("")).toThrow(AssertionError);
  expect(subtest(1)).toThrow(AssertionError);
});

test("symbol", () => {
  const subtest = createSubtest(assert.symbol);

  expect(subtest(Symbol("test-symbol"))).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
});

test("toBeFalse", () => {
  const subtest = createSubtest(assert.toBeFalse);

  expect(subtest(false)).not.toThrow();
  expect(subtest(true)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("toBeTrue", () => {
  const subtest = createSubtest(assert.toBeTrue);

  expect(subtest(true)).not.toThrow();
  expect(subtest(false)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("wrapError", () => {
  // eslint-disable-next-line deprecation/deprecation -- Wait for next major version
  expect(assert.wrapError(1)()).toBe(1);
});
