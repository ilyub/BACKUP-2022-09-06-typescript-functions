import * as s from "@/string";

it("detectEol", () => {
  expect(s.detectEol("a\nb\nc")).toStrictEqual("\n");
  expect(s.detectEol("a\nb\r\nc")).toStrictEqual("\r\n");
  expect(s.detectEol("a\r\nb\nc")).toStrictEqual("\r\n");
});

it("empty", () => {
  expect(s.empty(" \n\r\t ")).toBeTrue();
  expect(s.empty(" \n\r\t - \n\r\t ")).toBeFalse();
});

it("leadingSpaces", () => {
  expect(s.leadingSpaces(" \n\r\t abc")).toStrictEqual(" \n\r\t ");
});

it("lcFirst", () => {
  expect(s.lcFirst("ABC")).toStrictEqual("aBC");
  expect(s.lcFirst("")).toStrictEqual("");
});

it("lines", () => {
  expect(s.lines("a\nb\r\nc")).toStrictEqual(["a", "b", "c"]);
});

it("path", () => {
  expect(() => s.path()).toThrow(new Error("Not implemented"));
});

it("path.addLeadingSlash", () => {
  expect(s.path.addLeadingSlash("a")).toStrictEqual("/a");
  expect(s.path.addLeadingSlash("/a")).toStrictEqual("/a");
  expect(s.path.addLeadingSlash("\\a")).toStrictEqual("/a");
});

it("path.addTrailingSlash", () => {
  expect(s.path.addTrailingSlash("a")).toStrictEqual("a/");
  expect(s.path.addTrailingSlash("a/")).toStrictEqual("a/");
  expect(s.path.addTrailingSlash("a\\")).toStrictEqual("a/");
});

it("path.canonicalize", () => {
  const path1 = "a//b\\\\c";

  const path2 = "//a//b\\\\c\\\\";

  expect(s.path.canonicalize(path1)).toStrictEqual("a/b/c");
  expect(s.path.canonicalize(path2)).toStrictEqual("/a/b/c/");
});

it("path.join", () => {
  const parts1 = ["a", "b/", "c", "/d/", "/e"];

  const parts2 = ["a", "b\\", "c", "\\d\\", "\\e"];

  expect(s.path.join(...parts1)).toStrictEqual("a/b/c/d/e");
  expect(s.path.join(...parts2)).toStrictEqual("a/b/c/d/e");
});

it("path.removeLeadingSlash", () => {
  expect(s.path.removeLeadingSlash("a")).toStrictEqual("a");
  expect(s.path.removeLeadingSlash("/a")).toStrictEqual("a");
  expect(s.path.removeLeadingSlash("\\a")).toStrictEqual("a");
});

it("path.removeTrailingSlash", () => {
  expect(s.path.removeTrailingSlash("a")).toStrictEqual("a");
  expect(s.path.removeTrailingSlash("a/")).toStrictEqual("a");
  expect(s.path.removeTrailingSlash("a\\")).toStrictEqual("a");
});

it("replaceAll", () => {
  expect(s.replaceAll("a1b1c", "1", "2")).toStrictEqual("a2b2c");
});

it("trailingSpaces", () => {
  expect(s.trailingSpaces("abc \n\r\t ")).toStrictEqual(" \n\r\t ");
});

it("trimEnd", () => {
  expect(s.trimEnd("abc \n\r\t ")).toStrictEqual("abc");
  expect(s.trimEnd(" \n\r\t ")).toStrictEqual("");
});

it("trimLeadingEmptyLines", () => {
  expect(s.trimLeadingEmptyLines(" ")).toStrictEqual(" ");
  expect(s.trimLeadingEmptyLines(" \n ")).toStrictEqual(" ");
  expect(s.trimLeadingEmptyLines(" \r\n ")).toStrictEqual(" ");
  expect(s.trimLeadingEmptyLines(" \n \r\n ")).toStrictEqual(" ");
  expect(s.trimLeadingEmptyLines(" \r\n \n ")).toStrictEqual(" ");
  expect(s.trimLeadingEmptyLines(" \n - \r\n ")).toStrictEqual(" - \r\n ");
  expect(s.trimLeadingEmptyLines(" \r\n - \n ")).toStrictEqual(" - \n ");
});

it("trimStart", () => {
  expect(s.trimStart(" \n\r\t abc")).toStrictEqual("abc");
  expect(s.trimStart(" \n\r\t ")).toStrictEqual("");
});

it("trimTrailingEmptyLines", () => {
  expect(s.trimTrailingEmptyLines(" ")).toStrictEqual(" ");
  expect(s.trimTrailingEmptyLines(" \n ")).toStrictEqual(" ");
  expect(s.trimTrailingEmptyLines(" \r\n ")).toStrictEqual(" ");
  expect(s.trimTrailingEmptyLines(" \n \r\n ")).toStrictEqual(" ");
  expect(s.trimTrailingEmptyLines(" \r\n \n ")).toStrictEqual(" ");
  expect(s.trimTrailingEmptyLines(" \n - \r\n ")).toStrictEqual(" \n - ");
  expect(s.trimTrailingEmptyLines(" \r\n - \n ")).toStrictEqual(" \r\n - ");
});

it("ucFirst", () => {
  expect(s.ucFirst("abc")).toStrictEqual("Abc");
  expect(s.ucFirst("")).toStrictEqual("");
});

it("unpadMultiline", () => {
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
