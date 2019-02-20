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

const BodyStructureSchema = DataElementSchema({
  identifier: Any,
  active: Any,
  morphology: Any,
  location: Any,
  locationQualifier: Any,
  description: Any,
  image: Any,
  patient: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'BodyStructure' },

});

module.exports.BodyStructureSchema = BodyStructureSchema;
module.exports.BodyStructure = mongoose.model('BodyStructure', BodyStructureSchema);
