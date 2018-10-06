// Challenge 2 - count columns

const { GRID } = require('./grid.js');

function countColumns() {
  return GRID[0].length;
}

module.exports = {
  countColumns
}