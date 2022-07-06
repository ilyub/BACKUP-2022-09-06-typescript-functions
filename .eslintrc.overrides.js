module.exports = {
  overrides: [
    {
      files: "./src/types/{configurable,object-keys}.ts",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-only-export-check"
      )
    }
  ]
};
