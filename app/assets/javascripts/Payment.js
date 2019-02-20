const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PaymentSchema = DataElementSchema({
  type: Any,
  adjustment: Any,
  adjustmentReason: Any,
  date: Any,
  amount: Any,
  identifier: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Payment' },

});

module.exports.PaymentSchema = PaymentSchema;
module.exports.Payment = mongoose.model('Payment', PaymentSchema);
