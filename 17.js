const { allShips } = require('./14.js');

function shipReport() {
  let arr = [];
  let len = allShips().length;
  arr.push(allShips()[0]);
  arr.push(allShips()[len - 1])
  return arr;
}

console.log(shipReport())