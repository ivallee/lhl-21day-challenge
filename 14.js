const { GRID } = require('./grid.js');
const { isShip } = require('./9.js');

function allShips() {
  const numberToLetter = n => String.fromCharCode(97 + n).toUpperCase();
  const output = [];

  GRID.forEach((row, i) => {
    row.forEach((col, j) => {
      const coord = numberToLetter(j) + (i + 1).toString();
      if (isShip(coord)) {
        output.push(coord);
      }
    });

  });
  return output;
}

module.exports = {
  allShips
};