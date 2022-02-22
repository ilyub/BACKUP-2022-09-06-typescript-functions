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

type TestEnum = "a" | 1;

const TestEnumVO = createValidationObject<TestEnum>({ 1: 1, a: "a" });

const testClass1 = new TestClass(1);

const testClass2 = new TestClass(2);

const testError = new ConversionError();

function testFunction(): number {
  return 1;
}

test("array", () => {
  const arr = [1];

  expect(cast.array([1])).toStrictEqual([1]);
  expect(cast.array(1)).toStrictEqual([]);
  expect(cast.array(arr)).toBeSameAs(arr);
});

test("array.of", () => {
  const converter = cast.factory(cast.array.of, cast.number);

  const arr = [1];

  expect(converter([1])).toStrictEqual([1]);
  expect(converter(["a"])).toStrictEqual([0]);
  expect(converter(1)).toStrictEqual([]);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr)).not.toBeSameAs(arr);
});

test("array.of.filtered", () => {
  const converter = cast.factory(cast.array.of.filtered, is.number);

  const arr = [1];

  expect(converter([1])).toStrictEqual([1]);
  expect(converter(["a"])).toStrictEqual([]);
  expect(converter(1)).toStrictEqual([]);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr)).not.toBeSameAs(arr);
});

test("array.of.orFail", () => {
  const converter = cast.factory(cast.array.of.orFail, is.number);

  const arr = [1];

  expect(converter([1])).toStrictEqual([1]);
  expect(() => converter(["a"])).toThrow(testError);
  expect(() => converter(1)).toThrow(testError);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr)).toBeSameAs(arr);
});

test("array.of.undef", () => {
  const converter = cast.factory(cast.array.of.undef, cast.numberU);

  const arr = [1];

  expect(converter([1])).toStrictEqual([1]);
  expect(converter(["a"])).toStrictEqual([]);
  expect(converter(1)).toStrictEqual([]);
  expect(converter(null)).toStrictEqual([]);
  expect(converter(undefined)).toStrictEqual([]);
  expect(converter(arr)).not.toBeSameAs(arr);
});

