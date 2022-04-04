module.exports = {
  consistentImport: [
    { sourcePattern: "@sinonjs/fake-timers", type: "wildcard" },
    {
      localName: "matchers",
      sourcePattern: "jest-extended/all",
      type: "wildcard"
    },
    {
      filesToLint: [
        "./src/assertions.ts",
        "./src/converters.ts",
        "./src/guards.ts"
      ],
      localName: "types",
      sourcePattern: "@skylib/functions/*/types/core",
      type: "wildcard"
    }
  ],
  extends: [require("./src/configs/eslintrc.options")("@/")],
  extraDefaultExportLocations: ["jest.d.ts"],
  extraUnassignedImportLocations: ["jest-extended", "reflect-metadata"],
  extraUtilsLocations: ["./src/configs/**"]
};
