import * as assert from "@/assertions";
import { AssertionError } from "@/errors/AssertionError";
import * as fn from "@/function";
import * as is from "@/guards";
import { createValidationObject } from "@/helpers";
import type { unknowns } from "@/types/core";
import type { Callable } from "@/types/function";

function createSubtest(assertion: Callable, ...args: unknowns) {
  return (value: unknown) => (): void => {
    assertion(value, ...args);
  };
}

test("not", () => {
  expect(assert.not).toThrow(new Error("Not implemented"));
});

test("array", () => {
  const subtest = createSubtest(assert.array);

  expect(subtest([1])).not.toThrow();
  expect(subtest(["a"])).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
});

test("array.of", () => {
  const subtest = createSubtest(assert.array.of, is.number);

  expect(subtest([1])).not.toThrow();
  expect(subtest(["a"])).toThrow(new AssertionError());
  expect(subtest(1)).toThrow(new AssertionError());
});

test("boolean", () => {
  const subtest = createSubtest(assert.boolean);

  expect(subtest(true)).not.toThrow();
  expect(subtest(false)).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
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
  expect(subtest(1)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("empty", () => {
  const subtest = createSubtest(assert.empty);

  expect(subtest(null)).not.toThrow();
  expect(subtest(undefined)).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
});

test("not.empty", () => {
  const subtest = createSubtest(assert.not.empty);

  expect(subtest(1)).not.toThrow();
  expect(subtest(null)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("enumeration", () => {
  const TestEnumVO = createValidationObject({ a: "a" });

  const subtest = createSubtest(assert.enumeration, TestEnumVO);

  expect(subtest("a")).not.toThrow();
  expect(subtest("b")).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("indexedObject", () => {
  const subtest = createSubtest(assert.indexedObject);

  expect(subtest({ a: 1 })).not.toThrow();
  expect(subtest({ a: "a" })).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
  expect(subtest(null)).toThrow(new AssertionError());
});

test("indexedObject.of", () => {
  const subtest = createSubtest(assert.indexedObject.of, is.number);

  expect(subtest({ a: 1 })).not.toThrow();
  expect(subtest({ a: "a" })).toThrow(new AssertionError());
  expect(subtest(1)).toThrow(new AssertionError());
  expect(subtest(null)).toThrow(new AssertionError());
});

test("instance", () => {
  class TestClass {}

  const subtest = createSubtest(assert.instance, TestClass);

  expect(subtest(new TestClass())).not.toThrow();
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("instances", () => {
  class TestClass {}

  const subtest = createSubtest(assert.instances, TestClass);

  expect(subtest([new TestClass()])).not.toThrow();
  expect(subtest([{}])).toThrow(new AssertionError());
  expect(subtest([undefined])).toThrow(new AssertionError());
});

test("map", () => {
  const subtest = createSubtest(assert.map);

  expect(subtest(new Map([["a", 1]]))).not.toThrow();
  expect(subtest(new Map([[1, 1]]))).not.toThrow();
  expect(subtest(new Map([["a", "a"]]))).not.toThrow();
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("map.of", () => {
  const subtest = createSubtest(assert.map.of, is.string, is.number);

  expect(subtest(new Map([["a", 1]]))).not.toThrow();
  expect(subtest(new Map([[1, 1]]))).toThrow(new AssertionError());
  expect(subtest(new Map([["a", "a"]]))).toThrow(new AssertionError());
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("numStr", () => {
  const subtest = createSubtest(assert.numStr);

  expect(subtest(1)).not.toThrow();
  expect(subtest("a")).not.toThrow();
  expect(subtest(Number.NaN)).toThrow(new AssertionError());
  expect(subtest(true)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("number", () => {
  const subtest = createSubtest(assert.number);

  expect(subtest(1)).not.toThrow();
  expect(subtest("a")).toThrow(new AssertionError());
  expect(subtest(Number.NaN)).toThrow(new AssertionError());
  expect(subtest(true)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("object", () => {
  const subtest = createSubtest(assert.object);

  expect(subtest({ num: 1, str: "a" })).not.toThrow();
  expect(subtest({ num: 1 })).not.toThrow();
  expect(subtest({ num: 1, str: true })).not.toThrow();
  expect(subtest({ num: true, str: "a" })).not.toThrow();
  expect(subtest({ str: "a" })).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
  expect(subtest(null)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("set", () => {
  const subtest = createSubtest(assert.set);

  expect(subtest(new Set(["a"]))).not.toThrow();
  expect(subtest(new Set([1]))).not.toThrow();
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("set.of", () => {
  const subtest = createSubtest(assert.set.of, is.string);

  expect(subtest(new Set(["a"]))).not.toThrow();
  expect(subtest(new Set([1]))).toThrow(new AssertionError());
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("string", () => {
  const subtest = createSubtest(assert.string);

  expect(subtest("a")).not.toThrow();
  expect(subtest("")).not.toThrow();
  expect(subtest(undefined)).toThrow(new AssertionError());
  expect(subtest(1)).toThrow(new AssertionError());
});

test("stringU", () => {
  const subtest = createSubtest(assert.stringU);

  expect(subtest("a")).not.toThrow();
  expect(subtest(undefined)).not.toThrow();
  expect(subtest("")).toThrow(new AssertionError());
  expect(subtest(1)).toThrow(new AssertionError());
});

test("symbol", () => {
  const subtest = createSubtest(assert.symbol);

  expect(subtest(Symbol("TestSymbol"))).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
});

test("toBeFalse", () => {
  const subtest = createSubtest(assert.toBeFalse);

  expect(subtest(false)).not.toThrow();
  expect(subtest(true)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("toBeTrue", () => {
  const subtest = createSubtest(assert.toBeTrue);

  expect(subtest(true)).not.toThrow();
  expect(subtest(false)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});
