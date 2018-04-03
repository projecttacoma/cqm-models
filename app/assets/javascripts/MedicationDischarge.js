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

const MedicationDischargeSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  refills: Number,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.48' },
  category: { type: String, default: 'medication' },
  qdm_status: { type: String, default: 'discharge' },
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'MedicationDischarge' },

});

module.exports.MedicationDischargeSchema = MedicationDischargeSchema;
module.exports.MedicationDischarge = mongoose.model('MedicationDischarge', MedicationDischargeSchema);
