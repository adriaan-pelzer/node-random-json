# node-random-js
## generate random json objects

### install

```
  npm install node-random-js
```
or
```
  yarn add node-random-js
```

### quick start

```js
  const generateRandomJson = require('node-random-json')({});

  console.log(generateRandomJson('Object'));
```

### config options

```js
  const generateRandomJson = require('node-random-json')({
    chars: [ LIST_OF_CHARS_TO_USE_IN_RANDOM_STRINGS ],
    // default: [a-zA-Z0-9.- ]
    types: [ LIST_OF_TYPES_TO_GENERATE_IN_JSON ],
    // default: ['Object', 'Array', 'Date', 'String', 'Number', 'Boolean', 'Null', 'Undefined', 'Function']
    maxDepth: MAXIMUM_OBJECT_DEPTH,
    // default: 10
    minStrLen: MINIMUM_STRING_LENGTH,
    // default: 5
    maxStrLen: MAXIMUM_STRING_LENGTH,
    // default: 20
    minArraySize: MINIMUM_ARRAY_SIZE,
    // default: 0
    maxArraySize: MAXIMUM_ARRAY_SIZE,
    //default: 20
    minObjectSize: MINIMUM_OBJECT_SIZE,
    // default: 0
    maxObjectSize: MAXIMUM_OBJECT_SIZE,
    // default: 20
    maxAbsNumber: MAXIMUM_ABSOLUTE_NUMBER
    // default: 2000000
  });

  console.log(generateRandomJson('Object'));

```
