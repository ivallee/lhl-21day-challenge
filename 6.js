const { GRID } = require('./grid.js');
const { convertColumn } = require('./5.js');

function lightCell(coord) {
  let row = Number(coord[1]) - 1;
  let col = convertColumn(coord);
  return GRID[row][col];
}

console.log(lightCell('C2'));

