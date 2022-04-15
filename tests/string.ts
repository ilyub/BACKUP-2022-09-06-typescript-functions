import { s } from "@";

test("detectEol", () => {
  expect(s.detectEol("a\nb\nc")).toBe("\n");
  expect(s.detectEol("a\nb\r\nc")).toBe("\r\n");
  expect(s.detectEol("a\r\nb\nc")).toBe("\r\n");
});

test("empty", () => {
  expect(s.empty(" \n\r\t ")).toBeTrue();
  expect(s.empty(" \n\r\t - \n\r\t ")).toBeFalse();
});

test("filter", () => {
  expect(s.filter("a1b1c", char => char !== "1")).toBe("abc");
});

test("lcFirst", () => {
  expect(s.lcFirst("ABC")).toBe("aBC");
  expect(s.lcFirst("")).toBe("");
});

test("leadingSpaces", () => {
  expect(s.leadingSpaces(" \n\r\t abc")).toBe(" \n\r\t ");
});

test("lines", () => {
  expect(s.lines("a\nb\r\nc")).toStrictEqual(["a", "b", "c"]);
});

test("multiline", () => {
  expect(s.multiline("a\nb")).toBeTrue();
  expect(s.multiline("ab")).toBeFalse();
});

test("path", () => {
  expect(s.path).toThrow(new Error("Not implemented"));
});

test.each(["a", "/a", "\\a", "//a", "\\\\a"])("path.addLeadingSlash", path => {
  expect(s.path.addLeadingSlash(path)).toBe("/a");
});

test.each(["a", "a/", "a\\", "a//", "a\\\\"])("path.addTrailingSlash", path => {
  expect(s.path.addTrailingSlash(path)).toBe("a/");
});

test("path.canonicalize", () => {
  expect(s.path.canonicalize("a//b\\\\c")).toBe("a/b/c");
  expect(s.path.canonicalize("//a//b\\\\c\\\\")).toBe("/a/b/c/");
});

test.each([
  { parts: ["a", "b/", "c", "/d/", "/e"] },
  { parts: ["a", "b\\", "c", "\\d\\", "\\e"] },
  { parts: ["a", "b//", "c", "//d//", "//e"] },
  { parts: ["a", "b\\\\", "c", "\\\\d\\\\", "\\\\e"] }
])("path.join", ({ parts }) => {
  expect(s.path.join(...parts)).toBe("a/b/c/d/e");
});

test.each(["a/", "/a/", "\\a//", "//a\\", "\\\\a\\\\"])(
  "path.removeLeadingSlash",
  path => {
    expect(s.path.removeLeadingSlash(path)).toBe("a/");
  }
);

test.each(["/a", "/a/", "//a\\", "\\a//", "\\\\a\\\\"])(
  "path.removeTrailingSlash",
  path => {
    expect(s.path.removeTrailingSlash(path)).toBe("/a");
  }
);

test("replaceAll", () => {
  expect(s.replaceAll("a1b1c", "1", "2")).toBe("a2b2c");
});

test("singleLine", () => {
  expect(s.singleLine("ab")).toBeTrue();
  expect(s.singleLine("a\nb")).toBeFalse();
});

test("trailingSpaces", () => {
  expect(s.trailingSpaces("abc \n\r\t ")).toBe(" \n\r\t ");
});

test("trimEnd", () => {
  expect(s.trimEnd("abc \n\r\t ")).toBe("abc");
  expect(s.trimEnd(" \n\r\t ")).toBe("");
});

test("trimLeadingEmptyLines", () => {
  expect(s.trimLeadingEmptyLines(" ")).toBe(" ");
  expect(s.trimLeadingEmptyLines(" \n ")).toBe(" ");
  expect(s.trimLeadingEmptyLines(" \r\n ")).toBe(" ");
  expect(s.trimLeadingEmptyLines(" \n \r\n ")).toBe(" ");
  expect(s.trimLeadingEmptyLines(" \r\n \n ")).toBe(" ");
  expect(s.trimLeadingEmptyLines(" \n - \r\n ")).toBe(" - \r\n ");
  expect(s.trimLeadingEmptyLines(" \r\n - \n ")).toBe(" - \n ");
});

test("trimStart", () => {
  expect(s.trimStart(" \n\r\t abc")).toBe("abc");
  expect(s.trimStart(" \n\r\t ")).toBe("");
});

test("trimTrailingEmptyLines", () => {
  expect(s.trimTrailingEmptyLines(" ")).toBe(" ");
  expect(s.trimTrailingEmptyLines(" \n ")).toBe(" ");
  expect(s.trimTrailingEmptyLines(" \r\n ")).toBe(" ");
  expect(s.trimTrailingEmptyLines(" \n \r\n ")).toBe(" ");
  expect(s.trimTrailingEmptyLines(" \r\n \n ")).toBe(" ");
  expect(s.trimTrailingEmptyLines(" \n - \r\n ")).toBe(" \n - ");
  expect(s.trimTrailingEmptyLines(" \r\n - \n ")).toBe(" \r\n - ");
});

test("ucFirst", () => {
  expect(s.ucFirst("abc")).toBe("Abc");
  expect(s.ucFirst("")).toBe("");
});

test.each([
  { expected: "console.log(1);", str: "console.log(1);" },
  {
    expected: "{\n  console.log(1);\n}",
    str: "\n  {\n    console.log(1);\n  }\n    "
  },
  {
    expected: "{\r\n  console.log(1);\r\n}",
    str: "\r\n  {\r\n    console.log(1);\r\n  }\r\n    "
  }
])("unpadMultiline", ({ expected, str }) => {
  expect(s.unpadMultiline(str)).toStrictEqual(expected);
});
