const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Integer, Array, String, Float, Time] = [
  mongoose.Schema.Types.Integer,
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Float,
  mongoose.Schema.Types.Time,
];

const ImmunizationAdministeredSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
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

});

module.exports.ImmunizationAdministeredSchema = ImmunizationAdministeredSchema;
module.exports.ImmunizationAdministered = mongoose.model('ImmunizationAdministered', ImmunizationAdministeredSchema);
