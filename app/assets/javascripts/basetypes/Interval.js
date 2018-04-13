const mongoose = require('mongoose');
const cql = require('cql-execution');

function Interval(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Interval');
}
Interval.prototype = Object.create(mongoose.SchemaType.prototype);

Interval.prototype.cast = (interval) => {
  if (typeof interval.low === 'undefined') {
    throw new Error(`Interval: ${interval} does not have a low value`);
  }
  return new cql.Interval(interval.low, interval.high, interval.lowClosed, interval.highClosed);
};

mongoose.Schema.Types.Interval = Interval;
module.exports = Interval;
