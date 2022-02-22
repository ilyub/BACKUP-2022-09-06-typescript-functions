module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    "@typescript-eslint/switch-exhaustiveness-check": "off",
    "eslint-comments/disable-enable-pair": [
      "error",
      { "allowWholeFile": true }
    ],
    "prefer-object-has-own": "off",
    "regexp/prefer-lookaround": "off"
  }
};
