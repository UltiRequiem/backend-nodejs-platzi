/* eslint-disable no-unused-expressions */
const { Readable } = require('stream');

const readableStream = new Readable({
  read() {
    setTimeout(() => {
      this.currentCharCode > 90
        ? this.push(null)
        : this.push(String.fromCharCode(this.currentCharCode++));
    }, 100);
  }
});

readableStream.currentCharCode = 65;

readableStream.pipe(process.stdout);
