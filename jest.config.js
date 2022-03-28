module.exports = {
  // eslint-disable-next-line no-warning-comments
  // fixme: Wait for @skylib/config update
  collectCoverageFrom: ["src/**/*.{ts,tsx,vue}", "!**/*.d.ts"],
  preset: "@skylib/config/src",
  testEnvironment: "@skylib/config/src/jest-env-jsdom"
};
