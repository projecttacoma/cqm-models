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

const SymptomSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  prevalence_period: Interval,
  severity: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.116' },
  qrda_oid: { type: String, default: '2.16.840.1.113883.10.20.24.3.136' },
  category: { type: String, default: 'symptom' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.SymptomSchema = SymptomSchema;
module.exports.Symptom = mongoose.model('Symptom', SymptomSchema);
