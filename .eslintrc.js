module.exports = {
  env: {
    browser: true,
    node: true
  },
  globals: {
    describe: true,
    test: true,
    expect: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'semi': false,
      'printWidth': 80
    }]
  }
}
