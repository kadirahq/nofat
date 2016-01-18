# nofat

> status: proof-of-concept

NoFat is an attempt to cure js-fatigue by providing the user a set of default configurations. After setting up nofat (which won't take a minute), developers can start working on their application instead of messing around with boilerplate code totally unrelated to their application. For now, nofat requires users to follow a set of conventions:

 - Create a `package.json` file to put npm scripts and install nofat as a dev-dependency.
 - Place all your ES2016 code in `src`. Transpiled ES5 code will be placed in `lib`.
 - Place all your test code along with source code inside directories named `__test__`.

# Setup

 - Install the module `npm i -sD nofat`
 - Copy following to your `package.json`

```
"scripts": {
  "build": "nofat build",
  "lint": "nofat lint",
  "start": "nofat start",
  "test": "nofat test"
}
```

 - Use `npm start` to run your program
