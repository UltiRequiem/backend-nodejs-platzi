const fs = require('fs');

function cp(current, newPath) {
  const currentFile = `${process.cwd()}/${current}`;
  const newFile = `${process.cwd()}/${newPath}`;
  fs.copyFile(currentFile, newFile, (err) =>
    err ? console.log(err) : console.log('Done!')
  );
}

cp(process.argv[2], process.argv[3]);
