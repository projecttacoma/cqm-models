var mongoose = require('mongoose');

class Quantity {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  toBSON() {
    var quantity = {}
    quantity['value'] = this.value;
    quantity['unit'] = this.unit;
    return quantity;
  }
}

class QuantitySchema extends mongoose.SchemaType {
  cast(quantity) {
    return new Quantity(quantity['value'], quantity['unit']);
  }
}

mongoose.Schema.Types.Quantity = QuantitySchema;

module.exports = Quantity;
