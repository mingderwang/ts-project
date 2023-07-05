module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      project: './tsconfig.json',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['@typescript-eslint', '@builder.io/mitosis'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      // Use this approach for our recommended rules configuration
      'plugin:@builder.io/mitosis/recommended',
    ],
    rules: {
      // Use this to configure rules individually
      '@builder.io/mitosis/css-no-vars': 'error',
    },
  };