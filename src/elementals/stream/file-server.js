/* eslint-disable no-unused-expressions */
const fs = require('fs');

const server = require('http').createServer();

const PORT = 3000;

server.on('request', (_req, res) => {
  fs.readFile('./big', (err, data) => {
    err ? console.log(err) : res.end(data);
  });
});

server.listen(PORT);
