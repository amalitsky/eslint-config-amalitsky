const { OFF, ERROR, WARN } = require('./constants');

const rules = {
  'import/prefer-default-export': OFF,
  'import/no-default-export': ERROR,
  'import/order': ERROR,
  'import/no-dynamic-require': WARN,
};

module.exports = { rules };
