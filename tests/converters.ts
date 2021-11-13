import * as cast from "@/converters";
import { ConversionError } from "@/errors/ConversionError";
import * as is from "@/guards";
import type { stringE } from "@/types/core";
import { createValidationObject } from "@/types/core";

class TestClass {
  public value: number;

  public constructor(value: number) {
    this.value = value;
  }
}

type TestEnum = 1 | "a";

const TestEnumVO = createValidationObject<TestEnum>({ 1: 1, a: "a" });

const testClass1 = new TestClass(1);

const testClass2 = new TestClass(2);

const testError = new ConversionError();

function testFunction(): number {
  return 1;
}

it("array", () => {
  const arr = [1];

  expect(cast.array([1])).toStrictEqual([1]);
  expect(cast.array(1)).toStrictEqual([]);
  expect(cast.array(arr)).toBeSameAs(arr);
});

it("array.of", () => {
  const converter = cast.factory(cast.array.of, cast.number);

  const arr = [1];

  expect(converter([1])).toStrictEqual([1]);
  expect(converter(["a"])).toStrictEqual([0]);
  expect(converter(1)).toStrictEqual([]);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr)).not.toBeSameAs(arr);
});

it("array.of.filtered", () => {
  const converter = cast.factory(cast.array.of.filtered, is.number);

  const arr = [1];

  expect(converter([1])).toStrictEqual([1]);
  expect(converter(["a"])).toStrictEqual([]);
  expect(converter(1)).toStrictEqual([]);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr)).not.toBeSameAs(arr);
});

it("array.of.orFail", () => {
  const converter = cast.factory(cast.array.of.orFail, is.number);

  const arr = [1];

  expect(converter([1])).toStrictEqual([1]);
  expect(() => converter(["a"])).toThrow(testError);
  expect(() => converter(1)).toThrow(testError);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr)).toBeSameAs(arr);
});

it("array.of.undef", () => {
  const converter = cast.factory(cast.array.of.undef, cast.numberU);

  const arr = [1];

  expect(converter([1])).toStrictEqual([1]);
  expect(converter(["a"])).toStrictEqual([]);
  expect(converter(1)).toStrictEqual([]);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr)).not.toBeSameAs(arr);
});

it("boolean", () => {
  expect(cast.boolean(true)).toBeTrue();
  expect(cast.boolean(false)).toBeFalse();
  expect(cast.boolean({})).toBeTrue();
  expect(cast.boolean([])).toBeTrue();
  expect(cast.boolean("")).toBeFalse();
  expect(cast.boolean(0)).toBeFalse();
  expect(cast.boolean(-0)).toBeFalse();
  expect(cast.boolean(Number.NaN)).toBeFalse();
  expect(cast.boolean(null)).toBeFalse();
  expect(cast.boolean(undefined)).toBeFalse();
});

it("byGuard", () => {
  const converter1 = cast.factory(cast.byGuard, is.number, 2);

  const converter2 = cast.factory(cast.byGuard, is.number, cast.orFail);

  expect(converter1(1)).toStrictEqual(1);
  expect(converter1("a")).toStrictEqual(2);
  expect(() => converter2("a")).toThrow(testError);
});

it("callable", () => {
  expect(() => cast.callable()).toThrow(new Error("Not implemented"));
});

it("callable.orFail", () => {
  expect(cast.callable.orFail(testFunction)).toStrictEqual(testFunction);
  expect(() => cast.callable.orFail(1)).toThrow(testError);
});

it("callableU", () => {
  expect(cast.callableU(testFunction)).toStrictEqual(testFunction);
  expect(cast.callableU(1)).toBeUndefined();
});

it("enumeration", () => {
  const converter1 = cast.factory(cast.enumeration, TestEnumVO, 1);

  const converter2 = cast.factory(cast.enumeration, TestEnumVO, cast.orFail);

  expect(converter1(1)).toStrictEqual(1);
  expect(converter1("a")).toStrictEqual("a");
  expect(converter1("b")).toStrictEqual(1);
  expect(() => converter2("b")).toThrow(testError);
});

it("enumerationU", () => {
  const converter = cast.factory(cast.enumerationU, TestEnumVO);

  expect(converter(1)).toStrictEqual(1);
  expect(converter("a")).toStrictEqual("a");
  expect(converter("b")).toBeUndefined();
});

