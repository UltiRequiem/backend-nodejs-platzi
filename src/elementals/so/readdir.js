const fs = require('fs').promises;

const printFiles = async (files) => {
  console.log(await files);
};

printFiles(fs.readdir(__dirname));
