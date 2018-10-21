const { GRID } = require('./grid.js');
const { convertColumn } = require('./5.js');

function convertCoords(coord) {
  const x = convertColumn(coord);
  const y = Number(coord.slice(1)) - 1;

  return { x, y };
}

function calcDistance(p1, p2) {
  p1 = convertCoords(p1);
   
  p2 = convertCoords(p2);
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy).toFixed(2);
}

console.log(convertCoords('A4'));
console.log(calcDistance('A4', 'C3'));