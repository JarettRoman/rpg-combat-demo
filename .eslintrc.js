module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    curly: 0,
    'brace-style': ['error', 'stroustrup'],
    indent: ['error', 2],
    '@typescript-eslint/no-unused-vars': 2,
    'max-len': [
      'error',
      { code: 80, ignoreComments: true, ignoreTrailingComments: true },
    ],
    'function-paren-newline': ['error', { minItems: 3 }],
  },
};
