const mongoose = require('mongoose');
const cql = require('cql-execution');

function Any(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Any');
}
Any.prototype = Object.create(mongoose.SchemaType.prototype);

Any.prototype.cast = (any) => {
  if (any && any.value && any.unit) {
    return new cql.Quantity(any);
  }
  return any;
};

mongoose.Schema.Types.Any = Any;
module.exports = Any;
