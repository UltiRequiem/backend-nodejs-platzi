/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-expressions */

const helloPromises = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('Hello World') : reject('Error');
    }, 500);
  });

const printResolve = async (promise) => {
  try {
    const msg = await promise;
    console.log(msg);
  } catch (err) {
    console.error(err);
  }
};

printResolve(helloPromises());
