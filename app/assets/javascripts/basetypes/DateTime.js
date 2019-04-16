const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

function DateTime(key, options) {
  mongoose.SchemaType.call(this, key, options, 'DateTime');
}
DateTime.prototype = Object.create(mongoose.SchemaType.prototype);

DateTime.prototype.cast = (dateTime) => {
  if (dateTime.isDateTime) {
    return dateTime;
  }

  if (!Date.parse(dateTime)) {
    throw new Error(`DateTime: ${dateTime} is not a valid DateTime`);
  }

  return cql.DateTime.fromJSDate(new Date(dateTime), 0);
};

mongoose.Schema.Types.DateTime = DateTime;
module.exports = DateTime;
