module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  overrides: [
    {
      files: "src/assertions.ts",
      rules: { "@skylib/function-properties-style": "off" }
    }
  ]
};
