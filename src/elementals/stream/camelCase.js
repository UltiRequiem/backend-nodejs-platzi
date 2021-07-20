const { Transform } = require('stream');

function capitalize(str) {
  return str
    .split(' ')
    .reduce((acc, cur) => acc + cur[0].toUpperCase() + cur.slice(1));
}

const transformStream = new Transform({
  transform(chunk, _encoding, callback) {
    this.push(capitalize(chunk.toString()));
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
