/* eslint-disable @skylib/custom/functions/is-array-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-boolean-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-callable-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-empty-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-enumeration-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-false-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-indexedObject-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-instanceOf-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-map-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-null-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-numStr-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-number-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-object-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-set-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-string-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-symbol-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-true-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-tuple-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/is-undefined-arg-type -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-array -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-boolean -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-empty -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-null -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-numStr -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-number -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-object -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-string -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-symbol -- Ok */

/* eslint-disable @skylib/custom/functions/no-unnecessary-is-undefined -- Ok */

import { ReadonlyMap, ReadonlySet, fn, is } from "@";

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
  enum TestEnum {
    a = 1,
    b = "a"
  }

  expect(is.enumeration(1, TestEnum)).toBeTrue();
  expect(is.enumeration("a", TestEnum)).toBeTrue();
  expect(is.enumeration("1", TestEnum)).toBeFalse();
  expect(is.enumeration("b", TestEnum)).toBeFalse();
  expect(is.enumeration(undefined, TestEnum)).toBeFalse();
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

test("instanceOf", () => {
  class TestClass {}

  expect(is.instanceOf(new TestClass(), TestClass)).toBeTrue();
  expect(is.instanceOf({}, TestClass)).toBeFalse();
  expect(is.instanceOf(undefined, TestClass)).toBeFalse();
});

test("instancesOf", () => {
  class TestClass {}

  expect(is.instancesOf([new TestClass()], TestClass)).toBeTrue();
  expect(is.instancesOf([{}], TestClass)).toBeFalse();
  expect(is.instancesOf([undefined], TestClass)).toBeFalse();
});

test("map", () => {
  expect(is.map(new ReadonlyMap([["a", 1]]))).toBeTrue();
  expect(is.map(new ReadonlyMap([[1, 1]]))).toBeTrue();
  expect(is.map(new ReadonlyMap([["a", "a"]]))).toBeTrue();
  expect(is.map({})).toBeFalse();
  expect(is.map(undefined)).toBeFalse();
});

test("map.of", () => {
  expect(
    is.map.of(new ReadonlyMap([["a", 1]]), is.string, is.number)
  ).toBeTrue();
  expect(
    is.map.of(new ReadonlyMap([[1, 1]]), is.string, is.number)
  ).toBeFalse();
  expect(
    is.map.of(new ReadonlyMap([["a", "a"]]), is.string, is.number)
  ).toBeFalse();
  expect(is.map.of({}, is.string, is.number)).toBeFalse();
  expect(is.map.of(undefined, is.string, is.number)).toBeFalse();
});

test("never", () => {
  expect(is.never(1)).toBeFalse();
  expect(is.never(null)).toBeFalse();
  expect(is.never(undefined)).toBeFalse();
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
  expect(is.set(new ReadonlySet(["a"]))).toBeTrue();
  expect(is.set(new ReadonlySet([1]))).toBeTrue();
  expect(is.set({})).toBeFalse();
  expect(is.set(undefined)).toBeFalse();
});

test("set.of", () => {
  expect(is.set.of(new ReadonlySet(["a"]), is.string)).toBeTrue();
  expect(is.set.of(new ReadonlySet([1]), is.string)).toBeFalse();
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
  expect(is.symbol(Symbol("test-symbol"))).toBeTrue();
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
