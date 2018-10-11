const { GRID } = require('./grid.js');

function lightRow(row) {
  return GRID[row - 1];
}

console.log(lightRow(2));
