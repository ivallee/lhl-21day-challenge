const { countRows } = require('./1.js');
const { countColumns } = require('./2.js');
const { allRocks, allCurrents } = require('./13.js');


function percentageReport() {

  function format(x) {
    return Number.parseFloat(x * 100).toFixed(2);
  }

  const size = countColumns() * countRows();
  const rocks = allRocks().length / size;
  const currents = allCurrents().length / size;
  
  return [format(rocks), format(currents)];

}

console.log(percentageReport());