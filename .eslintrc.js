module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
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
  plugins: ['@typescript-eslint', 'prettier', 'react'],
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
    'import/prefer-default-export': 0,
    camelcase: 0,
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
  ],
};
