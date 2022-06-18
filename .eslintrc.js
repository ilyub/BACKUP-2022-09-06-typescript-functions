module.exports = {
  extends: [
    require.resolve("@skylib/config/src/eslintrc"),
    "./configs/eslintrc",
    "./.eslintrc.overrides",
    "./.eslintrc.temp"
  ]
};
