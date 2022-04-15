import { fn, is, createValidationObject } from "@";

test("and", () => {
  expect(is.and(undefined, is.booleanU, is.numberU)).toBeTrue();
  expect(is.and(true, is.booleanU, is.numberU)).toBeFalse();
  expect(is.and(1, is.booleanU, is.numberU)).toBeFalse();
});

test("and.factory", () => {
  const guard = is.and.factory(is.booleanU, is.numberU, is.stringU);

  expect(guard(undefined)).toBeTrue();
  expect(guard(true)).toBeFalse();
  expect(guard(1)).toBeFalse();
});

test("array", () => {
  expect(is.array([1])).toBeTrue();
  expect(is.array(["a"])).toBeTrue();
  expect(is.array(1)).toBeFalse();
});

test("array.of", () => {
  expect(is.array.of([1], is.number)).toBeTrue();
  expect(is.array.of(["a"], is.number)).toBeFalse();
  expect(is.array.of(1, is.number)).toBeFalse();
});

test("boolean", () => {
  expect(is.boolean(true)).toBeTrue();
  expect(is.boolean(false)).toBeTrue();
  expect(is.boolean(1)).toBeFalse();
  expect(is.boolean(undefined)).toBeFalse();
});

test("callable", () => {
  class TestClass {}

  expect(is.callable(TestClass)).toBeTrue();
  expect(is.callable(fn.noop)).toBeTrue();
  expect(is.callable(1)).toBeFalse();
  expect(is.callable(undefined)).toBeFalse();
});

test("empty", () => {
  expect(is.empty(null)).toBeTrue();
  expect(is.empty(undefined)).toBeTrue();
  expect(is.empty(1)).toBeFalse();
});

test("enumeration", () => {
  const TestEnumVO = createValidationObject({ 1: 1, a: "a" });

  expect(is.enumeration(1, TestEnumVO)).toBeTrue();
  expect(is.enumeration("a", TestEnumVO)).toBeTrue();
  expect(is.enumeration("1", TestEnumVO)).toBeFalse();
  expect(is.enumeration("b", TestEnumVO)).toBeFalse();
  expect(is.enumeration(undefined, TestEnumVO)).toBeFalse();
});

test("factory", () => {
  const guard = is.factory(is.array.of, is.number);

  expect(guard([1])).toBeTrue();
  expect(guard(["a"])).toBeFalse();
  expect(guard(1)).toBeFalse();
});

test("false", () => {
  expect(is.false(false)).toBeTrue();
  expect(is.false(true)).toBeFalse();
  expect(is.false(undefined)).toBeFalse();
});

test("indexedObject", () => {
  expect(is.indexedObject({ a: 1 })).toBeTrue();
  expect(is.indexedObject({ a: "a" })).toBeTrue();
  expect(is.indexedObject(1)).toBeFalse();
  expect(is.indexedObject(null)).toBeFalse();
});

test("indexedObject.of", () => {
  expect(is.indexedObject.of({ a: 1 }, is.number)).toBeTrue();
  expect(is.indexedObject.of({ a: "a" }, is.number)).toBeFalse();
  expect(is.indexedObject.of(1, is.number)).toBeFalse();
  expect(is.indexedObject.of(null, is.number)).toBeFalse();
});

test("instance", () => {
  class TestClass {}

  expect(is.instance(new TestClass(), TestClass)).toBeTrue();
  expect(is.instance({}, TestClass)).toBeFalse();
  expect(is.instance(undefined, TestClass)).toBeFalse();
});

test("instances", () => {
  class TestClass {}

  expect(is.instances([new TestClass()], TestClass)).toBeTrue();
  expect(is.instances([{}], TestClass)).toBeFalse();
  expect(is.instances([undefined], TestClass)).toBeFalse();
});

test("map", () => {
  expect(is.map(new Map([["a", 1]]))).toBeTrue();
  expect(is.map(new Map([[1, 1]]))).toBeTrue();
  expect(is.map(new Map([["a", "a"]]))).toBeTrue();
  expect(is.map({})).toBeFalse();
  expect(is.map(undefined)).toBeFalse();
});

test("map.of", () => {
  expect(is.map.of(new Map([["a", 1]]), is.string, is.number)).toBeTrue();
  expect(is.map.of(new Map([[1, 1]]), is.string, is.number)).toBeFalse();
  expect(is.map.of(new Map([["a", "a"]]), is.string, is.number)).toBeFalse();
  expect(is.map.of({}, is.string, is.number)).toBeFalse();
  expect(is.map.of(undefined, is.string, is.number)).toBeFalse();
});

test("not", () => {
  expect(is.not(true, is.number)).toBeTrue();
  expect(is.not(1, is.number)).toBeFalse();
});

test("not.factory", () => {
  const guard = is.not.factory(is.number);

  expect(guard(true)).toBeTrue();
  expect(guard(1)).toBeFalse();
});

test("null", () => {
  expect(is.null(null)).toBeTrue();
  expect(is.null(undefined)).toBeFalse();
  expect(is.null(1)).toBeFalse();
});

