const { GRID } = require('./grid.js');
const { convertColumn } = require('./5.js');

function lightColumn(col) {
  let output = [];
  col = convertColumn(col);
  GRID.forEach(e => output.push(e[col]));
  return output;
}

console.log(lightColumn('C'));