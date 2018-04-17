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

const EncounterOrderSchema = DataElementSchema({
  author_datetime: DateTime,
  reason: Code,
  facility_location: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.27' },
  category: { type: String, default: 'encounter' },
  qdm_status: { type: String, default: 'order' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'EncounterOrder' },

});

module.exports.EncounterOrderSchema = EncounterOrderSchema;
module.exports.EncounterOrder = mongoose.model('EncounterOrder', EncounterOrderSchema);