it("indexedObject", () => {
  const obj = { a: 1 };

  expect(cast.indexedObject({ a: 1 })).toStrictEqual({ a: 1 });
  expect(cast.indexedObject(1)).toStrictEqual({});
  expect(cast.indexedObject(null)).toStrictEqual({});
  expect(cast.indexedObject(undefined)).toStrictEqual({});
  expect(cast.indexedObject(obj)).toBeSameAs(obj);
});

it("indexedObject.of", () => {
  const converter = cast.factory(cast.indexedObject.of, cast.string);

  const obj = { a: 1 };

  expect(converter({ a: 1 })).toStrictEqual({ a: "1" });
  expect(converter(1)).toStrictEqual({});
  expect(converter(null)).toStrictEqual({});
  expect(converter(undefined)).toStrictEqual({});
  expect(converter(obj)).not.toBeSameAs(obj);
});

it("instance", () => {
  expect(() => cast.instance()).toThrow(new Error("Not implemented"));
});

it("instance.orFail", () => {
  const converter = cast.factory(cast.instance.orFail, TestClass);

  expect(converter(testClass1)).toStrictEqual(testClass1);
  expect(() => converter(1)).toThrow(testError);
  expect(() => converter(null)).toThrow(testError);
  expect(() => converter(undefined)).toThrow(testError);
});

it("instanceU", () => {
  const converter = cast.factory(cast.instanceU, TestClass);

  expect(converter(testClass1)).toStrictEqual(testClass1);
  expect(converter(1)).toBeUndefined();
  expect(converter(null)).toBeUndefined();
  expect(converter(undefined)).toBeUndefined();
});

it("instances", () => {
  expect(() => cast.instances()).toThrow(new Error("Not implemented"));
});

it("instances.filtered", () => {
  const converter = cast.factory(cast.instances.filtered, TestClass);

  const arr1 = [testClass1, testClass2];

  const arr2 = [testClass1, testClass2, 1];

  const expected = [testClass1, testClass2];

  expect(converter(arr1)).toStrictEqual(expected);
  expect(converter(arr2)).toStrictEqual(expected);
  expect(converter(1)).toStrictEqual([]);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr1)).not.toBeSameAs(arr1);
});

it("instances.orFail", () => {
  const converter = cast.factory(cast.instances.orFail, TestClass);

  const arr1 = [testClass1, testClass2];

  const arr2 = [testClass1, testClass2, 1];

  const expected = [testClass1, testClass2];

  expect(converter(arr1)).toStrictEqual(expected);
  expect(() => converter(arr2)).toThrow(testError);
  expect(() => converter(1)).toThrow(testError);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr1)).toBeSameAs(arr1);
});

it("not", () => {
  expect(() => cast.not()).toThrow(new Error("Not implemented"));
});

it("not.empty", () => {
  expect(subtest("a")).toStrictEqual("a");
  expect(subtest(null)).toStrictEqual("b");
  expect(subtest(undefined)).toStrictEqual("b");

  function subtest(value: stringE): string {
    return cast.not.empty(value, "b");
  }
});

it("numStr", () => {
  expect(cast.numStr(123)).toStrictEqual(123);
  expect(cast.numStr(-12.3)).toStrictEqual(-12.3);
  expect(cast.numStr(true)).toStrictEqual("true");
  expect(cast.numStr(false)).toStrictEqual("false");
  expect(cast.numStr(" 12 ")).toStrictEqual(" 12 ");
  expect(cast.numStr(" -12.34 ")).toStrictEqual(" -12.34 ");
  expect(cast.numStr(" 12s ")).toStrictEqual(" 12s ");
  expect(cast.numStr("\n")).toStrictEqual("\n");
  expect(cast.numStr("\r\n")).toStrictEqual("\r\n");
  expect(cast.numStr([])).toStrictEqual("");
  expect(cast.numStr(null)).toStrictEqual("");
  expect(cast.numStr(undefined)).toStrictEqual("");
  expect(cast.numStr(undefined)).toStrictEqual("");
});

