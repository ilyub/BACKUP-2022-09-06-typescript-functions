module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  overrides: [
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    { files: ["./*"], rules: { "boundaries/no-unknown-files": "off" } }
  ],
  rules: {
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    "boundaries/element-types": [
      "warn",
      {
        default: "disallow",
        rules: [
          { allow: ["src2"], from: ["src1"] },
          { allow: ["src3"], from: ["src2"] },
          { allow: ["src4"], from: ["src3"] },
          { allow: ["src5"], from: ["src4"] },
          { allow: ["src1", "src2", "src3", "src4", "src5"], from: ["mocks"] },
          { allow: ["src1", "src2", "src3", "src4", "src5"], from: ["tests"] },
          ...createRules("src1", [
            ["core.ts"],
            ["guards.ts"],
            ["assertions.ts"],
            ["inline-assertions.ts"],
            [
              "Accumulator.ts",
              "Accumulator2.ts",
              "array.ts",
              "converters.ts",
              "function.ts",
              "json.ts",
              "map.ts",
              "number.ts",
              "object.ts",
              "program-flow.ts",
              "reflect.ts",
              "regexp.ts",
              "set.ts",
              "string.ts"
            ],
            ["helpers.ts"]
          ]),
          ...createRules("src2", "errors", [
            ["AssertionError.ts", "ConversionError.ts", "InternalError.ts"],
            ["error-arg.ts"]
          ]),
          {
            allow: ["src1", "src2", "src3", "src4", "src5"],
            from: [["src2", { part1: "test-utils" }]]
          },
          {
            allow: [["src2", { part1: "types" }]],
            from: [["src2", { part1: "types" }]]
          }
        ]
      }
    ],
    "boundaries/entry-point": "warn",
    "boundaries/external": "warn",
    "boundaries/no-ignored": "warn",
    "boundaries/no-private": "warn",
    "boundaries/no-unknown": "warn",
    "boundaries/no-unknown-files": "warn"
  },
  settings: {
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    "boundaries/elements": [
      {
        mode: "file",
        pattern: "./configs/**",
        type: "configs"
      },
      {
        mode: "file",
        pattern: "./__mocks__/**",
        type: "mocks"
      },
      {
        capture: ["part1"],
        mode: "file",
        pattern: "./src/*",
        type: "src1"
      },
      {
        capture: ["part1", "part2"],
        mode: "file",
        pattern: "./src/*/*",
        type: "src2"
      },
      {
        capture: ["part1", "part2", "part3"],
        mode: "file",
        pattern: "./src/*/*/*",
        type: "src3"
      },
      {
        capture: ["part1", "part2", "part3", "part4"],
        mode: "file",
        pattern: "./src/*/*/*/*",
        type: "src4"
      },
      {
        capture: ["part1", "part2", "part3", "part4", "part5"],
        mode: "file",
        pattern: "./src/*/*/*/*/*",
        type: "src5"
      },
      {
        mode: "file",
        pattern: "./tests/**",
        type: "tests"
      }
    ]
  }
};

// eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
// fixme
function createRules(type, ...args) {
  const captures = {};

  for (const [index, arg] of args.slice(0, -1).entries())
    captures[`part${index + 1}`] = arg;

  const groups = args.at(-1);

  const name = `part${args.length}`;

  const result = [];

  for (const [index1, group1] of groups.entries())
    for (const [index2, group2] of groups.entries())
      if (index1 > index2)
        result.push({
          allow: [[type, { ...captures, [name]: group2 }]],
          from: [[type, { ...captures, [name]: group1 }]]
        });

  return result;
}
