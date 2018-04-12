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

const SubstanceAdministeredSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.73' },
  category: { type: String, default: 'substance' },
  qdmStatus: { type: String, default: 'administered' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'SubstanceAdministered' },

});

module.exports.SubstanceAdministeredSchema = SubstanceAdministeredSchema;
module.exports.SubstanceAdministered = mongoose.model('SubstanceAdministered', SubstanceAdministeredSchema);
