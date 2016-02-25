# nofat

NoFat is an attempt to cure js-fatigue by providing the user a set of default configurations. After setting up nofat, developers can start working on their application instead of messing around with boilerplates. The bundle includes Babel for transpiling code, Mocha+Chai+Sinon for tests and ESLint to check code style.

## setup

 - Install `nofat` and it's peer dependencies.

```
npm install -D nofat
npm install -S babel-polyfill source-map-support
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

## why nofat?

The main reason is that it doesn't require any additional runtime dependencies (except `babel-polyfill` and `source-map-support` for now) so your finished module will be lightweight. And of course, no js-fatigue!
