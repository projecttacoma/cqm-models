const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

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
    casted.low = new cql.Quantity(casted.low);
    if (casted.high && casted.high.unit && casted.high.value) {
      casted.high = new cql.Quantity(casted.high);
    }
    return casted;
  }

  // Cast to DateTime if it is a string representing a DateTime
  if (casted.low) {
    if (!Date.parse(casted.low)) {
      throw new Error(`DateTime: ${casted.low} is not a valid DateTime`);
    }
    casted.low = cql.DateTime.fromJSDate(new Date(casted.low), 0);
  }

  if (casted.high) {
    if (!Date.parse(casted.high)) {
      throw new Error(`DateTime: ${casted.high} is not a valid DateTime`);
    }
    casted.high = cql.DateTime.fromJSDate(new Date(casted.high), 0);
  }
  return casted;
};

mongoose.Schema.Types.Interval = Interval;
module.exports = Interval;
