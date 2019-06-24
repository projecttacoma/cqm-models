const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

function Any(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Any');
}
Any.prototype = Object.create(mongoose.SchemaType.prototype);

function RecursiveCast(any) {
  if (any && any.value && any.unit) {
    return new cql.Quantity(any);
  }
  if (any && any.code && any.system) {
    if (typeof any.code === 'undefined') {
      throw new Error(`Code: ${any} does not have a code`);
    } else if (typeof any.system === 'undefined') {
      throw new Error(`Code: ${any} does not have a code system oid`);
    }

    const val = { code: any.code, system: any.system };
    val.display = (typeof any.display !== 'undefined') ? any.display : null;
    val.version = (typeof any.version !== 'undefined') ? any.version : null;

    return new cql.Code(val.code, val.system, val.version, val.display);
  }
  if (any && any.low) {
    const casted = new cql.Interval(any.low, any.high, any.lowClosed, any.highClosed);

    // Cast Low and High values to Quantities if it is a quantity
    if (casted.low && casted.low.unit && casted.low.value) {
      casted.low = new cql.Quantity(casted.low);
      if (casted.high && casted.high.unit && casted.high.value) {
        casted.high = new cql.Quantity(casted.high);
      }
      return casted;
    }

    // Cast to DateTime if it is a string representing a DateTime
    if (casted.low && Date.parse(casted.low)) {
      casted.low = cql.DateTime.fromJSDate(new Date(casted.low), 0);
    }
    if (casted.high && Date.parse(casted.high)) {
      casted.high = cql.DateTime.fromJSDate(new Date(casted.high), 0);
    }
    return casted;
  }
  if (Array.isArray(any)) {
    const casted = [];
    any.forEach((val) => {
      casted.push(RecursiveCast(val));
    });
    return casted;
  }
  if (Number.isFinite(any)) {
    return any;
  }
  if (Date.parse(any)) {
    return cql.DateTime.fromJSDate(new Date(any), 0);
  }
  return any;
}

Any.prototype.cast = any => RecursiveCast(any);

mongoose.Schema.Types.Any = Any;
module.exports = Any;
