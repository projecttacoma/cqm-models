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

const ProcedureOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  method: Code,
  anatomicalApproachSite: Code,
  anatomicalLocationSite: Code,
  ordinality: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.66' },
  category: { type: String, default: 'procedure' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'ProcedureOrder' },

});

module.exports.ProcedureOrderSchema = ProcedureOrderSchema;
module.exports.ProcedureOrder = mongoose.model('ProcedureOrder', ProcedureOrderSchema);
