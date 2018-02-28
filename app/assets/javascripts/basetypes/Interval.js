var mongoose = require('mongoose');

class Interval {
  constructor(lt, gt) {
    this.lt = lt;
    this.gt = gt;
  }

  toBSON() {
    var interval = {}
    interval['lt'] = this.lt;
    interval['gt'] = this.gt;
    return interval;
  }
}

class IntervalSchema extends mongoose.SchemaType {
  cast(interval) {
    return new Interval(interval['lt'], interval['gt']);
  }
}

mongoose.Schema.Types.Interval = IntervalSchema;

module.exports = Interval;
