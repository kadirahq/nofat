# nofat

> status: proof-of-concept

NoFat is an attempt to cure js-fatigue by providing the user a set of default configurations. After npm-installing nofat and copying a set of npm scripts, developers can start working on their application instead of messing around with setup code totally unrelated to their code. For now, nofat requires users to follow a set of conventions as given below.

 - Make sure you have a `package.json` file
 - Place all your code in `src` directory
 - Transpiled code will place in `lib`


# Installation

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
