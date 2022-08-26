const { eslint } = require("@skylib/config/api");

const consistentImport = eslint.rules["@skylib/consistent-import"];

const noShadow = eslint.rules["@skylib/typescript/no-shadow"];

module.exports = {
  rules: {
    "@skylib/consistent-import": [
      "warn",
      {
        sources: [
          ...consistentImport.sources,
          {
            _id: "array",
            autoImport: true,
            autoImportSource: "./array",
            localName: "a",
            source: "@skylib/functions/src/array",
            wildcard: true
          },
          {
            _id: "assertions",
            autoImport: true,
            autoImportSource: "./assertions",
            localName: "assert",
            source: "@skylib/functions/src/assertions",
            wildcard: true
          },
          {
            _id: "converters",
            autoImport: true,
            autoImportSource: "./converters",
            localName: "cast",
            source: "@skylib/functions/src/converters",
            wildcard: true
          },
          {
            _id: "function",
            autoImport: true,
            autoImportSource: "./function",
            localName: "fn",
            source: "@skylib/functions/src/function",
            wildcard: true
          },
          {
            _id: "guards",
            autoImport: true,
            autoImportSource: "./guards",
            localName: "is",
            source: "@skylib/functions/src/guards",
            wildcard: true
          },
          {
            _id: "inline-assertions",
            autoImport: true,
            autoImportSource: "./inline-assertions",
            localName: "as",
            source: "@skylib/functions/src/inline-assertions",
            wildcard: true
          },
          {
            _id: "json",
            autoImport: true,
            autoImportSource: "./json",
            source: "@skylib/functions/src/json",
            wildcard: true
          },
          {
            _id: "map",
            autoImport: true,
            autoImportSource: "./map",
            source: "@skylib/functions/src/map",
            wildcard: true
          },
          {
            _id: "number",
            autoImport: true,
            autoImportSource: "./number",
            localName: "num",
            source: "@skylib/functions/src/number",
            wildcard: true
          },
          {
            _id: "object",
            autoImport: true,
            autoImportSource: "./object",
            localName: "o",
            source: "@skylib/functions/src/object",
            wildcard: true
          },
          {
            _id: "program-flow",
            autoImport: true,
            autoImportSource: "./program-flow",
            source: "@skylib/functions/src/program-flow",
            wildcard: true
          },
          {
            _id: "reflect",
            autoImport: true,
            autoImportSource: "./reflect",
            source: "@skylib/functions/src/reflect",
            wildcard: true
          },
          {
            _id: "regexp",
            autoImport: true,
            autoImportSource: "./regexp",
            source: "@skylib/functions/src/regexp",
            wildcard: true
          },
          {
            _id: "set",
            autoImport: true,
            autoImportSource: "./set",
            source: "@skylib/functions/src/set",
            wildcard: true
          },
          {
            _id: "string",
            autoImport: true,
            autoImportSource: "./string",
            localName: "s",
            source: "@skylib/functions/src/string",
            wildcard: true
          },
          {
            _id: "types/function",
            localName: "fn",
            source: "@skylib/functions/src/types/function",
            wildcard: true
          },
          {
            _id: "types/index.types",
            source: "@skylib/functions/src/types/index.types",
            wildcard: true
          },
          {
            _id: "types/index.types.object",
            localName: "object",
            source: "@skylib/functions/src/types/index.types.object",
            wildcard: true
          },
          {
            _id: "types/object.keys",
            localName: "keys",
            source: "@skylib/functions/src/types/object.keys",
            wildcard: true
          },
          {
            _id: "types/object.style",
            localName: "style",
            source: "@skylib/functions/src/types/object.style",
            wildcard: true
          },
          {
            _id: "types/string",
            source: "@skylib/functions/src/types/string",
            wildcard: true
          }
        ]
      }
    ],
    "@skylib/no-sibling-import": [
      "warn",
      {
        folders: [
          {
            filesToLint: ["./*"],
            levels: [["./jest.config"], ["./jest.config.fast"]]
          },
          {
            filesToLint: ["./src/*"],
            levels: [
              ["./core"],
              ["./guards"],
              ["./assertions", "./inline-assertions"],
              [
                "./Accumulator2",
                "./array",
                "./converters",
                "./function",
                "./number",
                "./program-flow",
                "./reflect",
                "./string"
              ],
              ["./object"],
              ["./helpers", "./json"]
            ]
          },
          {
            filesToLint: ["./src/test-utils/*"],
            levels: [["./expect"], ["./jest.internal"]]
          },
          { allow: true, filesToLint: ["./src/types/*"] }
        ]
      }
    ]
  },
  overrides: [
    {
      files: "./src/object.ts",
      rules: {
        "@skylib/typescript/no-shadow": [
          "warn",
          { ...noShadow, allow: [...noShadow.allow, "entries"] }
        ]
      }
    },
    {
      files: "./src/string.ts",
      rules: {
        "@skylib/typescript/no-shadow": [
          "warn",
          { ...noShadow, allow: [...noShadow.allow, "path"] }
        ]
      }
    }
  ]
};
