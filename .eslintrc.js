module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    'no-console': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/extensions': [0, { js: 'always' }],
    'linebreak-style': 0,
  },
};
