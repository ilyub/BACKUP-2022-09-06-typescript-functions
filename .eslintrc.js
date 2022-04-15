module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  overrides: [
    {
      files: "src/assertions.ts",
      rules: { "@skylib/function-properties-style": "off" }
    },
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    {
      files: "tests/**",
      rules: {
        "@skylib/no-multi-type-tuples": "off",
        "@skylib/prefer-readonly-props": "off"
      }
    }
  ],
  // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
  // fixme
  rules: {
    "import/namespace": "off",
    "import/no-internal-modules": [
      "warn",
      { allow: ["jest-extended/all", "ts-toolbelt/**"] }
    ]
  }
};
