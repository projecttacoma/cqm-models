const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

function Time(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Time');
}
Time.prototype = Object.create(mongoose.SchemaType.prototype);

Time.prototype.cast = (time) => {
  if (time.isTime && time.isTime()) {
    return time;
  } else if (time.isTime) {
    // Convert DateTime to Time
    return time.getTime();
  }

  if (!Date.parse(`1984-01-01T${time}`)) {
    throw new Error(`Time: ${time} is not a valid time`);
  }

  return cql.DateTime.fromJSDate(new Date(time), 0).getTime();
};

mongoose.Schema.Types.Time = Time;
module.exports.Time = Time;
