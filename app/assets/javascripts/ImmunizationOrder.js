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

const ImmunizationOrderSchema = DataElementSchema({
  active_datetime: DateTime,
  author_datetime: DateTime,
  dosage: Quantity,
  supply: Quantity,
  reason: Code,
  route: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.113' },
  category: { type: String, default: 'immunization' },
  qdm_status: { type: String, default: 'order' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'ImmunizationOrder' },

});

module.exports.ImmunizationOrderSchema = ImmunizationOrderSchema;
module.exports.ImmunizationOrder = mongoose.model('ImmunizationOrder', ImmunizationOrderSchema);
