module.exports = {
  env: {
    es2021: true,
    browser: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [0, { allow: 'as-needed' }],
    'jsx-quotes': [2, 'prefer-single'],
    'object-curly-newline': 'off',
    'comma-dangle': ['error', 'never'],
    'react/jsx-props-no-spreading': 'off'
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx', '**/*.test.js']
    }
  ]
};
