const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

function Ratio(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Ratio');
}
Ratio.prototype = Object.create(mongoose.SchemaType.prototype);

Ratio.prototype.cast = (ratio) => {
  if (typeof ratio.numerator === 'undefined') {
    throw new Error(`Ratio: ${ratio} does not have a numerator`);
  } else if (typeof ratio.denominator === 'undefined') {
    throw new Error(`Ratio: ${ratio} does not have a denominator`);
  }

  return new cql.Ratio(ratio.numerator, ratio.denominator);
};

mongoose.Schema.Types.Ratio = Ratio;
module.exports = Ratio;
