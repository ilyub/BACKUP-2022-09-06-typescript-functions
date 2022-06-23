module.exports = {
  extends: [
    require.resolve("@skylib/config/src/eslintrc"),
    require.resolve("@skylib/config/src/eslintrc.allow-type-assertions"),
    "./configs/eslintrc"
  ],
  overrides: [
    {
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-only-export-check"
      ),
      files: ["./src/guards.ts", "./src/types/object-keys.ts"]
    },
    { extends: ["./.eslintrc.overrides", "./.eslintrc.temp"], files: "**" }
  ]
};
