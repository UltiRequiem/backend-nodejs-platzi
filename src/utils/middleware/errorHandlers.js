const boom = require('@hapi/boom');

const config = require('../../config');

const withErrorStack = (err, stack) => (config.dev ? { ...err, stack } : err);

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapError(err, req, res, next) {
  if (!err.isBoom) next(boom.badImplementation(err));

  next(err);
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload }
  } = err;
  res.status(statusCode || 500);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
  wrapError
};
