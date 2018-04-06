const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const EncounterRecommendedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  reason: Code,
  facility_location: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.28' },
  category: { type: String, default: 'encounter' },
  qdm_status: { type: String, default: 'recommended' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'EncounterRecommended' },

});

module.exports.EncounterRecommendedSchema = EncounterRecommendedSchema;
module.exports.EncounterRecommended = mongoose.model('EncounterRecommended', EncounterRecommendedSchema);
