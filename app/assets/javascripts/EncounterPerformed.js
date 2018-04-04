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

const EncounterPerformedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  admission_source: Code,
  relevant_period: Interval,
  discharge_disposition: Code,
  facility_locations: [],
  diagnoses: [Code],
  principal_diagnosis: Code,
  negation_rationale: Code,
  length_of_stay: Quantity,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.5' },
  category: { type: String, default: 'encounter' },
  qdm_status: { type: String, default: 'performed' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.EncounterPerformedSchema = EncounterPerformedSchema;
module.exports.EncounterPerformed = mongoose.model('EncounterPerformed', EncounterPerformedSchema);
