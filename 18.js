const { isRock } = require('./7.js');
const { isCurrent } = require('./8.js');

function howDangerous(coord) {
  if (isRock(coord)) {
    return 100;
  } else if (isCurrent(coord)) {
    return 50;
  }
}

console.log(howDangerous('E3'))