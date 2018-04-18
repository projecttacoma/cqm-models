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

const ProcedurePerformedSchema = DataElementSchema({
  author_datetime: DateTime,
  relevant_period: Interval,
  reason: Code,
  method: Code,
  result: {},
  status: Code,
  anatomical_approach_site: Code,
  anatomical_location_site: Code,
  ordinality: Code,
  incision_datetime: DateTime,
  negation_rationale: Code,
  components: [],
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.67' },
  category: { type: String, default: 'procedure' },
  qdm_status: { type: String, default: 'performed' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'ProcedurePerformed' },

});

module.exports.ProcedurePerformedSchema = ProcedurePerformedSchema;
module.exports.ProcedurePerformed = mongoose.model('ProcedurePerformed', ProcedurePerformedSchema);
