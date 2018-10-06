const { GRID } = require('./grid.js');

function convertColumn(coord) {
  return coord[0].toLowerCase().charCodeAt() - 97;
}

module.exports = { convertColumn };
