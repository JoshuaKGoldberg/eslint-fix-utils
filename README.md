<h1 align="center">ESLint Fix Utils</h1>

<p align="center">
	Utilities for ESLint rule fixers and suggestions.
	🧑‍🔧
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 3" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-3-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/eslint-fix-utils/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/eslint-fix-utils" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/eslint-fix-utils?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/eslint-fix-utils/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/eslint-fix-utils" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/eslint-fix-utils?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

If you're working on an ESLint plugin, install this as a dependency:

```shell
npm i eslint-fix-utils
```

You'll then be able to use any of its exported utilities in your rules.

### Fixer APIs

### `fixRemoveArrayElement`

Version of [`removeArrayElement`](#removearrayelement) that can be passed directly as a `fix` property.

```ts
import { fixRemoveArrayElement } from "eslint-fix-utils";

// ...

export function report(index: number, node: ESTree.ArrayExpression) {
	context.report({
		fix: fixRemoveArrayElement(context, index, node.elements),
		messageId,
		node: node.elements[index],
	});
}
```

### `fixRemoveObjectProperty`

Version of [`removeObjectProperty`](#removeobjectproperty) that can be passed directly as a `fix` property.

```ts
import { fixRemoveObjectProperty } from "eslint-fix-utils";

// ...

export function report(index: number, node: ESTree.ObjectExpression) {
	context.report({
		fix: fixRemoveObjectProperty(context, node.properties[index]),
		messageId,
		node: node.properties[index],
	});
}
```

### Full APIs

#### `removeArrayElement`

Removes an element from an array expression, along with any commas that are no longer necessary.

Parameters:

1. `context`
2. `fixer`
3. `elementOrIndex`: the child expression, spread element, or a numeric index of the child
4. `parentOrElements`: the array expression node, or its `.elements` array

```ts
import { removeArrayElement } from "eslint-fix-utils";

// ...

export function report(index: number, node: ESTree.ArrayExpression) {
	context.report({
		fix(fixer) {
			// Removes the last element of the array:
			return removeArrayElement(context, fixer, index, node.elements);
		},
		messageId,
		node: node.elements[index],
	});
}
```

```diff
[
 	'a',
-	'b',
-	'c'
+	'b'
]
```

Trailing commas are removed so that the fixed code will work regardless of whether the language and location allows them.

#### `removeObjectProperty`

Removes a property from an object expression, along with any commas that are no longer necessary.

Parameters:

1. `context`
2. `fixer`
3. `property`: the property node

```ts
import { removeObjectProperty } from "eslint-fix-utils";

// ...

export function report(index: number, node: ESTree.ObjectExpression) {
	context.report({
		fix(fixer) {
			// Removes the last property of the object:
			return removeObjectProperty(context, fixer, node.properties[index]);
		},
		messageId,
		node: node.properties[index],
	});
}
```

```diff
{
 	a: 1,
-	b: 2,
-	c: 3,
+	b: 2
}
```

Trailing commas are removed so that the fixed code will work regardless of whether the language and location allows them.

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 🔧

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://azat.io"><img src="https://avatars.githubusercontent.com/u/5698350?v=4?s=100" width="100px;" alt="Azat S."/><br /><sub><b>Azat S.</b></sub></a><br /><a href="#ideas-azat-io" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/eslint-fix-utils/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/eslint-fix-utils/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/michaelfaith"><img src="https://avatars.githubusercontent.com/u/8071845?v=4?s=100" width="100px;" alt="michael faith"/><br /><sub><b>michael faith</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/eslint-fix-utils/commits?author=michaelfaith" title="Code">💻</a> <a href="#content-michaelfaith" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/eslint-fix-utils/commits?author=michaelfaith" title="Documentation">📖</a> <a href="#ideas-michaelfaith" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-michaelfaith" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-michaelfaith" title="Maintenance">🚧</a> <a href="#projectManagement-michaelfaith" title="Project Management">📆</a> <a href="https://github.com/JoshuaKGoldberg/eslint-fix-utils/commits?author=michaelfaith" title="Tests">⚠️</a> <a href="#tool-michaelfaith" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo engine](https://create.bingo).
