import * as a from "@/array";
import { AssertionError } from "@/errors/AssertionError";
import * as regexp from "@/regexp";

test("addFlags", () => {
  expect(regexp.addFlags(/.*/u, "gu").flags).toBe("gu");
});

test("escapeString", () => {
  expect(regexp.escapeString("$()*+.?[\\]^{|}-")).toBe(
    "\\$\\(\\)\\*\\+\\.\\?\\[\\\\\\]\\^\\{\\|\\}\\x2d"
  );
});

test.each([/\w(\w)\w/u, /\w(\w)\w/gu])("matchAll", re => {
  const matches = regexp.matchAll("abc xyz", re);

  const match0 = a.get(matches, 0);

  const match1 = a.get(matches, 1);

  expect(matches).toHaveLength(2);
  expect(a.clone(match0)).toStrictEqual(["abc", "b"]);
  expect(a.clone(match1)).toStrictEqual(["xyz", "y"]);
  expect(match0.index).toBe(0);
  expect(match1.index).toBe(4);
  expect(match0.input).toBe("abc xyz");
  expect(match1.input).toBe("abc xyz");
});

test("slice", () => {
  expect(regexp.slice("abcbd", /[bc]+/u)).toBe("bcb");
  expect(regexp.slice("ad", /[bc]+/u)).toBeUndefined();
});

test("slice.orFail", () => {
  const error = new AssertionError();

  expect(regexp.slice.orFail("abcbd", /[bc]+/u)).toBe("bcb");
  expect(() => regexp.slice.orFail("ad", /[bc]+/u)).toThrow(error);
});
