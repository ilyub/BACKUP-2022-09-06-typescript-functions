const api = require("@skylib/config/src/api");

// eslint-disable-next-line import/no-internal-modules -- Ok
const boundaries = require("@skylib/config/src/eslint/boundaries");

module.exports = {
  rules: {
    "@skylib/project/consistent-import": [
      "warn",
      {
        sources: [
          {
            autoImportSource: "./array",
            localName: "a",
            sourcePattern: "@skylib/functions/src/array",
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
            autoImportSource: "./inline-assertions",
            localName: "as",
            sourcePattern: "@skylib/functions/src/inline-assertions",
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
            autoImportSource: "./program-flow",
            sourcePattern: "@skylib/functions/src/program-flow",
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
            autoImportSource: "./test-utils",
            sourcePattern: "@skylib/functions/src/test-utils",
            type: "wildcard"
          },
          {
            autoImportSource: "./types",
            filesToLint: [
              "./src/assertions.ts",
              "./src/inline-assertions.ts",
              "./src/converters.ts",
              "./src/guards.ts"
            ],
            localName: "types",
            sourcePattern: "@skylib/functions/src/types",
            type: "wildcard"
          }
        ]
      }
    ],
    "boundaries/element-types": [
      "warn",
      {
        default: "disallow",
        rules: [
          ...boundaries.rules["boundaries/element-types"][1].rules,
          ...api.eslint.boundaries.elementTypes.createRules(
            filename => ["src1", { filename }],
            "core",
            "guards",
            "assertions",
            "inline-assertions",
            [
              "Accumulator",
              "Accumulator2",
              "array",
              "converters",
              "function",
              "json",
              "map",
              "number",
              "object",
              "program-flow",
              "reflect",
              "regexp",
              "set",
              "string"
            ],
            ["helpers"]
          ),
          ...api.eslint.boundaries.elementTypes.createRules(
            filename => ["src2", { dir1: "errors", filename }],
            ["AssertionError", "ConversionError", "InternalError"],
            "error-arg"
          ),
          {
            allow: [["src2", { dir1: "types" }]],
            from: [["src2", { dir1: "types" }]]
          }
        ]
      }
    ]
  }
};
