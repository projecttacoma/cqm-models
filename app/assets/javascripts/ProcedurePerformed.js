const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ProcedurePerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  reason: Code,
  method: Code,
  result: Any,
  status: Code,
  anatomicalApproachSite: Code,
  anatomicalLocationSite: Code,
  ordinality: Code,
  incisionDatetime: DateTime,
  negationRationale: Code,
  components: [ComponentSchema],
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.67' },
  category: { type: String, default: 'procedure' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'ProcedurePerformed' },

});

module.exports.ProcedurePerformedSchema = ProcedurePerformedSchema;
module.exports.ProcedurePerformed = mongoose.model('ProcedurePerformed', ProcedurePerformedSchema);