it("number", () => {
  expect(cast.number(123)).toStrictEqual(123);
  expect(cast.number(-12.3)).toStrictEqual(-12.3);
  expect(cast.number(true)).toStrictEqual(1);
  expect(cast.number(false)).toStrictEqual(0);
  expect(cast.number(" 12 ")).toStrictEqual(12);
  expect(cast.number(" -12.34 ")).toStrictEqual(-12.34);
  expect(cast.number(" 12s ")).toStrictEqual(0);
  expect(cast.number("\n")).toStrictEqual(0);
  expect(cast.number("\r\n")).toStrictEqual(0);
  expect(cast.number([])).toStrictEqual(0);
  expect(cast.number(null)).toStrictEqual(0);
  expect(cast.number(undefined)).toStrictEqual(0);
  expect(cast.number(undefined, 1)).toStrictEqual(1);
});

it("number.orFail", () => {
  expect(cast.number.orFail(123)).toStrictEqual(123);
  expect(cast.number.orFail(-12.3)).toStrictEqual(-12.3);
  expect(cast.number.orFail(true)).toStrictEqual(1);
  expect(cast.number.orFail(false)).toStrictEqual(0);
  expect(cast.number.orFail(" 12 ")).toStrictEqual(12);
  expect(cast.number.orFail(" -12.34 ")).toStrictEqual(-12.34);
  expect(() => cast.number.orFail(" 12s ")).toThrow(testError);
  expect(() => cast.number.orFail("\n")).toThrow(testError);
  expect(() => cast.number.orFail("\r\n")).toThrow(testError);
  expect(() => cast.number.orFail([])).toThrow(testError);
  expect(() => cast.number.orFail(null)).toThrow(testError);
  expect(() => cast.number.orFail(undefined)).toThrow(testError);
});

it("numberU", () => {
  expect(cast.numberU(123)).toStrictEqual(123);
  expect(cast.numberU(-12.3)).toStrictEqual(-12.3);
  expect(cast.numberU(true)).toStrictEqual(1);
  expect(cast.numberU(false)).toStrictEqual(0);
  expect(cast.numberU(" 12 ")).toStrictEqual(12);
  expect(cast.numberU(" -12.34 ")).toStrictEqual(-12.34);
  expect(cast.numberU(" 12s ")).toBeUndefined();
  expect(cast.numberU("\n")).toBeUndefined();
  expect(cast.numberU("\r\n")).toBeUndefined();
  expect(cast.numberU([])).toBeUndefined();
  expect(cast.numberU(null)).toBeUndefined();
  expect(cast.numberU(undefined)).toBeUndefined();
});

it("object", () => {
  expect(cast.object({ a: 1 })).toStrictEqual({ a: 1 });
  expect(cast.object(1)).toStrictEqual({});
});

it("string", () => {
  expect(cast.string(123)).toStrictEqual("123");
  expect(cast.string(-12.3)).toStrictEqual("-12.3");
  expect(cast.string(true)).toStrictEqual("true");
  expect(cast.string(false)).toStrictEqual("false");
  expect(cast.string("")).toStrictEqual("");
  expect(cast.string([])).toStrictEqual("");
  expect(cast.string(null)).toStrictEqual("");
  expect(cast.string(undefined)).toStrictEqual("");
});

it("string.orFail", () => {
  expect(cast.string.orFail(123)).toStrictEqual("123");
  expect(cast.string.orFail(-12.3)).toStrictEqual("-12.3");
  expect(cast.string.orFail(true)).toStrictEqual("true");
  expect(cast.string.orFail(false)).toStrictEqual("false");
  expect(() => cast.string.orFail("")).toThrow(testError);
  expect(() => cast.string.orFail([])).toThrow(testError);
  expect(() => cast.string.orFail(null)).toThrow(testError);
  expect(() => cast.string.orFail(undefined)).toThrow(testError);
});

it("stringU", () => {
  expect(cast.stringU(123)).toStrictEqual("123");
  expect(cast.stringU(-12.3)).toStrictEqual("-12.3");
  expect(cast.stringU(true)).toStrictEqual("true");
  expect(cast.stringU(false)).toStrictEqual("false");
  expect(cast.stringU("")).toBeUndefined();
  expect(cast.stringU([])).toBeUndefined();
  expect(cast.stringU(null)).toBeUndefined();
  expect(cast.stringU(undefined)).toBeUndefined();
});

it("unknown", () => {
  expect(cast.unknown(123)).toStrictEqual(123);
});
