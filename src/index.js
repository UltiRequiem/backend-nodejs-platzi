const express = require('express');

const cors = require('cors');

const {
  logErrors,
  errorHandler,
  wrapError
} = require('./utils/middleware/errorHandlers');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('./utils/schemas/movies');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const config = require('./config');

const moviesAPI = require('./routes/movies');

const app = express();

app.use(express.json());

app.use(cors());

moviesAPI(app);

// 404 Handler
app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () =>
  console.log(`Running on https://localhost:${config.port}`)
);
