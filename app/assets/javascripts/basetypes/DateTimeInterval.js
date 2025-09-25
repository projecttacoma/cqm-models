const mongoose = require('mongoose/browser');
const cql = require('cql-execution');
const DateTime = require('./DateTime');

function DateTimeInterval(key, options) {
  mongoose.SchemaType.call(this, key, options, 'DateTimeInterval');
}
DateTimeInterval.prototype = Object.create(mongoose.SchemaType.prototype);

DateTimeInterval.prototype.cast = (interval) => {
  if (interval.isInterval) {
    return interval;
  }
  const casted = new cql.Interval(interval.low, interval.high, interval.lowClosed, interval.highClosed, '{urn:hl7-org:elm-types:r1}DateTime');

  // Cast to DateTime if it is a string representing a DateTime
  if (casted.low) {
    casted.low = DateTime.prototype.cast(casted.low);
  }

  if (casted.high) {
    casted.high = DateTime.prototype.cast(casted.high);
  }
  return casted;
};

mongoose.Schema.Types.DateTimeInterval = DateTimeInterval;
module.exports = DateTimeInterval;
