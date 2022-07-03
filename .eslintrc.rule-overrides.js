const { eslint } = require("@skylib/config");

module.exports = {
  overrides: [
    {
      files: "./src/index.ts",
      rules: {
        // eslint-disable-next-line @skylib/no-restricted-syntax -- Ok
        "@skylib/export-all-name": "off"
      }
    },
    {
      files: "./src/{array,guards}.ts",
      rules: {
        // eslint-disable-next-line @skylib/no-restricted-syntax -- Ok
        "@skylib/no-multi-type-tuples": "off"
      }
    },
    {
      files: "./src/json.ts",
      rules: {
        // eslint-disable-next-line @skylib/no-restricted-syntax -- Ok
        "unicorn/no-null": "off"
      }
    },
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
    },
    {
      files: "./src/types/function.ts",
      rules: {
        // eslint-disable-next-line @skylib/no-restricted-syntax -- Ok
        "@typescript-eslint/no-explicit-any": "off"
      }
    },
    {
      files: "./tests/types/{object,object-keys}.ts",
      rules: {
        // eslint-disable-next-line @skylib/no-restricted-syntax -- Ok
        "@skylib/optional-property-style": "off",
        // eslint-disable-next-line @skylib/no-restricted-syntax -- Ok
        "@skylib/prefer-readonly": "off"
      }
    }
  ],
  rules: {
    "@skylib/project/consistent-import": [
      "warn",
      {
        sources: [
          {
            _id: "array",
            autoImportSource: "./array",
            localName: "a",
            source: "@skylib/functions/src/array",
            type: "wildcard"
          },
          {
            _id: "assertions",
            autoImportSource: "./assertions",
            localName: "assert",
            source: "@skylib/functions/src/assertions",
            type: "wildcard"
          },
          {
            _id: "converters",
            autoImportSource: "./converters",
            localName: "cast",
            source: "@skylib/functions/src/converters",
            type: "wildcard"
          },
          {
            _id: "function",
            autoImportSource: "./function",
            localName: "fn",
            source: "@skylib/functions/src/function",
            type: "wildcard"
          },
          {
            _id: "guards",
            autoImportSource: "./guards",
            localName: "is",
            source: "@skylib/functions/src/guards",
            type: "wildcard"
          },
          {
            _id: "inline-assertions",
            autoImportSource: "./inline-assertions",
            localName: "as",
            source: "@skylib/functions/src/inline-assertions",
            type: "wildcard"
          },
          {
            _id: "json",
            autoImportSource: "./json",
            source: "@skylib/functions/src/json",
            type: "wildcard"
          },
          {
            _id: "map",
            autoImportSource: "./map",
            source: "@skylib/functions/src/map",
            type: "wildcard"
          },
          {
            _id: "number",
            autoImportSource: "./number",
            localName: "num",
            source: "@skylib/functions/src/number",
            type: "wildcard"
          },
          {
            _id: "object",
            autoImportSource: "./object",
            localName: "o",
            source: "@skylib/functions/src/object",
            type: "wildcard"
          },
          {
            _id: "program-flow",
            autoImportSource: "./program-flow",
            source: "@skylib/functions/src/program-flow",
            type: "wildcard"
          },
          {
            _id: "reflect",
            autoImportSource: "./reflect",
            source: "@skylib/functions/src/reflect",
            type: "wildcard"
          },
          {
            _id: "regexp",
            autoImportSource: "./regexp",
            source: "@skylib/functions/src/regexp",
            type: "wildcard"
          },
          {
            _id: "set",
            autoImportSource: "./set",
            source: "@skylib/functions/src/set",
            type: "wildcard"
          },
          {
            _id: "string",
            autoImportSource: "./string",
            localName: "s",
            source: "@skylib/functions/src/string",
            type: "wildcard"
          },
          {
            _id: "test-utils",
            autoImportSource: "./test-utils",
            source: "@skylib/functions/src/test-utils",
            type: "wildcard"
          },
          {
            _id: "types",
            autoImportSource: "./types",
            filesToLint: [
              "./src/assertions.ts",
              "./src/inline-assertions.ts",
              "./src/converters.ts",
              "./src/guards.ts"
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
          {
            allow: [["src2", { dir1: "types" }]],
            from: [["src2", { dir1: "types" }]]
          }
        ]
      }
    ]
  }
};
