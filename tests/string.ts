import * as s from "@/string";

test("detectEol", () => {
  expect(s.detectEol("a\nb\nc")).toBe("\n");
  expect(s.detectEol("a\nb\r\nc")).toBe("\r\n");
  expect(s.detectEol("a\r\nb\nc")).toBe("\r\n");
});

test("empty", () => {
  expect(s.empty(" \n\r\t ")).toBeTrue();
  expect(s.empty(" \n\r\t - \n\r\t ")).toBeFalse();
});

test("leadingSpaces", () => {
  expect(s.leadingSpaces(" \n\r\t abc")).toBe(" \n\r\t ");
});

test("lcFirst", () => {
  expect(s.lcFirst("ABC")).toBe("aBC");
  expect(s.lcFirst("")).toBe("");
});

test("lines", () => {
  expect(s.lines("a\nb\r\nc")).toStrictEqual(["a", "b", "c"]);
});

test("path", () => {
  expect(() => s.path()).toThrow(new Error("Not implemented"));
});

test("path.addLeadingSlash", () => {
  expect(s.path.addLeadingSlash("a")).toBe("/a");
  expect(s.path.addLeadingSlash("/a")).toBe("/a");
  expect(s.path.addLeadingSlash("\\a")).toBe("/a");
});

test("path.addTrailingSlash", () => {
  expect(s.path.addTrailingSlash("a")).toBe("a/");
  expect(s.path.addTrailingSlash("a/")).toBe("a/");
  expect(s.path.addTrailingSlash("a\\")).toBe("a/");
});

test("path.canonicalize", () => {
  const path1 = "a//b\\\\c";

  const path2 = "//a//b\\\\c\\\\";

  expect(s.path.canonicalize(path1)).toBe("a/b/c");
  expect(s.path.canonicalize(path2)).toBe("/a/b/c/");
});

test("path.join", () => {
  const parts1 = ["a", "b/", "c", "/d/", "/e"];

  const parts2 = ["a", "b\\", "c", "\\d\\", "\\e"];

  expect(s.path.join(...parts1)).toBe("a/b/c/d/e");
  expect(s.path.join(...parts2)).toBe("a/b/c/d/e");
});

test("path.removeLeadingSlash", () => {
  expect(s.path.removeLeadingSlash("a")).toBe("a");
  expect(s.path.removeLeadingSlash("/a")).toBe("a");
  expect(s.path.removeLeadingSlash("\\a")).toBe("a");
});

test("path.removeTrailingSlash", () => {
  expect(s.path.removeTrailingSlash("a")).toBe("a");
  expect(s.path.removeTrailingSlash("a/")).toBe("a");
  expect(s.path.removeTrailingSlash("a\\")).toBe("a");
});

test("replaceAll", () => {
  expect(s.replaceAll("a1b1c", "1", "2")).toBe("a2b2c");
});

test("filter", () => {
  expect(s.filter("a1b1c", char => char !== "1")).toBe("abc");
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

test("unpadMultiline", () => {
  {
    const str = "console.log(1);";

    const expected = "console.log(1);";

    expect(s.unpadMultiline(str)).toStrictEqual(expected);
  }

  {
    const str = "\n  {\n    console.log(1);\n  }\n";

    const expected = "{\n  console.log(1);\n}";

    expect(s.unpadMultiline(str)).toStrictEqual(expected);
  }
});
