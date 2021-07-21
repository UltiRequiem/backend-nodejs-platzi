const express = require('express');

const app = express();

const { config } = require('./config');

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.get('/json', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(config.port, () =>
  console.log(`Running on https://localhost:${config.port}`)
);
