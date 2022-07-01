const config = require('./index');

const { OFF } = require('./constants');

config.parserOptions = {
  ecmaVersion: 2018,
};

config.env = {
  es6: true,
  node: true,
};

const rules = {
  '@typescript-eslint/no-var-requires': OFF,
};

Object.assign(config.rules, rules);

module.exports = config;
