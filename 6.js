const { GRID } = require('./grid.js');
const { convertColumn } = require('./5.js');

function lightCell(coord) {
  let row = Number(coord.slice(1)) - 1;
  let col = convertColumn(coord);
  return GRID[row][col];
}

module.exports = { lightCell };