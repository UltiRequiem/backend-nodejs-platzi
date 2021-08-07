import {promises as fs} from 'fs'

async function getFileLines(file:string) {
  if (!file) throw new Error('You have to pass a file!');

  const content = await fs.readFile(file, 'utf-8');
  return content.split('\n').length - 1;
}

async function printLines() {
  const lines = await getFileLines(process.argv[2]);
  console.log(lines);
}

printLines();

