import { AssertionError, as, createValidationObject, fn, is } from "@";
import type { Callable, unknowns } from "@";

function createSubtest(inlineAssertion: Callable, ...args: unknowns) {
  return (value: unknown) => (): void => {
    if (inlineAssertion(value, ...args) === value) {
      // Passed
    } else throw new Error("Sample error");
  };
}

test("array", () => {
  const subtest = createSubtest(as.array);

  expect(subtest([1])).not.toThrow();
  expect(subtest(["a"])).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
});

test("array.of", () => {
  const subtest = createSubtest(as.array.of, is.number);

  expect(subtest([1])).not.toThrow();
  expect(subtest(["a"])).toThrow(AssertionError);
  expect(subtest(1)).toThrow(AssertionError);
});

test("byGuard", () => {
  const subtest = createSubtest(as.byGuard, is.string);

  expect(subtest("a")).not.toThrow();
  expect(subtest("")).not.toThrow();
  expect(subtest(undefined)).toThrow(AssertionError);
  expect(subtest(1)).toThrow(AssertionError);
});

test("callable", () => {
  const subtest = createSubtest(as.callable);

  class TestClass {}

  expect(subtest(TestClass)).not.toThrow();
  expect(subtest(fn.noop)).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("enumeration", () => {
  const TestEnumVO = createValidationObject({ 1: 1, a: "a" });

  const subtest = createSubtest(as.enumeration, TestEnumVO);

  expect(subtest(1)).not.toThrow();
  expect(subtest("a")).not.toThrow();
  expect(subtest("1")).toThrow(AssertionError);
  expect(subtest("b")).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("indexedObject", () => {
  const subtest = createSubtest(as.indexedObject);

  expect(subtest({ a: 1 })).not.toThrow();
  expect(subtest({ a: "a" })).not.toThrow();
  expect(subtest(1)).toThrow(AssertionError);
  expect(subtest(null)).toThrow(AssertionError);
});

test("indexedObject.of", () => {
  const subtest = createSubtest(as.indexedObject.of, is.number);

  expect(subtest({ a: 1 })).not.toThrow();
  expect(subtest({ a: "a" })).toThrow(AssertionError);
  expect(subtest(1)).toThrow(AssertionError);
  expect(subtest(null)).toThrow(AssertionError);
});

test("instanceOf", () => {
  class TestClass {}

  const subtest = createSubtest(as.instanceOf, TestClass);

  expect(subtest(new TestClass())).not.toThrow();
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("instancesOf", () => {
  class TestClass {}

  const subtest = createSubtest(as.instancesOf, TestClass);

  expect(subtest([new TestClass()])).not.toThrow();
  expect(subtest([{}])).toThrow(AssertionError);
  expect(subtest([undefined])).toThrow(AssertionError);
});

test("map", () => {
  const subtest = createSubtest(as.map);

  expect(subtest(new Map([["a", 1]]))).not.toThrow();
  expect(subtest(new Map([[1, 1]]))).not.toThrow();
  expect(subtest(new Map([["a", "a"]]))).not.toThrow();
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("map.of", () => {
  const subtest = createSubtest(as.map.of, is.string, is.number);

  expect(subtest(new Map([["a", 1]]))).not.toThrow();
  expect(subtest(new Map([[1, 1]]))).toThrow(AssertionError);
  expect(subtest(new Map([["a", "a"]]))).toThrow(AssertionError);
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("not.empty", () => {
  const subtest = createSubtest(as.not.empty);

  expect(subtest(1)).not.toThrow();
  expect(subtest(null)).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("set", () => {
  const subtest = createSubtest(as.set);

  expect(subtest(new Set(["a"]))).not.toThrow();
  expect(subtest(new Set([1]))).not.toThrow();
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});

test("set.of", () => {
  const subtest = createSubtest(as.set.of, is.string);

  expect(subtest(new Set(["a"]))).not.toThrow();
  expect(subtest(new Set([1]))).toThrow(AssertionError);
  expect(subtest({})).toThrow(AssertionError);
  expect(subtest(undefined)).toThrow(AssertionError);
});
