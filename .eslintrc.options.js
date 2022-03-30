module.exports = {
  consistentImport: [
    {
      localName: "matchers",
      sourcePattern: "jest-extended/all",
      type: "wildcard"
    },
    { sourcePattern: "@sinonjs/fake-timers", type: "wildcard" }
  ],
  extends: [require("./src/configs/eslintrc.options")("@/")]
};
