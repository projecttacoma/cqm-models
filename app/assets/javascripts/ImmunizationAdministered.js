const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const ImmunizationAdministeredSchema = DataElementSchema({
  author_datetime: Date,
  reason: Code,
  dosage: Quantity,
  supply: Quantity,
  route: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.112' },
  qrda_oid: { type: String, default: '2.16.840.1.113883.10.20.24.3.140' },
  category: { type: String, default: 'immunization' },
  qdm_status: { type: String, default: 'administered' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'ImmunizationAdministered' },

});

module.exports.ImmunizationAdministeredSchema = ImmunizationAdministeredSchema;
module.exports.ImmunizationAdministered = mongoose.model('ImmunizationAdministered', ImmunizationAdministeredSchema);
