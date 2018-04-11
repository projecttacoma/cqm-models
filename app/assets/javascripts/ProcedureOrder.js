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

const ProcedureOrderSchema = DataElementSchema({
  author_datetime: Date,
  reason: Code,
  method: Code,
  anatomical_approach_site: Code,
  anatomical_location_site: Code,
  ordinality: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.66' },
  category: { type: String, default: 'procedure' },
  qdm_status: { type: String, default: 'order' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'ProcedureOrder' },

});

module.exports.ProcedureOrderSchema = ProcedureOrderSchema;
module.exports.ProcedureOrder = mongoose.model('ProcedureOrder', ProcedureOrderSchema);
