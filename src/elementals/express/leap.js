/* eslint-disable no-unused-expressions */
const express = require('express');

const app = express();

const PORT = 2006;

app.get('/', (_req, res) => {
  res.send(
    `Introduce the year in the url. Example: https://localhost:${PORT}/2020`
  );
});

app.get('/:year', (req, res) => {
  const year = parseInt(req.params.year, 10);

  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? res.json({ leapYear: true })
    : res.json({ leapYear: false });
});

app.listen(PORT, () => console.log(`Listening on https://localhost:${PORT}`));
