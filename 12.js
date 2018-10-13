const { GRID } = require('./grid.js');
const { convertColumn } = require('./5.js');

function lightCell(coord) {
  const row = Number(coord[1]) - 1;
  const col = convertColumn(coord);
  const cell = GRID[row][col];
  
  if (!cell) return false;
  return GRID[row][col];
}

console.log(lightCell('Z4'));