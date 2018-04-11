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
  val.low_closed = interval.low_closed != null ? interval.low_closed : true;
  val.high_closed = interval.high_closed != null ? interval.high_closed : true;
  Object.defineProperty(val, 'lowClosed', {
    enumerable: false,
    get() {
      return this.low_closed;
    },
    set(newValue) {
      this.low_closed = newValue;
    },
  });
  Object.defineProperty(val, 'highClosed', {
    enumerable: false,
    get() {
      return this.high_closed;
    },
    set(newValue) {
      this.high_closed = newValue;
    },
  });
  return val;
};

mongoose.Schema.Types.Interval = Interval;
module.exports = Interval;