test("boolean", () => {
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

test("byGuard", () => {
  const converter1 = cast.factory(cast.byGuard, is.number, 2);

  const converter2 = cast.factory(cast.byGuard, is.number, cast.orFail);

  expect(converter1(1)).toBe(1);
  expect(converter1("a")).toBe(2);
  expect(() => converter2("a")).toThrow(testError);
});

test("callable", () => {
  expect(() => cast.callable()).toThrow(new Error("Not implemented"));
});

test("callable.orFail", () => {
  expect(cast.callable.orFail(testFunction)).toStrictEqual(testFunction);
  expect(() => cast.callable.orFail(1)).toThrow(testError);
});

test("callableU", () => {
  expect(cast.callableU(testFunction)).toStrictEqual(testFunction);
  expect(cast.callableU(1)).toBeUndefined();
});

test("enumeration", () => {
  const converter1 = cast.factory(cast.enumeration, TestEnumVO, 1);

  const converter2 = cast.factory(cast.enumeration, TestEnumVO, cast.orFail);

  expect(converter1(1)).toBe(1);
  expect(converter1("a")).toBe("a");
  expect(converter1("b")).toBe(1);
  expect(() => converter2("b")).toThrow(testError);
});

test("enumerationU", () => {
  const converter = cast.factory(cast.enumerationU, TestEnumVO);

  expect(converter(1)).toBe(1);
  expect(converter("a")).toBe("a");
  expect(converter("b")).toBeUndefined();
});

test("indexedObject", () => {
  const obj = { a: 1 };

  expect(cast.indexedObject({ a: 1 })).toStrictEqual({ a: 1 });
  expect(cast.indexedObject(1)).toStrictEqual({});
  expect(cast.indexedObject(null)).toStrictEqual({});
  expect(cast.indexedObject(undefined)).toStrictEqual({});
  expect(cast.indexedObject(obj)).toBeSameAs(obj);
});

test("indexedObject.of", () => {
  const converter = cast.factory(cast.indexedObject.of, cast.string);

  const obj = { a: 1 };

  expect(converter({ a: 1 })).toStrictEqual({ a: "1" });
  expect(converter(1)).toStrictEqual({});
  expect(converter(null)).toStrictEqual({});
  expect(converter(undefined)).toStrictEqual({});
  expect(converter(obj)).not.toBeSameAs(obj);
});

test("instance", () => {
  expect(() => cast.instance()).toThrow(new Error("Not implemented"));
});

test("instance.orFail", () => {
  const converter = cast.factory(cast.instance.orFail, TestClass);

  expect(converter(testClass1)).toStrictEqual(testClass1);
  expect(() => converter(1)).toThrow(testError);
  expect(() => converter(null)).toThrow(testError);
  expect(() => converter(undefined)).toThrow(testError);
});

test("instanceU", () => {
  const converter = cast.factory(cast.instanceU, TestClass);

  expect(converter(testClass1)).toStrictEqual(testClass1);
  expect(converter(1)).toBeUndefined();
  expect(converter(null)).toBeUndefined();
  expect(converter(undefined)).toBeUndefined();
});

test("instances", () => {
  expect(() => cast.instances()).toThrow(new Error("Not implemented"));
});

test("instances.filtered", () => {
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

test("instances.orFail", () => {
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

test("not", () => {
  expect(() => cast.not()).toThrow(new Error("Not implemented"));
});

test("not.empty", () => {
  expect(subtest("a")).toBe("a");
  expect(subtest(null)).toBe("b");
  expect(subtest(undefined)).toBe("b");

  function subtest(value: stringE): string {
    return cast.not.empty(value, "b");
  }
});

test("numStr", () => {
  expect(cast.numStr(123)).toBe(123);
  expect(cast.numStr(-12.3)).toStrictEqual(-12.3);
  expect(cast.numStr(true)).toBe("true");
  expect(cast.numStr(false)).toBe("false");
  expect(cast.numStr(" 12 ")).toBe(" 12 ");
  expect(cast.numStr(" -12.34 ")).toBe(" -12.34 ");
  expect(cast.numStr(" 12s ")).toBe(" 12s ");
  expect(cast.numStr("\n")).toBe("\n");
  expect(cast.numStr("\r\n")).toBe("\r\n");
  expect(cast.numStr([])).toBe("");
  expect(cast.numStr(null)).toBe("");
  expect(cast.numStr(undefined)).toBe("");
  expect(cast.numStr(undefined)).toBe("");
});

test("numStrU", () => {
  expect(cast.numStrU(123)).toBe(123);
  expect(cast.numStrU(-12.3)).toStrictEqual(-12.3);
  expect(cast.numStrU(true)).toBe("true");
  expect(cast.numStrU(false)).toBe("false");
  expect(cast.numStrU(" 12 ")).toBe(" 12 ");
  expect(cast.numStrU(" -12.34 ")).toBe(" -12.34 ");
  expect(cast.numStrU(" 12s ")).toBe(" 12s ");
  expect(cast.numStrU("\n")).toBe("\n");
  expect(cast.numStrU("\r\n")).toBe("\r\n");
  expect(cast.numStrU([])).toBeUndefined();
  expect(cast.numStrU(null)).toBeUndefined();
  expect(cast.numStrU(undefined)).toBeUndefined();
  expect(cast.numStrU(undefined)).toBeUndefined();
});

test("number", () => {
  expect(cast.number(123)).toBe(123);
  expect(cast.number(-12.3)).toStrictEqual(-12.3);
  expect(cast.number(true)).toBe(1);
  expect(cast.number(false)).toBe(0);
  expect(cast.number(" 12 ")).toBe(12);
  expect(cast.number(" -12.34 ")).toStrictEqual(-12.34);
  expect(cast.number(" 12s ")).toBe(0);
  expect(cast.number("\n")).toBe(0);
  expect(cast.number("\r\n")).toBe(0);
  expect(cast.number([])).toBe(0);
  expect(cast.number(null)).toBe(0);
  expect(cast.number(undefined)).toBe(0);
  expect(cast.number(undefined, 1)).toBe(1);
});

test("number.orFail", () => {
  expect(cast.number.orFail(123)).toBe(123);
  expect(cast.number.orFail(-12.3)).toStrictEqual(-12.3);
  expect(cast.number.orFail(true)).toBe(1);
  expect(cast.number.orFail(false)).toBe(0);
  expect(cast.number.orFail(" 12 ")).toBe(12);
  expect(cast.number.orFail(" -12.34 ")).toStrictEqual(-12.34);
  expect(() => cast.number.orFail(" 12s ")).toThrow(testError);
  expect(() => cast.number.orFail("\n")).toThrow(testError);
  expect(() => cast.number.orFail("\r\n")).toThrow(testError);
  expect(() => cast.number.orFail([])).toThrow(testError);
  expect(() => cast.number.orFail(null)).toThrow(testError);
  expect(() => cast.number.orFail(undefined)).toThrow(testError);
});

test("numberU", () => {
  expect(cast.numberU(123)).toBe(123);
  expect(cast.numberU(-12.3)).toStrictEqual(-12.3);
  expect(cast.numberU(true)).toBe(1);
  expect(cast.numberU(false)).toBe(0);
  expect(cast.numberU(" 12 ")).toBe(12);
  expect(cast.numberU(" -12.34 ")).toStrictEqual(-12.34);
  expect(cast.numberU(" 12s ")).toBeUndefined();
  expect(cast.numberU("\n")).toBeUndefined();
  expect(cast.numberU("\r\n")).toBeUndefined();
  expect(cast.numberU([])).toBeUndefined();
  expect(cast.numberU(null)).toBeUndefined();
  expect(cast.numberU(undefined)).toBeUndefined();
});

test("object", () => {
  expect(cast.object({ a: 1 })).toStrictEqual({ a: 1 });
  expect(cast.object(1)).toStrictEqual({});
});

test("string", () => {
  expect(cast.string(123)).toBe("123");
  expect(cast.string(-12.3)).toBe("-12.3");
  expect(cast.string(true)).toBe("true");
  expect(cast.string(false)).toBe("false");
  expect(cast.string("")).toBe("");
  expect(cast.string([])).toBe("");
  expect(cast.string(null)).toBe("");
  expect(cast.string(undefined)).toBe("");
});

test("string.orFail", () => {
  expect(cast.string.orFail(123)).toBe("123");
  expect(cast.string.orFail(-12.3)).toBe("-12.3");
  expect(cast.string.orFail(true)).toBe("true");
  expect(cast.string.orFail(false)).toBe("false");
  expect(() => cast.string.orFail("")).toThrow(testError);
  expect(() => cast.string.orFail([])).toThrow(testError);
  expect(() => cast.string.orFail(null)).toThrow(testError);
  expect(() => cast.string.orFail(undefined)).toThrow(testError);
});

test("stringU", () => {
  expect(cast.stringU(123)).toBe("123");
  expect(cast.stringU(-12.3)).toBe("-12.3");
  expect(cast.stringU(true)).toBe("true");
  expect(cast.stringU(false)).toBe("false");
  expect(cast.stringU("")).toBeUndefined();
  expect(cast.stringU([])).toBeUndefined();
  expect(cast.stringU(null)).toBeUndefined();
  expect(cast.stringU(undefined)).toBeUndefined();
});

test("unknown", () => {
  expect(cast.unknown(123)).toBe(123);
});
