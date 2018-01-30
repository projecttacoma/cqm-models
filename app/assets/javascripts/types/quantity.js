var mongoose = require('mongoose');

class Quantity {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  toBSON() {
    return [this.value, this.unit];
  }
}

class QuantitySchema extends mongoose.SchemaType {
  cast(quantity) {
    return new Quantity(quantity[0], quantity[1]);
  }
}

mongoose.Schema.Types.Quantity = QuantitySchema;
