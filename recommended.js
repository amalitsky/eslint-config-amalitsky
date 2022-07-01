const {
  OFF,
  WARN,
  ERROR,
  ALWAYS,
  NEVER,
} = require('./constants.js');

const tsEslintRules = {
  '@typescript-eslint/ban-ts-comment': WARN,
  indent: OFF, // in favor of @typescript-eslint/indent
  '@typescript-eslint/indent': [
    ERROR,
    2,
    {
      SwitchCase: WARN,
      FunctionDeclaration: {
        parameters: 'off',
      },
      FunctionExpression: {
        parameters: 'off',
      },
      ArrayExpression: 'off',
    },
  ],
  '@typescript-eslint/no-useless-constructor': ERROR,
  '@typescript-eslint/explicit-function-return-type': [
    ERROR, {
      allowExpressions: true,
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': [
    ERROR, {
      overrides: {
        constructors: 'off',
      },
    },
  ],
  '@typescript-eslint/member-ordering': ERROR,
  '@typescript-eslint/semi': ERROR,
  '@typescript-eslint/prefer-for-of': ERROR,
  '@typescript-eslint/comma-dangle': [ERROR, 'always-multiline'],
  '@typescript-eslint/member-delimiter-style': ERROR,
  '@typescript-eslint/no-unused-vars': ERROR,
};

const rules = {
  'require-jsdoc': OFF,
  'valid-jsdoc': OFF,
  'max-len': [
    ERROR,
    {
      code: 100,
      tabWidth: 2,
      ignoreUrls: true,
    },
  ],
  'wrap-iife': [
    ERROR,
    'inside',
  ],
  strict: [
    ERROR,
    'function',
  ],
  'arrow-parens': [
    ERROR,
    'as-needed',
    {
      requireForBlockBody: true,
    },
  ],
  'prefer-template': ERROR,
  'object-shorthand': ERROR,
  'prefer-arrow-callback': ERROR,
  'quote-props': [
    ERROR,
    'as-needed',
  ],
  'padded-blocks': [
    ERROR,
    NEVER,
  ],
  quotes: ERROR,
  'no-cond-assign': ERROR,
  'class-methods-use-this': ERROR,
  'no-unused-vars': [
    ERROR,
    {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: true,
    },
  ],
  'no-useless-escape': ERROR,
  'prefer-rest-params': WARN,
  'no-use-before-define': [
    WARN,
    {
      classes: false,
    },
  ],
  'no-lonely-if': ERROR,
  'no-unused-expressions': WARN,
  'object-property-newline': [
    ERROR,
    {
      allowAllPropertiesOnSameLine: false,
    },
  ],
  'newline-per-chained-call': WARN,
  'no-nested-ternary': ERROR,
  eqeqeq: ERROR,
  'no-prototype-builtins': WARN,
  'array-callback-return': ERROR,
  'object-curly-spacing': [
    ERROR,
    ALWAYS,
  ],
  'no-mixed-operators': ERROR,
  'no-return-assign': ERROR,
  'no-underscore-dangle': [
    ERROR, {
      allowAfterThis: true,
      allowAfterSuper: true,
      enforceInMethodNames: true,
    },
  ],
  'dot-notation': ERROR,
  'no-multi-assign': ERROR,
  'one-var-declaration-per-line': ERROR,
  'no-useless-return': ERROR,
  'no-loop-func': ERROR,
  'prefer-numeric-literals': ERROR,
  'prefer-destructuring': [
    ERROR,
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    },
  ],
  'implicit-arrow-linebreak': ERROR,
  'no-extra-parens': [
    ERROR,
    'all',
    {
      conditionalAssign: false,
      enforceForArrowConditionals: false,
      enforceForNewInMemberExpressions: false,
      ignoreJSX: 'multi-line',
    },
  ],
  'require-await': ERROR,
  'no-return-await': ERROR,
  'max-classes-per-file': [
    ERROR,
    1,
  ],
  'lines-between-class-members': ERROR,
  'comma-dangle': OFF, // replaced with ts rule
  'no-multiple-empty-lines': [ERROR, {
    max: 2,
    maxEOF: 0,
  }],
  ...tsEslintRules,
};

module.exports = {
  parser: '@typescript-eslint/parser',
  rules,
};
