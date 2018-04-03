const mongoose = require('mongoose');

class Interval {
  constructor(low, high, low_closed, high_closed) {
    this.low = low;
    this.high = high;
    this.low_closed = low_closed;
    this.high_closed = high_closed;
  }

  toBSON() {
    const interval = {};
    interval.low = this.low;
    interval.high = this.high;
    interval.low_closed = this.low_closed;
    interval.high_closed = this.high_closed;
    return interval;
  }
}

class IntervalSchema extends mongoose.SchemaType {
  static cast(interval) {
    return new Interval(interval.low, interval.high, interval.low_closed, interval.high_closed);
  }
}

mongoose.Schema.Types.Interval = IntervalSchema;
module.exports = Interval;
