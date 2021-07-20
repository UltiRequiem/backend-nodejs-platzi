const fs = require('fs');

function mkdir(path) {
  fs.mkdir(path, { recursive: true }, (err) =>
    err ? console.log(err) : console.log('Done')
  );
}

mkdir(`${process.cwd()}/${process.argv[2]}`);
