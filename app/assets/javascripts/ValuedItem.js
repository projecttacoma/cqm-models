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

const ValuedItemSchema = DataElementSchema({
  entity: Any,
  identifier: Any,
  effectiveTime: Any,
  quantity: Any,
  unitPrice: Any,
  factor: Any,
  points: Any,
  net: Any,
  payment: Any,
  paymentDate: Any,
  responsible: Any,
  recipient: Any,
  linkId: Any,
  securityLabelNumber: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ValuedItem' },

});

module.exports.ValuedItemSchema = ValuedItemSchema;
module.exports.ValuedItem = mongoose.model('ValuedItem', ValuedItemSchema);
