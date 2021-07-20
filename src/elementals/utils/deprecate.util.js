const util = require('util');

const helloMyPlutonMoon = util.deprecate(
  () => console.log('Hello Pluton'),
  'My Pluton Moon is a bad book'
);

helloMyPlutonMoon()
