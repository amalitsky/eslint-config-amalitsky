const { OFF } = require('./src/constants');

const {
  rules: recommendedRules,
} = require('./src/recommended');

const { rules: importRules } = require('./src/imports');
const { rules: namingRules } = require('./src/naming');
const { rules: newlineRules } = require('./src/newlines');

const config = {
  parser: '@typescript-eslint/parser',
};

config.extends = [
  'eslint:recommended',
  'google',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:import/typescript',
];

config.rules = {
  '@typescript-eslint/no-var-requires': OFF,
  ...recommendedRules,
  ...importRules,
  ...namingRules,
  ...newlineRules,
};

module.exports = config;
