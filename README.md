## Introduction

This is a webpack boilerplate for React projects. It includes `typescript`, `babel`, support for `css-modules`, runs `eslint-fix`, `stylelint-fix` and `prettier-fix` on commit (pre-commit hook using `husky` and `lint-staged`) etc.

## Usage

### `npm install`

Install all dependencies before you start working on a project.

### `npm run start`

Start project on a local server.

### `npm run build`

Build project for deployment.

### `npm run eslint`

Run [ESLint](https://eslint.org/) on your project. If you want eslint to try to automatically fix as many issues as possible run `npm run eslint-fix`.

### `npm run stylelint`

Run [Stylelint](https://stylelint.io/) on your project. If you want stylelint to try to automatically fix as many issues as possible run `npm run stylelint-fix`.

### `npm run prettier`

Run [Prettier](https://prettier.io/) on your project. If you want prettier to automatically fix as many issues as possible run `npm run prettier-fix`.

---

## Tools

- Webpack
- Babel
- React
- React Router
- TypeScript
- PostCSS
  - Minification
  - Autoprefixer
  - Fix known [flexbox bugs](https://github.com/philipwalton/flexbugs)
  - Polyfills for modern CSS features
- CSS modules support
- ESLint
- Stylelint
- Prettier
- Husky
- Lint-staged

---

## Features

### Import aliases

When importing local components/styles/utils you can use alias `@` that builds paths relative to `src` folder.

> All new folders and files inside `src` will be automatically available via import `@/your_folder_name` or `@/your_filename`

```tsx
// basic relative path
import { App } from '../../../components/app';
import styles from '../../../styles/grid.module.css';

// alias
import { App } from '@/components/app';
import styles from '@/styles/grid.module.css';
```

### CSS-modules

To use CSS modules you must include '**_.module_**' into styles file name (e.g. `app.module.css`). It is needed for webpack to generate unique class names during build process. Name for a production build is generated as `base64`. For development, it is generated as a `path_to_module--module_name__local_class_name` for the purposes of debugging. For more information, please see webpack documentation for [css-loader](https://webpack.js.org/loaders/css-loader/#modules).

Import of css styles inside component should be done as a React component import:

```css
/* app.module.css */
.title {
  color: blue;
}
```

```tsx
// App.js
import styles from './app.module.css';

export const App = () => {
  return <h1 className={styles.title}>Lorem Ipsum</h1>;
};
```

Resulting class names:

```tsx
// production build
<h1 class="ebATGE8ngg8SUX036i9G">Lorem ipsum</h1>

// dev
<h1 class="src-components-app--app-module__title">Lorem ipsum</h1>
```

### Husky, Lint-staged, Prettier

After you commit local changes, pre-commit hook fires and starts eslint, stylelint and prettier with `-fix` option. If you want to change this behavior, change config in `.lintstagedrc`.

```json
{
  "*.{js,ts,jsx,tsx}": ["npm run prettier-fix", "npm run eslint-fix"],
  "*.css": ["npm run prettier-fix", "npm run stylelint-fix"],
  "!(*.css|*.js|*.jsx|*.ts|*.tsx)": "npm run prettier-fix"
}
```
