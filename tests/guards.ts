import * as is from "@/guards";
import { createValidationObject } from "@/types/core";

class TestClass {
  public value = 1;
}

type TestEnum = 1 | "a";

const TestEnumVO = createValidationObject<TestEnum>({ 1: 1, a: "a" });

const testClass = new TestClass();

function testFunction(): boolean {
  return true;
}

it("and", () => {
  expect(is.and(undefined, is.booleanU, is.numberU)).toBeTrue();
  expect(is.and(true, is.booleanU, is.numberU)).toBeFalse();
  expect(is.and(1, is.booleanU, is.numberU)).toBeFalse();
});

it("and.factory", () => {
  const guard = is.and.factory(is.booleanU, is.numberU, is.stringU);

  expect(guard(undefined)).toBeTrue();
  expect(guard(true)).toBeFalse();
  expect(guard(1)).toBeFalse();
});

it("not", () => {
  expect(is.not(true, is.number)).toBeTrue();
  expect(is.not(1, is.number)).toBeFalse();
});

it("not.factory", () => {
  const guard = is.not.factory(is.number);

  expect(guard(true)).toBeTrue();
  expect(guard(1)).toBeFalse();
});

it("or", () => {
  expect(is.or(1, is.boolean, is.number)).toBeTrue();
  expect(is.or(true, is.boolean, is.number)).toBeTrue();
  expect(is.or(undefined, is.boolean, is.number)).toBeFalse();
});

it("or.factory", () => {
  const guard = is.or.factory(is.boolean, is.number, is.string);

  expect(guard(1)).toBeTrue();
  expect(guard(true)).toBeTrue();
  expect(guard(undefined)).toBeFalse();
});

it("array", () => {
  expect(is.array([1])).toBeTrue();
  expect(is.array(["a"])).toBeTrue();
  expect(is.array(1)).toBeFalse();
});

it("array.of", () => {
  const guard = is.factory(is.array.of, is.number);

  expect(guard([1])).toBeTrue();
  expect(guard(["a"])).toBeFalse();
  expect(guard(1)).toBeFalse();
});

it("boolean", () => {
  expect(is.boolean(1)).toBeFalse();
  expect(is.boolean(true)).toBeTrue();
  expect(is.boolean(false)).toBeTrue();
  expect(is.boolean(undefined)).toBeFalse();
});

it("booleanU", () => {
  expect(is.booleanU(1)).toBeFalse();
  expect(is.booleanU(true)).toBeTrue();
  expect(is.booleanU(false)).toBeTrue();
  expect(is.booleanU(undefined)).toBeTrue();
});

it("callable", () => {
  expect(is.callable(TestClass)).toBeTrue();
  expect(is.callable(testFunction)).toBeTrue();
  expect(is.callable(1)).toBeFalse();
  expect(is.callable(undefined)).toBeFalse();
});

it("callableU", () => {
  expect(is.callableU(TestClass)).toBeTrue();
  expect(is.callableU(testFunction)).toBeTrue();
  expect(is.callableU(1)).toBeFalse();
  expect(is.callableU(undefined)).toBeTrue();
});

it("empty", () => {
  expect(is.empty(1)).toBeFalse();
  expect(is.empty(null)).toBeTrue();
  expect(is.empty(undefined)).toBeTrue();
});

it("enumeration", () => {
  expect(is.enumeration(1, TestEnumVO)).toBeTrue();
  expect(is.enumeration("a", TestEnumVO)).toBeTrue();
  expect(is.enumeration("b", TestEnumVO)).toBeFalse();
  expect(is.enumeration(undefined, TestEnumVO)).toBeFalse();
});

it("enumerationU", () => {
  expect(is.enumerationU(1, TestEnumVO)).toBeTrue();
  expect(is.enumerationU("a", TestEnumVO)).toBeTrue();
  expect(is.enumerationU("b", TestEnumVO)).toBeFalse();
  expect(is.enumerationU(undefined, TestEnumVO)).toBeTrue();
});

it("false", () => {
  expect(is.false(true)).toBeFalse();
  expect(is.false(false)).toBeTrue();
  expect(is.false(undefined)).toBeFalse();
});

it("indexedObject", () => {
  expect(is.indexedObject({ a: 1 })).toBeTrue();
  expect(is.indexedObject({ a: "a" })).toBeTrue();
  expect(is.indexedObject(1)).toBeFalse();
  expect(is.indexedObject(null)).toBeFalse();
});

