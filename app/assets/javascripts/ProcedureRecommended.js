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

const ProcedureRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  anatomicalLocationSite: Code,
  ordinality: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.68' },
  qdmCategory: { type: String, default: 'procedure' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'ProcedureRecommended' },

});

module.exports.ProcedureRecommendedSchema = ProcedureRecommendedSchema;
module.exports.ProcedureRecommended = mongoose.model('ProcedureRecommended', ProcedureRecommendedSchema);
