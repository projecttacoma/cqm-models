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

const RelatedPersonSchema = DataElementSchema({
  identifier: Any,
  active: Any,
  patient: Any,
  relationship: Any,
  name: Any,
  telecom: Any,
  gender: Any,
  birthDate: Any,
  address: Any,
  photo: Any,
  period: Any,
  communication: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'RelatedPerson' },

});

module.exports.RelatedPersonSchema = RelatedPersonSchema;
module.exports.RelatedPerson = mongoose.model('RelatedPerson', RelatedPersonSchema);
