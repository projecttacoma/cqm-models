const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const EncounterSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  statusHistory: Any,
  class: Any,
  classHistory: Any,
  type: Any,
  serviceType: Any,
  priority: Any,
  subject: Any,
  episodeOfCare: Any,
  basedOn: Any,
  participant: Any,
  appointment: Any,
  period: Any,
  length: Any,
  reasonCode: Any,
  reasonReference: Any,
  diagnosis: Any,
  account: Any,
  hospitalization: Any,
  location: Any,
  serviceProvider: Any,
  partOf: Any,
  hqmfOid: { type: String, default: '2.16.840.1.113883.3.560.1.4' },
  qdmCategory: { type: String, default: 'encounter' },
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Encounter' },

});

module.exports.EncounterSchema = EncounterSchema;
module.exports.Encounter = mongoose.model('Encounter', EncounterSchema);
