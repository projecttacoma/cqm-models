const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

function Date(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Date');
}
Date.prototype = Object.create(mongoose.SchemaType.prototype);

Date.prototype.cast = (date) => {
  if (date.isDate) {
    return date;
  }

  if (!Date.parse(date)) {
    throw new Error(`DateTime: ${dateTime} is not a valid Date`);
  }

  return cql.Date.fromJSDate(new Date(date), 0);
};

mongoose.Schema.Types.Date = Date;
module.exports = Date;
