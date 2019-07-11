const mongoose = require('mongoose/browser');
const cql = require('cql-execution');
const DateTime = require('./DateTime');

function Interval(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Interval');
}
Interval.prototype = Object.create(mongoose.SchemaType.prototype);

Interval.prototype.cast = (interval) => {
  if (interval.isInterval) {
    return interval;
  }
  const casted = new cql.Interval(interval.low, interval.high, interval.lowClosed, interval.highClosed);

  // Cast Low and High values to Quantities if it is a quantity
  if (casted.low && casted.low.unit && casted.low.value) {
    casted.low = new cql.Quantity(casted.low.value, casted.low.unit);
    if (casted.high && casted.high.unit && casted.high.value) {
      casted.high = new cql.Quantity(casted.high.value, casted.high.unit);
    }
    return casted;
  }

  // Cast to DateTime if it is a string representing a DateTime
  if (casted.low) {
    casted.low = DateTime.prototype.cast(casted.low);
  }

  if (casted.high) {
    casted.high = DateTime.prototype.cast(casted.high);
  }
  return casted;
};

mongoose.Schema.Types.Interval = Interval;
module.exports = Interval;
