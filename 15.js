const { GRID } = require('./grid.js');
const { isRock } = require('./7.js');

function firstRock() {
  const numberToLetter = n => String.fromCharCode(97 + n).toUpperCase();
  let first = '';
  for (let i = 0; i < GRID.length; i++) {
    for (let j = 0; j < GRID[i].length; j++) {
      const coord = numberToLetter(j) + (i + 1).toString();
      if (isRock(coord)) {
        first = coord;
        break;
      }
    }
    if (first) break;
  };
  return first;
}

console.log(firstRock());