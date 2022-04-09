import { AssertionError } from "@/errors/AssertionError";
import * as fn from "@/function";
import * as is from "@/guards";
import { createValidationObject } from "@/helpers";
import * as as from "@/inline-assertions";
import type { unknowns } from "@/types/core";
import type { Callable } from "@/types/function";

function createSubtest(inlineAssertion: Callable, ...args: unknowns) {
  return (value: unknown) => (): void => {
    if (inlineAssertion(value, ...args) === value) {
      // Passed
    } else throw new Error();
  };
}

test("not", () => {
  expect(as.not).toThrow(new Error("Not implemented"));
});

test("array", () => {
  const subtest = createSubtest(as.array);

  expect(subtest([1])).not.toThrow();
  expect(subtest(["a"])).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
});

test("array.of", () => {
  const subtest = createSubtest(as.array.of, is.number);

  expect(subtest([1])).not.toThrow();
  expect(subtest(["a"])).toThrow(new AssertionError());
  expect(subtest(1)).toThrow(new AssertionError());
});

test("boolean", () => {
  const subtest = createSubtest(as.boolean);

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
    as.byGuard(1, is.string, error);
  }).toThrow(expected);
});

test("callable", () => {
  const subtest = createSubtest(as.callable);

  class TestClass {}

  expect(subtest(TestClass)).not.toThrow();
  expect(subtest(fn.noop)).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("empty", () => {
  const subtest = createSubtest(as.empty);

  expect(subtest(null)).not.toThrow();
  expect(subtest(undefined)).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
});

test("not.empty", () => {
  const subtest = createSubtest(as.not.empty);

  expect(subtest(1)).not.toThrow();
  expect(subtest(null)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("enumeration", () => {
  const TestEnumVO = createValidationObject({ 1: 1, a: "a" });

  const subtest = createSubtest(as.enumeration, TestEnumVO);

  expect(subtest(1)).not.toThrow();
  expect(subtest("a")).not.toThrow();
  expect(subtest("1")).toThrow(new AssertionError());
  expect(subtest("b")).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("indexedObject", () => {
  const subtest = createSubtest(as.indexedObject);

  expect(subtest({ a: 1 })).not.toThrow();
  expect(subtest({ a: "a" })).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
  expect(subtest(null)).toThrow(new AssertionError());
});

test("indexedObject.of", () => {
  const subtest = createSubtest(as.indexedObject.of, is.number);

  expect(subtest({ a: 1 })).not.toThrow();
  expect(subtest({ a: "a" })).toThrow(new AssertionError());
  expect(subtest(1)).toThrow(new AssertionError());
  expect(subtest(null)).toThrow(new AssertionError());
});

test("instance", () => {
  class TestClass {}

  const subtest = createSubtest(as.instance, TestClass);

  expect(subtest(new TestClass())).not.toThrow();
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("instances", () => {
  class TestClass {}

  const subtest = createSubtest(as.instances, TestClass);

  expect(subtest([new TestClass()])).not.toThrow();
  expect(subtest([{}])).toThrow(new AssertionError());
  expect(subtest([undefined])).toThrow(new AssertionError());
});

test("map", () => {
  const subtest = createSubtest(as.map);

  expect(subtest(new Map([["a", 1]]))).not.toThrow();
  expect(subtest(new Map([[1, 1]]))).not.toThrow();
  expect(subtest(new Map([["a", "a"]]))).not.toThrow();
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("map.of", () => {
  const subtest = createSubtest(as.map.of, is.string, is.number);

  expect(subtest(new Map([["a", 1]]))).not.toThrow();
  expect(subtest(new Map([[1, 1]]))).toThrow(new AssertionError());
  expect(subtest(new Map([["a", "a"]]))).toThrow(new AssertionError());
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("numStr", () => {
  const subtest = createSubtest(as.numStr);

  expect(subtest(1)).not.toThrow();
  expect(subtest("a")).not.toThrow();
  expect(subtest(Number.NaN)).toThrow(new AssertionError());
  expect(subtest(true)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("number", () => {
  const subtest = createSubtest(as.number);

  expect(subtest(1)).not.toThrow();
  expect(subtest("a")).toThrow(new AssertionError());
  expect(subtest(Number.NaN)).toThrow(new AssertionError());
  expect(subtest(true)).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("object", () => {
  const subtest = createSubtest(as.object);

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
  const subtest = createSubtest(as.set);

  expect(subtest(new Set(["a"]))).not.toThrow();
  expect(subtest(new Set([1]))).not.toThrow();
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("set.of", () => {
  const subtest = createSubtest(as.set.of, is.string);

  expect(subtest(new Set(["a"]))).not.toThrow();
  expect(subtest(new Set([1]))).toThrow(new AssertionError());
  expect(subtest({})).toThrow(new AssertionError());
  expect(subtest(undefined)).toThrow(new AssertionError());
});

test("string", () => {
  const subtest = createSubtest(as.string);

  expect(subtest("a")).not.toThrow();
  expect(subtest("")).not.toThrow();
  expect(subtest(undefined)).toThrow(new AssertionError());
  expect(subtest(1)).toThrow(new AssertionError());
});

test("stringU", () => {
  const subtest = createSubtest(as.stringU);

  expect(subtest("a")).not.toThrow();
  expect(subtest(undefined)).not.toThrow();
  expect(subtest("")).toThrow(new AssertionError());
  expect(subtest(1)).toThrow(new AssertionError());
});

test("symbol", () => {
  const subtest = createSubtest(as.symbol);

  expect(subtest(Symbol("TestSymbol"))).not.toThrow();
  expect(subtest(1)).toThrow(new AssertionError());
});
