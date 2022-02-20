module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "object-curly-spacing": "off",
    "no-tabs": "off",
    "indent": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "spaced-comment": "off",
    "new-cap": "off",
    "camelcase": "off",
    "no-case-declarations": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "max-len": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "space-before-function-paren": "off",
  },
};