it("indexedObject.of", () => {
  const guard = is.factory(is.indexedObject.of, is.number);

  expect(guard({ a: 1 })).toBeTrue();
  expect(guard({ a: "a" })).toBeFalse();
  expect(guard(1)).toBeFalse();
  expect(guard(null)).toBeFalse();
});

it("instance", () => {
  const guard = is.factory(is.instance, TestClass);

  expect(guard(testClass)).toBeTrue();
  expect(guard({})).toBeFalse();
});

it("instances", () => {
  const guard = is.factory(is.instances, TestClass);

  expect(guard([testClass])).toBeTrue();
  expect(guard([{}])).toBeFalse();
  expect(guard({})).toBeFalse();
});

it("null", () => {
  expect(is.null(1)).toBeFalse();
  expect(is.null(null)).toBeTrue();
  expect(is.null(undefined)).toBeFalse();
});

it("numStr", () => {
  expect(is.numStr(1)).toBeTrue();
  expect(is.numStr("a")).toBeTrue();
  expect(is.numStr(true)).toBeFalse();
  expect(is.numStr(undefined)).toBeFalse();
});

it("numStrU", () => {
  expect(is.numStrU(1)).toBeTrue();
  expect(is.numStrU("a")).toBeTrue();
  expect(is.numStrU(true)).toBeFalse();
  expect(is.numStrU(undefined)).toBeTrue();
});

it("number", () => {
  expect(is.number(1)).toBeTrue();
  expect(is.number("a")).toBeFalse();
  expect(is.number(true)).toBeFalse();
  expect(is.number(undefined)).toBeFalse();
});

it("numberU", () => {
  expect(is.numberU(1)).toBeTrue();
  expect(is.numberU("a")).toBeFalse();
  expect(is.numberU(true)).toBeFalse();
  expect(is.numberU(undefined)).toBeTrue();
});

it("object", () => {
  expect(is.object({})).toBeTrue();
  expect(is.object(1)).toBeFalse();
  expect(is.object(null)).toBeFalse();
  expect(is.object(undefined)).toBeFalse();
});

it("object.of", () => {
  interface TestInterface {
    num: number;
    str?: string;
  }

  const guard: is.Guard<TestInterface> = is.factory(
    is.object.of,
    { num: is.number },
    { str: is.string }
  );

  expect(guard({ num: 1, str: "a" })).toBeTrue();
  expect(guard({ num: 1 })).toBeTrue();
  expect(guard({ str: "a" })).toBeFalse();
  expect(guard({ num: true, str: "a" })).toBeFalse();
  expect(guard({ num: 1, str: true })).toBeFalse();
  expect(guard(1)).toBeFalse();
  expect(guard(null)).toBeFalse();
  expect(guard(undefined)).toBeFalse();
});

it("objectU", () => {
  expect(is.objectU({})).toBeTrue();
  expect(is.objectU(1)).toBeFalse();
  expect(is.objectU(null)).toBeFalse();
  expect(is.objectU(undefined)).toBeTrue();
});

it("string", () => {
  expect(is.string("a")).toBeTrue();
  expect(is.string("")).toBeTrue();
  expect(is.string(1)).toBeFalse();
  expect(is.string(undefined)).toBeFalse();
});

it("stringU", () => {
  expect(is.stringU("a")).toBeTrue();
  expect(is.stringU("")).toBeFalse();
  expect(is.stringU(1)).toBeFalse();
  expect(is.stringU(undefined)).toBeTrue();
});

it("true", () => {
  expect(is.true(true)).toBeTrue();
  expect(is.true(false)).toBeFalse();
  expect(is.true(undefined)).toBeFalse();
});

it("tuple", () => {
  expect(is.tuple([true, 1], is.boolean, is.number)).toBeTrue();
  expect(is.tuple([undefined, 1], is.boolean, is.number)).toBeFalse();
  expect(is.tuple({}, is.boolean, is.number)).toBeFalse();
});

it("tuple.factory", () => {
  const guard = is.tuple.factory(is.boolean, is.number, is.string);

  expect(guard([true, 1, "a"])).toBeTrue();
  expect(guard([undefined, 1, "a"])).toBeFalse();
  expect(guard({})).toBeFalse();
});

it("undefined", () => {
  expect(is.undefined(1)).toBeFalse();
  expect(is.undefined(null)).toBeFalse();
  expect(is.undefined(undefined)).toBeTrue();
});

it("unknown", () => {
  expect(is.unknown(1)).toBeTrue();
  expect(is.unknown(null)).toBeTrue();
  expect(is.unknown(undefined)).toBeTrue();
});
