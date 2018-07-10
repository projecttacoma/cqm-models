const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const SubstanceRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Mixed,
  dosage: Quantity,
  supply: Quantity,
  frequency: Mixed,
  method: Mixed,
  refills: Number,
  route: Mixed,
  negationRationale: Mixed,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.78' },
  category: { type: String, default: 'substance' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'SubstanceRecommended' },

});

module.exports.SubstanceRecommendedSchema = SubstanceRecommendedSchema;
module.exports.SubstanceRecommended = mongoose.model('SubstanceRecommended', SubstanceRecommendedSchema);
