const mongoose = require('mongoose');

function Interval(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Interval');
}
Interval.prototype = Object.create(mongoose.SchemaType.prototype);

Interval.prototype.cast = (interval) => {
  if (typeof interval.low === 'undefined') {
    throw new Error(`Interval: ${interval} does not have a low value`);
  }
  const val = { low: interval.low };

  val.high = interval.high;
  val.lowClosed = interval.lowClosed != null ? interval.lowClosed : true;
  val.highClosed = interval.highClosed != null ? interval.highClosed : true;
  return val;
};

mongoose.Schema.Types.Interval = Interval;
module.exports = Interval;