test("numStr", () => {
  expect(is.numStr(1)).toBeTrue();
  expect(is.numStr("a")).toBeTrue();
  expect(is.numStr(Number.NaN)).toBeFalse();
  expect(is.numStr(true)).toBeFalse();
  expect(is.numStr(undefined)).toBeFalse();
});

test("number", () => {
  expect(is.number(1)).toBeTrue();
  expect(is.number("a")).toBeFalse();
  expect(is.number(Number.NaN)).toBeFalse();
  expect(is.number(true)).toBeFalse();
  expect(is.number(undefined)).toBeFalse();
});

test("object", () => {
  expect(is.object({ num: 1, str: "a" })).toBeTrue();
  expect(is.object({ num: 1 })).toBeTrue();
  expect(is.object({ num: 1, str: true })).toBeTrue();
  expect(is.object({ num: true, str: "a" })).toBeTrue();
  expect(is.object({ str: "a" })).toBeTrue();
  expect(is.object(1)).toBeFalse();
  expect(is.object(null)).toBeFalse();
  expect(is.object(undefined)).toBeFalse();
});

test("object.factory", () => {
  const guard = is.object.factory({ num: is.number }, { str: is.string });

  expect(guard({ num: 1, str: "a" })).toBeTrue();
  expect(guard({ num: 1 })).toBeTrue();
  expect(guard({ num: 1, str: true })).toBeFalse();
  expect(guard({ num: true, str: "a" })).toBeFalse();
  expect(guard({ str: "a" })).toBeFalse();
  expect(guard(1)).toBeFalse();
  expect(guard(null)).toBeFalse();
  expect(guard(undefined)).toBeFalse();
});

test("object.of", () => {
  const guard = is.factory(
    is.object.of,
    { num: is.number },
    { str: is.string }
  );

  expect(guard({ num: 1, str: "a" })).toBeTrue();
  expect(guard({ num: 1 })).toBeTrue();
  expect(guard({ num: 1, str: true })).toBeFalse();
  expect(guard({ num: true, str: "a" })).toBeFalse();
  expect(guard({ str: "a" })).toBeFalse();
  expect(guard(1)).toBeFalse();
  expect(guard(null)).toBeFalse();
  expect(guard(undefined)).toBeFalse();
});

test("or", () => {
  expect(is.or(1, is.boolean, is.number)).toBeTrue();
  expect(is.or(true, is.boolean, is.number)).toBeTrue();
  expect(is.or(undefined, is.boolean, is.number)).toBeFalse();
});

test("or.factory", () => {
  const guard = is.or.factory(is.boolean, is.number, is.string);

  expect(guard(1)).toBeTrue();
  expect(guard(true)).toBeTrue();
  expect(guard(undefined)).toBeFalse();
});

test("set", () => {
  expect(is.set(new Set(["a"]))).toBeTrue();
  expect(is.set(new Set([1]))).toBeTrue();
  expect(is.set({})).toBeFalse();
  expect(is.set(undefined)).toBeFalse();
});

test("set.of", () => {
  expect(is.set.of(new Set(["a"]), is.string)).toBeTrue();
  expect(is.set.of(new Set([1]), is.string)).toBeFalse();
  expect(is.set.of({}, is.string)).toBeFalse();
  expect(is.set.of(undefined, is.string)).toBeFalse();
});

test("string", () => {
  expect(is.string("a")).toBeTrue();
  expect(is.string("")).toBeTrue();
  expect(is.string(undefined)).toBeFalse();
  expect(is.string(1)).toBeFalse();
});

test("stringU", () => {
  expect(is.stringU("a")).toBeTrue();
  expect(is.stringU(undefined)).toBeTrue();
  expect(is.stringU("")).toBeFalse();
  expect(is.stringU(1)).toBeFalse();
});

test("symbol", () => {
  expect(is.symbol(Symbol("TestSymbol"))).toBeTrue();
  expect(is.symbol(1)).toBeFalse();
});

test("true", () => {
  expect(is.true(true)).toBeTrue();
  expect(is.true(false)).toBeFalse();
  expect(is.true(undefined)).toBeFalse();
});

test("tuple", () => {
  expect(is.tuple([true, 1], is.boolean, is.number)).toBeTrue();
  expect(is.tuple([undefined, 1], is.boolean, is.number)).toBeFalse();
  expect(is.tuple({}, is.boolean, is.number)).toBeFalse();
});

test("tuple.factory", () => {
  const guard = is.tuple.factory(is.boolean, is.number, is.string);

  expect(guard([true, 1, "a"])).toBeTrue();
  expect(guard([undefined, 1, "a"])).toBeFalse();
  expect(guard({})).toBeFalse();
});

test("undefined", () => {
  expect(is.undefined(1)).toBeFalse();
  expect(is.undefined(null)).toBeFalse();
  expect(is.undefined(undefined)).toBeTrue();
});

test("unknown", () => {
  expect(is.unknown(1)).toBeTrue();
  expect(is.unknown(null)).toBeTrue();
  expect(is.unknown(undefined)).toBeTrue();
});
