const { readFileSync } = require('fs');
let elvesDataParsed = [];
let aux = 0;

const syncReadFile = (filename) => {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
};

const RAW_ELVES_DATA = syncReadFile('./example.txt');

RAW_ELVES_DATA.forEach(item => {
  if (item) {
    aux += parseInt(item);
  } else {
    elvesDataParsed.push(aux);
    aux = 0;
  }
});

console.log(elvesDataParsed.sort((a, b) => b - a)[0]);