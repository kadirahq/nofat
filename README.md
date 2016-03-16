# nofat

NoFat is an attempt to cure js-fatigue by providing the user a set of default configurations. After setting up nofat, developers can start working on their application instead of messing around with boilerplates.

## setup

 - Install `nofat` and a few dependencies.

```
npm install -D nofat
npm install -S babel-polyfill source-map-support
```

 - Configure npm scripts (add to `package.json`)

```
"scripts": {
  "prepublish": "nofat make",
  "test": "nofat test && nofat lint"
}
```

- Place all your source code in the `src` directory.

```
src/
  hello.js
  index.js
  __tests__/
    hello.js
```

## dafaq?

**why nofat?**

The main reason is that it doesn't require any additional runtime dependencies except `babel-polyfill` and `source-map-support` so your finished module will be lightweight.

**ignore files**

Add the `lib` directory to your `.gitignore` file and `src` directory to your `.npmignore` file. Note that having a `.npmignore` file is important because otherwise npm will use your `.gitignore` file as your `.npmignore` file which is not what we want.

**writing tests**

The bundle includes Mocha, Chai and Sinon for tests. You can import these modules from your test files. Nofat also includes ESLint to check code style.