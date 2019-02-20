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

const ChargeItemDefinitionSchema = DataElementSchema({
  url: Any,
  identifier: Any,
  version: Any,
  title: Any,
  derivedFromUri: Any,
  partOf: Any,
  replaces: Any,
  status: Any,
  experimental: Any,
  date: Any,
  publisher: Any,
  contact: Any,
  description: Any,
  useContext: Any,
  jurisdiction: Any,
  copyright: Any,
  approvalDate: Any,
  lastReviewDate: Any,
  effectivePeriod: Any,
  code: Any,
  instance: Any,
  applicability: Any,
  propertyGroup: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ChargeItemDefinition' },

});

module.exports.ChargeItemDefinitionSchema = ChargeItemDefinitionSchema;
module.exports.ChargeItemDefinition = mongoose.model('ChargeItemDefinition', ChargeItemDefinitionSchema);
