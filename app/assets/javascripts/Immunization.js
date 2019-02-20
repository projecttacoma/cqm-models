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

const ImmunizationSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  statusReason: Any,
  vaccineCode: Any,
  patient: Any,
  encounter: Any,
  occurrence: Any,
  recorded: Any,
  primarySource: Any,
  reportOrigin: Any,
  location: Any,
  manufacturer: Any,
  lotNumber: Any,
  expirationDate: Any,
  site: Any,
  route: Any,
  doseQuantity: Any,
  performer: Any,
  note: Any,
  reasonCode: Any,
  reasonReference: Any,
  isSubpotent: Any,
  subpotentReason: Any,
  education: Any,
  programEligibility: Any,
  fundingSource: Any,
  reaction: Any,
  protocolApplied: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Immunization' },

});

module.exports.ImmunizationSchema = ImmunizationSchema;
module.exports.Immunization = mongoose.model('Immunization', ImmunizationSchema);
