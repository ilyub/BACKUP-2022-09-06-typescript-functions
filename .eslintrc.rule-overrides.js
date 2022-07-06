const { eslint } = require("@skylib/config");

module.exports = {
  rules: {
    "@skylib/consistent-import/project": [
      "warn",
      {
        sources: [
          {
            _id: "array",
            autoImport: true,
            autoImportSource: "./array",
            localName: "a",
            source: "@skylib/functions/src/array",
            type: "wildcard"
          },
          {
            _id: "assertions",
            autoImport: true,
            autoImportSource: "./assertions",
            localName: "assert",
            source: "@skylib/functions/src/assertions",
            type: "wildcard"
          },
          {
            _id: "converters",
            autoImport: true,
            autoImportSource: "./converters",
            localName: "cast",
            source: "@skylib/functions/src/converters",
            type: "wildcard"
          },
          {
            _id: "function",
            autoImport: true,
            autoImportSource: "./function",
            localName: "fn",
            source: "@skylib/functions/src/function",
            type: "wildcard"
          },
          {
            _id: "guards",
            autoImport: true,
            autoImportSource: "./guards",
            localName: "is",
            source: "@skylib/functions/src/guards",
            type: "wildcard"
          },
          {
            _id: "inline-assertions",
            autoImport: true,
            autoImportSource: "./inline-assertions",
            localName: "as",
            source: "@skylib/functions/src/inline-assertions",
            type: "wildcard"
          },
          {
            _id: "json",
            autoImport: true,
            autoImportSource: "./json",
            source: "@skylib/functions/src/json",
            type: "wildcard"
          },
          {
            _id: "map",
            autoImport: true,
            autoImportSource: "./map",
            source: "@skylib/functions/src/map",
            type: "wildcard"
          },
          {
            _id: "number",
            autoImport: true,
            autoImportSource: "./number",
            localName: "num",
            source: "@skylib/functions/src/number",
            type: "wildcard"
          },
          {
            _id: "object",
            autoImport: true,
            autoImportSource: "./object",
            localName: "o",
            source: "@skylib/functions/src/object",
            type: "wildcard"
          },
          {
            _id: "program-flow",
            autoImport: true,
            autoImportSource: "./program-flow",
            source: "@skylib/functions/src/program-flow",
            type: "wildcard"
          },
          {
            _id: "reflect",
            autoImport: true,
            autoImportSource: "./reflect",
            source: "@skylib/functions/src/reflect",
            type: "wildcard"
          },
          {
            _id: "regexp",
            autoImport: true,
            autoImportSource: "./regexp",
            source: "@skylib/functions/src/regexp",
            type: "wildcard"
          },
          {
            _id: "set",
            autoImport: true,
            autoImportSource: "./set",
            source: "@skylib/functions/src/set",
            type: "wildcard"
          },
          {
            _id: "string",
            autoImport: true,
            autoImportSource: "./string",
            localName: "s",
            source: "@skylib/functions/src/string",
            type: "wildcard"
          },
          {
            _id: "test-utils",
            autoImport: true,
            autoImportSource: "./test-utils",
            source: "@skylib/functions/src/test-utils",
            type: "wildcard"
          },
          {
            _id: "types",
            autoImport: true,
            autoImportSource: "./types",
            filesToLint: [
              "./src/assertions.ts",
              "./src/converters.ts",
              "./src/guards.ts",
              "./src/inline-assertions.ts"
            ],
            localName: "types",
            source: "@skylib/functions/src/types",
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
          ...eslint.boundaries.elementTypes.rules,
          ...eslint.boundaries.elementTypes.createRules(
            filename => ["src1", { filename }],
            "core",
            "guards",
            ["assertions", "inline-assertions"],
            [
              "Accumulator",
              "Accumulator2",
              "array",
              "converters",
              "function",
              "map",
              "number",
              "object",
              "program-flow",
              "reflect",
              "regexp",
              "set",
              "string"
            ],
            ["helpers", "json"]
          ),
          {
            allow: [["src2", { dir1: "types" }]],
            from: [["src2", { dir1: "types" }]]
          }
        ]
      }
    ]
  },
  overrides: [
    {
      files: "./src/object.ts",
      rules: {
        "@typescript-eslint/no-shadow": [
          "warn",
          {
            allow: ["entries"],
            builtinGlobals: true,
            hoist: "all",
            ignoreFunctionTypeParameterNameValueShadow: false,
            ignoreTypeValueShadow: true
          }
        ]
      }
    },
    {
      files: "./src/string.ts",
      rules: {
        "@typescript-eslint/no-shadow": [
          "warn",
          {
            allow: ["path"],
            builtinGlobals: true,
            hoist: "all",
            ignoreFunctionTypeParameterNameValueShadow: false,
            ignoreTypeValueShadow: true
          }
        ]
      }
    }
  ]
};
