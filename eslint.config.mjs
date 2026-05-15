import js from "@eslint/js"

const browserGlobals = {
  document: "readonly",
  fetch: "readonly",
  FormData: "readonly",
  Headers: "readonly",
  Image: "readonly",
  localStorage: "readonly",
  navigator: "readonly",
  cancelAnimationFrame: "readonly",
  clearInterval: "readonly",
  Request: "readonly",
  requestAnimationFrame: "readonly",
  Response: "readonly",
  sessionStorage: "readonly",
  setInterval: "readonly",
  setTimeout: "readonly",
  URL: "readonly",
  window: "readonly",
}

const nodeGlobals = {
  Buffer: "readonly",
  console: "readonly",
  process: "readonly",
}

export default [
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...browserGlobals,
        ...nodeGlobals,
        React: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    },
  },
]
