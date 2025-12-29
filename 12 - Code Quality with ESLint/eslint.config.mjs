import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      // Stricter rules similar to the ESLint playground
      "no-console": "error",
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-duplicate-imports": "error",
      "no-constant-condition": "error",
      "no-empty": "error",
      "no-extra-semi": "error",
      "no-irregular-whitespace": "error",
      "no-unreachable": "error",
      "no-case-declarations": "error",
      "no-fallthrough": "error",
      "no-self-assign": "error",
      "no-shadow": "error",
      "no-redeclare": "error",
      "no-unsafe-finally": "error",
      "constructor-super": "error",
      "getter-return": "error",
      "valid-typeof": "error"
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
]);
