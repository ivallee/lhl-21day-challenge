const { GRID } = require('./grid.js');
const { lightCell } = require('./6.js');

function isRock(coord) {
  return lightCell(coord) === '^';
}

console.log(isRock('D1'));