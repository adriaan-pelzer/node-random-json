const R = require('ramda');

module.exports = ({
  chars = R.range(48, 57).concat(R.range(65, 90)).concat(R.range(97, 122)).concat([32, 45, 46]).map(charCode => String.fromCharCode(charCode)),
  types = ['Object', 'Array', 'Date', 'String', 'Number', 'Boolean', 'Null', 'Undefined', 'Function'],
  maxDepth = 10,
  minStrLen = 5,
  maxStrLen = 20,
  minArraySize = 0,
  maxArraySize = 20,
  minObjectSize = 0,
  maxObjectSize = 20,
  maxAbsNumber = 2000000
}) => {
  const random = max => Math.floor(Math.random() * Math.floor(max));
  const randomThing = things => things[random(things.length)];
  const randomRange = (min, max) => R.range(0, min + random(max - min));

  const randomType = types => depth => depth > maxDepth
    ? randomThing(types.filter(type => type !== 'Array' && type !== 'Object'))
    : randomThing(types);

  const typeFunctions = {
    Object: (type, depth) => R.fromPairs(
      randomRange(minObjectSize, maxObjectSize)
        .map(() => randomType(types)(depth))
        .map(type => typeFunctions[type](type, depth + 1))
        .map(value => ([ typeFunctions['String']('String', depth + 1), value ]))
    ),
    Array: (type, depth) => randomRange(minArraySize, maxArraySize)
      .map(() => randomType(types)(depth))
      .map(type => typeFunctions[type](type, depth + 1)),
    Date: () => new Date(),
    String: () => randomRange(minStrLen, maxStrLen)
      .map(() => randomThing(chars))
      .join(''),
    Number: () => random(maxAbsNumber) - random(maxAbsNumber),
    Boolean: () => random(2) === 1 ? true : false,
    Null: () => null,
    Undefined: () => undefined,
    Function: () => () => {},
    Default: type => {
      throw new Error(`unsupported type ${type}`);
    }
  };

  return (type = randomType(types)(0), depth = 0) => (typeFunctions[type] || typeFunctions.Default)(type, depth);
};

if (!module.parent) {
  console.log(JSON.stringify(module.exports({})('Object'), null, 2));
}
