import * as a from "@/array";
import { AssertionError } from "@/errors/AssertionError";
import * as regexp from "@/regexp";

it("escapeString", () => {
  expect(regexp.escapeString("$()*+.?[\\]^{|}-")).toStrictEqual(
    "\\$\\(\\)\\*\\+\\.\\?\\[\\\\\\]\\^\\{\\|\\}\\x2d"
  );
});

it("matchAll", () => {
  for (const re of [/\w(\w)\w/u, /\w(\w)\w/gu]) {
    const matches = regexp.matchAll("abc xyz", re);

    const match0 = a.get(matches, 0);

    const match1 = a.get(matches, 1);

    expect(matches.length).toStrictEqual(2);
    expect(a.clone(match0)).toStrictEqual(["abc", "b"]);
    expect(a.clone(match1)).toStrictEqual(["xyz", "y"]);
    expect(match0.index).toStrictEqual(0);
    expect(match1.index).toStrictEqual(4);
    expect(match0.input).toStrictEqual("abc xyz");
    expect(match1.input).toStrictEqual("abc xyz");
  }
});

it("slice", () => {
  expect(regexp.slice("abcbd", /[bc]+/u)).toStrictEqual("bcb");
  expect(regexp.slice("ad", /[bc]+/u)).toBeUndefined();
});

it("slice.orFail", () => {
  const error = new AssertionError();

  expect(regexp.slice.orFail("abcbd", /[bc]+/u)).toStrictEqual("bcb");
  expect(() => regexp.slice.orFail("ad", /[bc]+/u)).toThrow(error);
});
