# key-enum

[![Build Status](https://travis-ci.org/vudduu/key-enum.svg?branch=master)](https://travis-ci.org/vudduu/key-enum) [![npm version](https://badge.fury.io/js/key-enum.svg)](https://www.npmjs.com/package/key-enum) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Simple Enum library in Javascript, Supporting Flux for enumerating Action-Types

## Installation

```sh
$ npm install key-enum
```

## Example 1

```js
var keyEnum = require('key-enum')
var obj = keyEnum({
  a: null,
  b: null,
  d: 4, // default
  e: 0, // default
  f: null,
  g: null
})

console.log(obj) // '{a:1, b:2, d:4, e:0, f:3, g:5}'
```

## Example 2

```js
var keyEnum = require('key-enum')
var obj = keyEnum({
  a: null,
  b: null,
  c: {
    d: null,
    e: {
      f: null, g: null
    },
    h: {
      i: null, j: null
    }
  }
})

console.log(obj) // '{a:0,b:1,c:{d:2,e:{f:3,g:4},h:{i:5,j:6}}}'
```

### [MIT Licensed](LICENSE)
Copyright (c) 2016 Edwin Guzman