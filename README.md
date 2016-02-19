# nofat

> status: alpha

NoFat is an attempt to cure js-fatigue by providing the user a set of default configurations. After setting up nofat, developers can start working on their application instead of messing around with boilerplates. The bundle includes Babel for transpiling code, Mocha+Chai+Sinon for tests and ESLint to check code style.

## setup

 - Install all required modules

```
npm install -S babel-polyfill source-map-support
npm install -D nofat
```

 - Configure npm scripts (copy this to your `package.json`)

```
"scripts": {
  "make": "nofat build",
  "test": "nofat build && nofat test && nofat lint"
}
```

- Place all your source code in `src` directory.
- Place all your test code inside `__tests__` directories.

```
src/
  hello.js
  index.js
  __tests__/
    hello.js
```

 - Add these lines before everything else on your main files.

```
import 'babel-polyfill';
import 'source-map-support/register';
```
