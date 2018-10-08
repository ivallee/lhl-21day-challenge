const { GRID } = require('./grid.js');
const { lightCell } = require('./6.js');

function isCurrent(coord) {
  return lightCell(coord) === '~';
}

module.exports = { isCurrent };