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

  val.high = (typeof interval.high !== 'undefined') ? interval.high : null;
  val.low_closed = (typeof interval.low_closed !== 'undefined') ? interval.low_closed : null;
  val.high_closed = (typeof interval.high_closed !== 'undefined') ? interval.high_closed : null;
  return val;
};

mongoose.Schema.Types.Interval = Interval;
module.exports = Interval;
