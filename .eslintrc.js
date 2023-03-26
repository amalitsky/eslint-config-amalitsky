const config = require('./src/recommended');

const { rules: importRules } = require('./src/imports');
const { rules: namingRules } = require('./src/naming');
const { rules: newlineRules } = require('./src/newlines');

const { OFF } = require('./src/constants');

config.parserOptions = {
  ecmaVersion: 2018,
};

config.env = {
  es6: true,
  node: true,
};

config.extends = [
  'eslint:recommended',
  'google',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:import/typescript',
];

const rules = {
  '@typescript-eslint/no-var-requires': OFF,
};

Object.assign(
  config.rules,
  importRules,
  namingRules,
  newlineRules,
  rules,
);

module.exports = config;
