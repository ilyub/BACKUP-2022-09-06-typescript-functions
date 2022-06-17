const api = require("@skylib/config/src/api");

// eslint-disable-next-line import/no-internal-modules -- Ok
const boundaries = require("@skylib/config/src/eslint/boundaries");

module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    "boundaries/element-types": [
      "warn",
      {
        default: "disallow",
        // eslint-disable-next-line @skylib/disallow-by-regexp -- Ok
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
