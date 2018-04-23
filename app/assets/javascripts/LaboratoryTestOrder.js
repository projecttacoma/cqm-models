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

const LaboratoryTestOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  method: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.41' },
  category: { type: String, default: 'laboratory_test' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'LaboratoryTestOrder' },

});

module.exports.LaboratoryTestOrderSchema = LaboratoryTestOrderSchema;
module.exports.LaboratoryTestOrder = mongoose.model('LaboratoryTestOrder', LaboratoryTestOrderSchema);
