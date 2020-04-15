# General info
**`webpack-react-starter`** is a boilerplate intended for use in `React` projects. The main goal for creating it was the desire to understand how `webpack` works and how to use it alongside other modern instruments for web development.

> **NOTE:** *This bundle doesn't include `Redux` and `Typescript` as I don't use them yet. Maybe I'll add them later if necessary.*

***

# Usage
### `npm install`
Install all dependencies before starting to work on a project.


### `npm start`
Start project on a local server (**`http://localhost:1337/`**)
> *the port can be changed in **`webpack.config.js`** file in **`devServer`** section*

### `npm run build`
Build project for deployment.

### `npm run test`
Run linters (Eslint, Stylelint) and tests (Jest, Enzyme).

> *All commands can be found in **`package.json`***

***


# Tools & Features
* Webpack
* Babel
* React
  * React Router
  * Prop Types
* PostCSS
  * Minification
  * Autoprefixer
  * Fix [flexbug's](https://github.com/philipwalton/flexbugs) issues
  * Polyfills for modern CSS features
* SCSS support
* Eslint
* Stylelint
* Jest
* Enzyme
* Husky

***

# Eslint
The [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) is taken as a basis, but a number of changes have been made to the rules based on my personal preferences.

***

# Stylelint
Based on [HTML Academy](https://github.com/htmlacademy/stylelint-config-htmlacademy) stylelint configuration.
