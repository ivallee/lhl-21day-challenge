const { GRID } = require('./grid.js');
const { countRows } = require('./1.js');
const { countColumns } = require('./2.js');

function totalCells() {
  return countColumns() * countRows();
}