// Format String
console.log('Un %s y un %s.', 'perrito', 'gatito');

console.assert(42 === '42');

// eslint-disable-next-line eqeqeq
console.assert(42 == '42');

// console.trace('Hello');

const utils = require('util');

const debuglog = utils.debuglog('foo');

debuglog('hello from foo');
