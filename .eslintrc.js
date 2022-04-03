module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  overrides: [
    { files: ["tests/**"], rules: { "@skylib/prefer-readonly": "off" } }
  ],
  rules: {
    "@skylib/no-mutable-signature": [
      "warn",
      {
        ignoreClasses: true,
        ignoreIdentifiers: [/^mutable/u.source],
        ignoreInterfaces: true,
        ignoreNumberSignature: true,
        ignoreTypes: ["Promise", "ReadonlyMap", "ReadonlySet"]
      }
    ],
    "@skylib/no-unnecessary-readonly": "warn",
    "@skylib/no-unnecessary-writable": "warn",
    "@skylib/prefer-readonly": [
      "warn",
      {
        ignoreClasses: true,
        ignoreIdentifiers: [/^mutable/u.source],
        ignoreInterfaces: true,
        ignoreTypes: ["Promise", "ReadonlyMap", "ReadonlySet"]
      }
    ],
    "eslint-comments/require-description": "warn"
  }
};
