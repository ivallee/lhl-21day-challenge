const { allCurrents } = require('./13.js');

function firstCurrent() {
  return allCurrents()[0];
}

module.exports = {
  firstCurrent
};