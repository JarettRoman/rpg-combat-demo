module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    curly: 0,
    'brace-style': ['error', 'stroustrup'],
    indent: ['error', 2],
    'eol-last': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 2
  }
};