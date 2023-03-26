# Eslint Presets for JavaScript and TypeScript Files
Sharable configs for ESLint to avoid copy-pasting rule files over and over again.
Very opinionated but allows to skip Prettier, yay!

## List of Configs (Rule Sets)
- `amalitsky/recommended` - default set. Doesn't extend but is commonly used on top of
  [`eslint:recommended`](https://eslint.org/docs/latest/rules/),
  [`google`](https://github.com/google/eslint-config-google) and
  [`plugin:@typescript-eslint/recommended`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts).
  Sets parser to `@typescript-eslint/parser`.

- `amalitsky/imports` - linting rules for file imports.

- `amalitsky/newlines` - rules for padding code blocks with empty lines.
  Based on `object-curly-newline` and `padding-line-between-statements` rules.

- `amalitsky/naming` - rules for naming variables, properties, classes and interfaces.
  Based on `@typescript-eslint/naming-convention` rule.

- `amalitsky/react` - rules for projects with React. Supposed to be used with
  [`react/recommended`](https://github.com/jsx-eslint/eslint-plugin-react#recommended) and
  [`react-hooks/recommended`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks).

`Recommended` set does **not** include any other rule set present in the package.

## How To Use
Run `npm install -D eslint-config-amalitsky` to install the package.

Then include rule sets you are interested in with `extends` property of `.eslintrc.js` file.
I.e. `extends: ['eslint:recommended', 'google', 'amalitsky/recommended', 'amalitsky/imports']`.

Feel free to use local [eslintrc file](./.eslintrc.js) as an example. Yep, this project code is
being linted with same rule sets it is exporting. Recursion at its best!

## Expects Following Peer Dependencies
- Not surprisingly, `eslint`
- `typescript` since `@typescript-eslint/parser` is being used
- `@typescript-eslint/parser`
- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-react` and `eslint-plugin-react-hooks` for the `react` set
- `eslint-plugin-import` for `imports` set

_Happy linting!_
