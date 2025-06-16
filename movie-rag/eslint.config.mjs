import globals from "globals"
import pluginJs from "@eslint/js"
import * as tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginPrettier from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Global settings
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },

  // Base configs
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // React configs
  {
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },

  // Prettier config
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginPrettier.configs.recommended.rules,
      "prettier/prettier": [
        "error",
        {
          semi: false,
        },
      ],
    },
  },
  prettierConfig,

  // Custom rules
  {
    rules: {
      camelcase: "off",
      "spaced-comment": "error",
      quotes: ["error", "double"],
      "no-duplicate-imports": "error",
    },
  },
]
