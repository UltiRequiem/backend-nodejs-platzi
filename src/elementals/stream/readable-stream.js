const { Readable } = require('stream');

const readableStream = new Readable();

readableStream.push('MUDA '.repeat(10).concat('Golden Experience Requiem!'));
readableStream.push(null);

readableStream.pipe(process.stdout);
