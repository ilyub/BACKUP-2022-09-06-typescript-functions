// eslint-disable-next-line @skylib/custom/eslintrc-no-temp -- Wait for @skylib/eslint-plugin update
module.exports = {
  overrides: [
    {
      files: "./src/guards.ts",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-only-export-check"
      )
    }
  ]
};
