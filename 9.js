const { GRID } = require('./grid.js');
const { lightCell } = require('./6.js');

function isShip(coord) {
  return lightCell(coord) === '~';
}

module.exports = { isShip };