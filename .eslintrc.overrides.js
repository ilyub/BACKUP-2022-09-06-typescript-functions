module.exports = {
  overrides: [
    {
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-only-export-check"
      ),
      files: "./src/types/{configurable,object-keys}.ts"
    }
  ]
};
