import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
  },
  { languageOptions: { globals: globals.browser } },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": ts,
      prettier: prettierPlugin,
    },
    rules: {
      ...ts.configs.recommended.rules,
      indent: ["warn", 2, { SwitchCase: 1 }],
      semi: ["warn", "always"],
      "no-console": "warn",
      "prefer-const": "warn",
      "prettier/prettier": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        { allowExpressions: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": "warn",
      eqeqeq: ["warn", "always"],
    },
  },
  {
    ignores: ["dist", "node_modules"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
