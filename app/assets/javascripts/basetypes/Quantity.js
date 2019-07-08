const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

function Quantity(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Quantity');
}
Quantity.prototype = Object.create(mongoose.SchemaType.prototype);

Quantity.prototype.cast = (quantity) => {
  if (typeof quantity.value === 'undefined') {
    throw new Error(`Quantity: ${quantity} does not have a value`);
  } else if (typeof quantity.unit === 'undefined') {
    throw new Error(`Quantity: ${quantity} does not have a unit`);
  }

  return new cql.Quantity(quantity.value, quantity.unit);
};

mongoose.Schema.Types.Quantity = Quantity;
module.exports = Quantity;
