// Challenge 1 - Count rows in a grid

const { GRID } = require('./grid.js');

function countRows(){
  return GRID.length;
}

module.exports = {
  countRows
}