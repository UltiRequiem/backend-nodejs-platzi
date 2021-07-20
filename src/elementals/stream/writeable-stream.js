const { Writable } = require('stream');

const writeableStream = new Writable({
  write(chunk, _encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(writeableStream);
