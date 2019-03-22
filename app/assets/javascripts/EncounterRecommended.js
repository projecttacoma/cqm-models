const mongoose = require('mongoose/browser');

const { IdSchema } = require('./Id');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const EncounterRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  facilityLocation: FacilityLocationSchema,
  negationRationale: Code,
  hqmfTitle: { type: String, default: 'Encounter, Recommended' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.28' },
  qdmCategory: { type: String, default: 'encounter' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'EncounterRecommended' },

});

module.exports.EncounterRecommendedSchema = EncounterRecommendedSchema;
class EncounterRecommended extends mongoose.Document {
  constructor(object) {
    super(object, EncounterRecommendedSchema);
  }
}
module.exports.EncounterRecommended = EncounterRecommended;
