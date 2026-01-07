import js from "@eslint/js";
import globals from "globals";
import htmlPlugin from "eslint-plugin-html";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser }
  },
  {
    files: ["**/*.html"],
    plugins: { html: htmlPlugin },
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      // Stricter rules similar to the ESLint playground
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "warn",
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
]);
