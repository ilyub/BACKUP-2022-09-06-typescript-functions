module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  overrides: [
    {
      files: "src/assertions.ts",
      rules: { "@skylib/function-properties-style": "off" }
    }
  ],
  // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
  // fixme
  rules: {
    "import/no-internal-modules": [
      "warn",
      {
        allow: [
          "@skylib/*/configs/*",
          "@skylib/config/src/*",
          "date-fns/locale/*",
          "jest-extended/all",
          "src/testUtils",
          "ts-toolbelt/**"
        ]
      }
    ]
  }
};
