/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-expressions */

const helloPromises = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('Hello World') : reject('Error');
    }, 500);
  });

const printResolve = (promise) => {
  promise
    .then((msg) => msg.toUpperCase())
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
};

printResolve(helloPromises());
