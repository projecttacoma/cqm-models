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

const ChargeItemSchema = DataElementSchema({
  identifier: Any,
  definitionUri: Any,
  definitionCanonical: Any,
  status: Any,
  partOf: Any,
  code: Any,
  subject: Any,
  context: Any,
  occurrence: Any,
  performer: Any,
  performingOrganization: Any,
  requestingOrganization: Any,
  costCenter: Any,
  quantity: Any,
  bodysite: Any,
  factorOverride: Any,
  priceOverride: Any,
  overrideReason: Any,
  enterer: Any,
  enteredDate: Any,
  reason: Any,
  service: Any,
  product: Any,
  account: Any,
  note: Any,
  supportingInformation: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ChargeItem' },

});

module.exports.ChargeItemSchema = ChargeItemSchema;
module.exports.ChargeItem = mongoose.model('ChargeItem', ChargeItemSchema);
