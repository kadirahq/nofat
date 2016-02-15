# nofat

> status: alpha

NoFat is an attempt to cure js-fatigue by providing the user a set of default configurations. After setting up nofat (which won't take a minute), developers can start working on their application instead of messing around with boilerplates.

## setup

 - Install the `nofat` module and the `babel-polyfill`

```
npm install -S babel-polyfill
npm install -D nofat
```

 - Configure npm scripts (copy this to your `package.json`)

```
"scripts": {
  "nf:build": "nofat build",
  "nf:lint": "nofat lint",
  "nf:test": "nofat test",
  "start": "node lib/index.js"
}
```

- Place all your code in `src` directory with `src/index.js` as the starting point
- Place all your test code along with source code inside directories named `__tests__`.

```
src/
  hello.js
  index.js
  __tests__/
    index.js
```
