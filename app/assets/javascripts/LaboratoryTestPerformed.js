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

const LaboratoryTestPerformedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  status: Code,
  method: Code,
  result: {},
  result_datetime: Date,
  reason: Code,
  reference_range: Interval,
  negation_rationale: Code,
  components: [],
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.42' },
  category: { type: String, default: 'laboratory_test' },
  qdm_status: { type: String, default: 'performed' },
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'LaboratoryTestPerformed' },

});

module.exports.LaboratoryTestPerformedSchema = LaboratoryTestPerformedSchema;
module.exports.LaboratoryTestPerformed = mongoose.model('LaboratoryTestPerformed', LaboratoryTestPerformedSchema);
