module.exports = {
  disallowByRegexp: [
    // eslint-disable-next-line no-warning-comments -- Wait for https://github.com/typescript-eslint/typescript-eslint/issues/4779
    // fixme
    {
      contexts: ["code"],
      patterns: [/\b\w{25}/u.source],
      subOptionsId: "id-length"
    }
  ],
  extends: [require("./src/configs/eslintrc.options")("@/")],
  extraUtilsLocations: ["./src/configs/**"]
};
