const { GRID } = require('./grid.js');
const { lightCell } = require('./6.js');

function isRock(coord) {
  return lightCell(coord) === '^';
}

module.exports = { isRock };