module.exports = {
  overrides: [
    {
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-only-export-check"
      ),
      files: ["./src/guards.ts", "./src/types/object-keys.ts"]
    }
  ]
};
