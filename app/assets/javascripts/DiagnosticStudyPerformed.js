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

const DiagnosticStudyPerformedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  reason: Code,
  result: {},
  result_datetime: Date,
  status: Code,
  method: Code,
  facility_location: Code,
  negation_rationale: Code,
  components: [],
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.23' },
  category: { type: String, default: 'diagnostic_study' },
  qdm_status: { type: String, default: 'performed' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.DiagnosticStudyPerformedSchema = DiagnosticStudyPerformedSchema;
module.exports.DiagnosticStudyPerformed = mongoose.model('DiagnosticStudyPerformed', DiagnosticStudyPerformedSchema);
