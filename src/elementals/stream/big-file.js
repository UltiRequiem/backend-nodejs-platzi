const fs = require('fs');

const file = fs.createWriteStream('./big');

const LINES = 10000000;

for (let i = 0; i <= LINES; i++) {
  file.write('Python FTW\n');
}
