# key-enum
Simple Enum library in Javascript, Supporting Flux for enumerating Action-Types

## Installation

```sh
$ npm install vudduu/key-enum
```

## Example

```js
var keyEnum = require('key-enum');
var obj = keyEnum({
    a:null, // a:0
    b:null, // b:1
    c:{
        d:null, e:{ // d:2
            f:null, g:null // f:3, g:4
        },
        h:{
            i:null, j:null // i:5, j:6
        }
    }
});

console.log(obj); // '{"a":0,"b":1,"c":{"d":2,"e":{"f":3,"g":4},"h":{"i":5,"j":6}}}'
```

### [MIT Licensed](LICENSE)
Copyright (c) 2016 Edwin Guzman