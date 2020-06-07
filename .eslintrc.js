module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier/@typescript-eslint'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.ts',
      },
    },
  },
  plugins: ["@typescript-eslint", 'react', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
        js: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'arrow-parens': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
