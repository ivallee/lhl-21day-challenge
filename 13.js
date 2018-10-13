const { GRID } = require('./grid.js');
const {isRock} = require('./7.js');
const {isCurrent} = require('./8.js')

function allRocks() {
  const numberToLetter = n => String.fromCharCode(97 + n).toUpperCase();
  const output = [];
  GRID.forEach((row, i) => {
    row.forEach((col, j) => {
      const coord = numberToLetter(j) + (i+ 1).toString();
     if (isRock(coord)) {
       output.push(coord);
     }
    });

  });
  return output;
}

function allCurrents() {
  const numberToLetter = n => String.fromCharCode(97 + n).toUpperCase();
  const output = [];
  
  GRID.forEach((row, i) => {
    row.forEach((col, j) => {
      const coord = numberToLetter(j) + (i + 1).toString();
      if (isCurrent(coord)) {
        output.push(coord);
      }
    });

  });
  return output;
}
console.log(allRocks());
console.log(allCurrents());
