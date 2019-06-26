const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

function QDMDate(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Date');
}
QDMDate.prototype = Object.create(mongoose.SchemaType.prototype);

QDMDate.prototype.cast = (date) => {
  if (!Date.parse(date)) {
    throw new Error(`Date: ${date} is not a valid Date`);
  }
  return cql.Date.fromJSDate(new Date(date));
};

mongoose.Schema.Types.QDMDate = QDMDate;
module.exports = QDMDate;
