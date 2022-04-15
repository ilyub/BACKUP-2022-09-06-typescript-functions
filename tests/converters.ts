import { cast } from "@";
import type { stringE } from "@";

test("not", () => {
  expect(cast.not).toThrow(new Error("Not implemented"));
});

test("not.empty", () => {
  expect(cast.not.empty<stringE>("a", "b")).toBe("a");
  expect(cast.not.empty<stringE>(null, "b")).toBe("b");
  expect(cast.not.empty<stringE>(undefined, "b")).toBe("b");
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
  expect(cast.number(null, 1)).toBe(1);
  expect(cast.number(undefined)).toBe(0);
  expect(cast.number(undefined, 1)).toBe(1);
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
