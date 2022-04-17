module.exports = {
  consistentImport: [
    { sourcePattern: "@sinonjs/fake-timers", type: "wildcard" },
    {
      autoImportSource: "./array",
      localName: "a",
      sourcePattern: "@skylib/functions/src/array",
      type: "wildcard"
    },
    {
      autoImportSource: "./arrayMap",
      sourcePattern: "@skylib/functions/src/arrayMap",
      type: "wildcard"
    },
    {
      autoImportSource: "./assertions",
      localName: "assert",
      sourcePattern: "@skylib/functions/src/assertions",
      type: "wildcard"
    },
    {
      autoImportSource: "./converters",
      localName: "cast",
      sourcePattern: "@skylib/functions/src/converters",
      type: "wildcard"
    },
    {
      autoImportSource: "./function",
      localName: "fn",
      sourcePattern: "@skylib/functions/src/function",
      type: "wildcard"
    },
    {
      autoImportSource: "./guards",
      localName: "is",
      sourcePattern: "@skylib/functions/src/guards",
      type: "wildcard"
    },
    {
      autoImportSource: "./inlineAssertions",
      localName: "as",
      sourcePattern: "@skylib/functions/src/inlineAssertions",
      type: "wildcard"
    },
    {
      autoImportSource: "./json",
      sourcePattern: "@skylib/functions/src/json",
      type: "wildcard"
    },
    {
      autoImportSource: "./map",
      sourcePattern: "@skylib/functions/src/map",
      type: "wildcard"
    },
    {
      autoImportSource: "./number",
      localName: "num",
      sourcePattern: "@skylib/functions/src/number",
      type: "wildcard"
    },
    {
      autoImportSource: "./object",
      localName: "o",
      sourcePattern: "@skylib/functions/src/object",
      type: "wildcard"
    },
    {
      autoImportSource: "./programFlow",
      sourcePattern: "@skylib/functions/src/programFlow",
      type: "wildcard"
    },
    {
      autoImportSource: "./reflect",
      sourcePattern: "@skylib/functions/src/reflect",
      type: "wildcard"
    },
    {
      autoImportSource: "./regexp",
      sourcePattern: "@skylib/functions/src/regexp",
      type: "wildcard"
    },
    {
      autoImportSource: "./set",
      sourcePattern: "@skylib/functions/src/set",
      type: "wildcard"
    },
    {
      autoImportSource: "./string",
      localName: "s",
      sourcePattern: "@skylib/functions/src/string",
      type: "wildcard"
    },
    {
      autoImportSource: "./testUtils",
      sourcePattern: "@skylib/functions/src/testUtils",
      type: "wildcard"
    },
    {
      filesToLint: [
        "./src/assertions.ts",
        "./src/inlineAssertions.ts",
        "./src/converters.ts",
        "./src/guards.ts"
      ],
      localName: "types",
      sourcePattern: "@skylib/functions/src/types",
      type: "wildcard"
    }
  ],
  extends: ["./configs/eslintrc.options"],
  extraDefaultExportLocations: ["jest.d.ts"],
  extraUnassignedImportLocations: ["jest-extended", "reflect-metadata"]
};
