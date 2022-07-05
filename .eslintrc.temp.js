// eslint-disable-next-line @skylib/no-restricted-syntax/eslintrc-no-temp -- Wait for @skylib/eslint-plugin update
module.exports = {
  overrides: [
    {
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-only-export-check"
      ),
      files: "./src/guards.ts"
    }
  ]
};
