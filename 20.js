const { GRID } = require('./grid.js');
const { howDangerous } = require('./18.js');

function safetyReport() {
  const numberToLetter = n => String.fromCharCode(97 + n).toUpperCase();
  return GRID.map((row, i) => {
    return row.map((cell, j) => {
      const coord = numberToLetter(j) + (i + 1).toString();
      const danger = howDangerous(coord);
      return danger ? danger : 0;
    })
  });
}

console.log(safetyReport());