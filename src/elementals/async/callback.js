/* eslint-disable no-unused-expressions */

const asyncCallback = (cb) => {
  setTimeout(() => {
    Math.random() < 0.5
      ? cb(null, 'Hello World')
      : cb(new Error('Hello Error'), null);
  }, 500);
};

asyncCallback((err, msg) => {
  err ? console.log(err) : console.log(msg);
});
