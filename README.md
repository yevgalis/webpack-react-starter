## Introduction

This is a webpack boilerplate for React projects. It includes `typescript`, `babel`, support for `css-modules`, `scss`, runs `eslint` and `stylelint` on commit (pre-commit hook using `husky` and `lint-staged`) etc.

## Table Of Contents:
- [Usage](#usage)
- [Tools](#tools)
- [Features](#features)
  - [ESLint](#eslint)
  - [Stylelint](#stylelint)
  - [Import aliases](#import-aliases)
  - [CSS-modules](#css-modules)
  - [Husky and Lint-staged](#husky-and-lint-staged)

---

## Usage

### `npm install`
Install all dependencies before you start working on a project.

### `npm run start`
Start project on a local server (port 1337).

### `npm run build`
Build project for deployment.

### `npm run eslint`
Run [ESLint](https://eslint.org/) on your project. If you want eslint to try to automatically fix as many issues as possible run `npm run eslint-fix`.

### `npm run stylelint`
Run [Stylelint](https://stylelint.io/) on your project. If you want stylelint to try to automatically fix as many issues as possible run `npm run stylelint-fix`.

---

# Tools

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
- SCSS support
- ESLint
- Stylelint
- Husky
- Lint-staged

---

## Features

### ESLint
The [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) is taken as a basis, but a number of changes have been made to the rules based on my personal preferences.

### Stylelint
Based on [HTML Academy](https://github.com/htmlacademy/stylelint-config-htmlacademy) stylelint configuration.

### Import aliases
When importing local components / styles / utils you can use alias `@` that builds paths relative to `src` folder.

```jsx
// basic relative path
import App from '../../../components/app/app';
import styles from '../../../styles/grid.module.css';

// alias
import App from '@/components/app/app';
import styles from '@/styles/grid.module.css';
```

### CSS-modules
To use CSS modules you must include '***.module***' into styles file name (e.g. `app.module.css`). It is needed for webpack to generate unique class names during build proccess. Name for a production build is generated as ***base64***. For development it is generated as a ***path_to_module--module_name__local_class_name*** for the purposes of debugging. For more information, please see webpack documentation for [css-loader](https://webpack.js.org/loaders/css-loader/#modules).

Import of css styles inside component should be done as a react component import:

```css
/* app.module.css */
.title {
    color: blue;
}
```

```jsx
// App.js
import styles from './app.module.css';

export const App = () => {
    return (
        <h1 className={styles.title}>Lorem Ipsum</h1>
    );
};
```

Resulting class names:
```jsx
// production build
<h1 class="ebATGE8ngg8SUX036i9G">Lorem ipsum</h1>

// dev
<h1 class="src-components-app--app-module__title">Lorem ipsum</h1>
```

### Husky and Lint-staged
After you commit local changes, pre-commit hook fires and starts eslint and stylelint with `-fix` option. If you want to change this behavior, change config in `package.json` or disable it completely.

```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.+(js|jsx|ts|tsx)": [
      "npm run eslint-fix"
    ],
    "*.+(css|scss)": [
      "npm run stylelint-fix"
    ]
  }
```
