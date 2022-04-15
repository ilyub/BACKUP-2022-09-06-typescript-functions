import { a, regexp } from "@";

test("addFlags", () => {
  expect(regexp.addFlags(/.*/u, "gu").flags).toBe("gu");
});

test("escapeString", () => {
  const str = "$()*+.?[\\]^{|}-";

  const expected = "\\$\\(\\)\\*\\+\\.\\?\\[\\\\\\]\\^\\{\\|\\}\\x2d";

  expect(regexp.escapeString(str)).toBe(expected);
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
