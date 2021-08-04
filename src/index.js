const express = require('express');

const config = require('./config');
const moviesAPI = require('./routes/movies');

const app = express();

app.use(express.json())

moviesAPI(app)

app.listen(config.port, () =>
  console.log(`Running on https://localhost:${config.port}`)
);
