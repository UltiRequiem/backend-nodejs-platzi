/* eslint-disable no-unused-expressions */
const fs = require('fs');

const server = require('http').createServer();

const PORT = 3000;

server.on('request', (_req, res) => {
  const src = fs.createReadStream('./big');
  src.pipe(res);
});

server.listen(PORT);
