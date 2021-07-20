/* eslint-disable no-unused-expressions */

const { Duplex } = require('stream');

const duplexStream = new Duplex({
  write(chunk, _encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(_size) {
    this.currentCharCode > 90
      ? this.push(null)
      : this.push(String.fromCharCode(this.currentCharCode++));
  }
});

duplexStream.currentCharCode = 65;

process.stdin.pipe(duplexStream).pipe(process.stdout);
