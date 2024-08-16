# Introduction to Backend development with JavaScript and TypeScript.

## Table of Content
- [Author](#author)
- [Description](#description)
- [Node Installation](#setup)
___

- [ES6: Basic](0x00-ES6_basic/README.md)
- [ES6: Classes](0x02-ES6_classes/README.md)
- [ES6: Data Manipulation](0x03-ES6_data_manipulation/README.md)
- [ES6: Promise](0x01-ES6_promise/README.md)
- [TypeScript](0x04-TypeScript/README.md)
___

- [Requirements](#requirements)

# Description

## Concepts

*For this project, we expect you to look at these concepts:*

- [JavaScript programming](https://intranet.alxswe.com/concepts/852)
- [Software Linter](https://intranet.alxswe.com/concepts/542)

# Resources

**Read or watch:**
- [ECMAScript 6 - ECMAScript 2015](https://intranet.alxswe.com/rltoken/NW1dFLFExQ12_hD8yvkV3A)
- [Statements and declarations](https://intranet.alxswe.com/rltoken/sroRUsUvOZV28V99MHDenw)
- [Arrow functions](https://intranet.alxswe.com/rltoken/N2WLylppCtkkX3YFFtyUHw)
- [Default parameters](https://intranet.alxswe.com/rltoken/kbw9gMO6sdeOKAY23SYVgA)
- [Rest parameter](https://intranet.alxswe.com/rltoken/erZfCvacuGVk9z1CQlJvYQ)
- [Javascript ES6 — Iterables and Iterators](https://intranet.alxswe.com/rltoken/k4hZsX3vRfX2FkAithvjoA)
- [Promise](https://intranet.alxswe.com/rltoken/j_0FTFbkTg42JMcAbNPOVQ)
- [JavaScript Promise: An introduction](https://intranet.alxswe.com/rltoken/2Q2LzNFokcUwpA2u3FKG6Q)
- [Await](https://intranet.alxswe.com/rltoken/UXb3S2PMBe-SLJ55isMcow)
- [Async](https://intranet.alxswe.com/rltoken/_K0C7pgEjwaIzU9RpwCb8g)
- [Throw / Try](https://intranet.alxswe.com/rltoken/UTjDgvKk5l892Xslh0vqcQ)

# Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/KDGvEqVWIsvOQfCcwDNHNg), **without the help of Google:**

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops
- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an `async` function

# Requirements

## General
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS `12.11.x`
- Allowed editors: `vi` , `vim` , `emacs` , `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the [Jest Testing Framework](https://intranet.alxswe.com/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q)
- Your code will be analyzed using the linter [ESLint](https://intranet.alxswe.com/rltoken/Ttd9w5jERwTErJW3DDbVoQ) along with specific rules that we’ll provide
- All of your functions must be exported

# Setup

# Install NodeJS `12.11.x`

(in your home directory):

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

# Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install` .

# Configuration files

Add the files below to your project directory

`package.json`

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

`babel.config.js`

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

`utils.js`

Use when you get to tasks requiring `uploadPhoto` and `createUser`.

```javascript
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```

`.eslintrc.js`

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
 },
 extends: [
   'airbnb-base',
   'plugin:jest/all',
 ],
 globals: {
   Atomics: 'readonly',
   SharedArrayBuffer: 'readonly',
 },
 parserOptions: {
   ecmaVersion: 2018,
   sourceType: 'module',
 },
 plugins: ['jest'],
 rules: {
   'no-console': 'off',
   'no-shadow': 'off',
   'no-restricted-syntax': [
     'error',
     'LabeledStatement',
    'WithStatement',
   ],
 },
 overrides:[
   {
     files: ['*.js'],
     excludedFiles: 'babel.config.js',
   }
 ]
};
```

# and…

Don’t forget to run `$ npm install` when you have the `package.json`

# Response Data Format

`uploadPhoto` returns a response with the format

```javascript
{
  status: 200,
  body: 'photo-profile-1',
}
```

`createUser` returns a response with the format

```javascript
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```
