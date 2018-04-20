const mongoose = require('mongoose');
const cql = require('cql-execution');

function DateTime(key, options) {
  mongoose.SchemaType.call(this, key, options, 'DateTime');
}
DateTime.prototype = Object.create(mongoose.SchemaType.prototype);

DateTime.prototype.cast = (dateTime) => {
  if (!Date.parse(dateTime)) {
    throw new Error(`DateTime: ${dateTime} is not a valid DateTime`);
  }

  return cql.DateTime.fromDate(new Date(dateTime), 0);
};

mongoose.Schema.Types.DateTime = DateTime;
module.exports = DateTime;