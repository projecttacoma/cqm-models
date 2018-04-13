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

const DiagnosticStudyOrderSchema = DataElementSchema({
  author_datetime: Date,
  reason: Code,
  method: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.22' },
  category: { type: String, default: 'diagnostic_study' },
  qdm_status: { type: String, default: 'order' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'DiagnosticStudyOrder' },

});

module.exports.DiagnosticStudyOrderSchema = DiagnosticStudyOrderSchema;
module.exports.DiagnosticStudyOrder = mongoose.model('DiagnosticStudyOrder', DiagnosticStudyOrderSchema);
