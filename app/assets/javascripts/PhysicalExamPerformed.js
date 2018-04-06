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

const PhysicalExamPerformedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  reason: Code,
  method: Code,
  result: {},
  anatomical_location_site: Code,
  negation_rationale: Code,
  components: [],
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.62' },
  category: { type: String, default: 'physical_exam' },
  qdm_status: { type: String, default: 'performed' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'PhysicalExamPerformed' },

});

module.exports.PhysicalExamPerformedSchema = PhysicalExamPerformedSchema;
module.exports.PhysicalExamPerformed = mongoose.model('PhysicalExamPerformed', PhysicalExamPerformedSchema);
