module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2020, // es11, Node 14.0.0
    sourceType: "module",
  },
  rules: {},
};
