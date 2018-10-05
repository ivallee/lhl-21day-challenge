const { GRID } = require('./grid.js');

function convertColumn(coord) {
  return coord[0].toLowerCase().charCodeAt() - 97;
}

console.log(convertColumns('C4'));
