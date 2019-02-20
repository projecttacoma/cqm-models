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

const ClaimSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  type: Any,
  subType: Any,
  use: Any,
  patient: Any,
  billablePeriod: Any,
  created: Any,
  enterer: Any,
  insurer: Any,
  provider: Any,
  priority: Any,
  fundsReserve: Any,
  related: Any,
  prescription: Any,
  originalPrescription: Any,
  payee: Any,
  referral: Any,
  facility: Any,
  careTeam: Any,
  supportingInfo: Any,
  diagnosis: Any,
  procedure: Any,
  insurance: Any,
  accident: Any,
  item: Any,
  total: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Claim' },

});

module.exports.ClaimSchema = ClaimSchema;
module.exports.Claim = mongoose.model('Claim', ClaimSchema);
