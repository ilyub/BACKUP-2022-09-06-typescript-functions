module.exports = {
  overrides: [
    {
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-only-export-check"
      ),
      files: "./src/types/object-keys.ts"
    }
  ]
};
