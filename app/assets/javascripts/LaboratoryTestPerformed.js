const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const LaboratoryTestPerformedSchema = DataElementSchema({
  author_datetime: DateTime,
  relevant_period: Interval,
  status: Code,
  method: Code,
  result: {},
  result_datetime: DateTime,
  reason: Code,
  reference_range: Interval,
  negation_rationale: Code,
  components: [],
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.42' },
  category: { type: String, default: 'laboratory_test' },
  qdm_status: { type: String, default: 'performed' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'LaboratoryTestPerformed' },

});

module.exports.LaboratoryTestPerformedSchema = LaboratoryTestPerformedSchema;
module.exports.LaboratoryTestPerformed = mongoose.model('LaboratoryTestPerformed', LaboratoryTestPerformedSchema);
