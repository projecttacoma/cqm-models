const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const SubstanceOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  method: Code,
  refills: Number,
  route: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.77' },
  category: { type: String, default: 'substance' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'SubstanceOrder' },

});

module.exports.SubstanceOrderSchema = SubstanceOrderSchema;
module.exports.SubstanceOrder = mongoose.model('SubstanceOrder', SubstanceOrderSchema);
