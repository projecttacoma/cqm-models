var mongoose = require('mongoose');

class Interval {
  constructor(lt, gt) {
    this.lt = lt;
    this.gt = gt;
  }

  toBSON() {
    return [this.lt, this.gt];
  }
}

class IntervalSchema extends mongoose.SchemaType {
  cast(interval) {
    return new Interval(interval[0], interval[1]);
  }
}

mongoose.Schema.Types.Interval = IntervalSchema;
