import {promises as fs} from 'fs'

const printFiles = async (files:Promise<string[]>) => {
  console.log(await files);
};




printFiles(fs.readdir(__dirname));
