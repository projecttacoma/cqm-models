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

const ClaimResponseSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  type: Any,
  subType: Any,
  use: Any,
  patient: Any,
  created: Any,
  insurer: Any,
  requestor: Any,
  request: Any,
  outcome: Any,
  disposition: Any,
  preAuthRef: Any,
  preAuthPeriod: Any,
  payeeType: Any,
  item: Any,
  addItem: Any,
  adjudication: Any,
  total: Any,
  payment: Any,
  fundsReserve: Any,
  formCode: Any,
  form: Any,
  processNote: Any,
  communicationRequest: Any,
  insurance: Any,
  error: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ClaimResponse' },

});

module.exports.ClaimResponseSchema = ClaimResponseSchema;
module.exports.ClaimResponse = mongoose.model('ClaimResponse', ClaimResponseSchema);
