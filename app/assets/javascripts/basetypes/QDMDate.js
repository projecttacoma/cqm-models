const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

// cql.Date constructor name overlaps with Mongoose Date, so a custom class (CqlDate) is added
class CqlDate extends cql.Date {}
function QDMDate(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Date');
}
QDMDate.prototype = Object.create(mongoose.SchemaType.prototype);

QDMDate.prototype.cast = (date) => {
  if (date == null) {
    return date;
  }

  // Already a CQL Date
  if (date.isDate) {
    return date;
  }

  // Object
  if (typeof date === 'object') {
    const keys = Object.keys(date);
    if (keys.includes('year') && keys.includes('month') && keys.includes('day')) {
      return new CqlDate(date.year, date.month, date.day);
    }
  }

  // Date String
  const parsedDate = cql.Date.parse(date);
  if (!parsedDate) {
    throw new Error(`Date: ${date} is not a valid Date`);
  } else {
    return new CqlDate(parsedDate.year, parsedDate.month, parsedDate.day);
  }
};

mongoose.Schema.Types.QDMDate = QDMDate;
module.exports = QDMDate;
