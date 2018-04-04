const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const MedicationAdministeredSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  reason: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.45' },
  category: { type: String, default: 'medication' },
  qdm_status: { type: String, default: 'administered' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.MedicationAdministeredSchema = MedicationAdministeredSchema;
module.exports.MedicationAdministered = mongoose.model('MedicationAdministered', MedicationAdministeredSchema);
