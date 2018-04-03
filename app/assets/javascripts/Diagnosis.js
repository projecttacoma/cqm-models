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

const DiagnosisSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  prevalence_period: Interval,
  anatomical_location_site: Code,
  severity: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.110' },
  qrda_oid: { type: String, default: '2.16.840.1.113883.10.20.24.3.135' },
  category: { type: String, default: 'condition' },
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'Diagnosis' },

});

module.exports.DiagnosisSchema = DiagnosisSchema;
module.exports.Diagnosis = mongoose.model('Diagnosis', DiagnosisSchema);
