# nofat

> status: alpha

NoFat is an attempt to cure js-fatigue by providing the user a set of default configurations. After setting up nofat, developers can start working on their application instead of messing around with boilerplates. The bundle includes Babel for transpiling Mocha+Chai+Sinon for tests and ESLint to check code style.

## setup

 - Install the `nofat` and `babel-polyfill`

```
npm install -S babel-polyfill
npm install -D nofat
```

 - Configure npm scripts (copy this to your `package.json`)

```
"main": "lib/index.js",
"scripts": {
  "start": "nofat build && node lib/index.js",
  "test": "nofat build && nofat test && nofat lint"
}
```

- Place all your code in `src` directory and use `src/index.js` as the main file
- Place all your test code inside `__tests__` directories.

```
src/
  hello.js
  index.js
  __tests__/
    hello.js
```
