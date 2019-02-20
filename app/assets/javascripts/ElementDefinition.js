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

const ElementDefinitionSchema = DataElementSchema({
  path: Any,
  representation: Any,
  sliceName: Any,
  sliceIsConstraining: Any,
  label: Any,
  code: Any,
  slicing: Any,
  short: Any,
  definition: Any,
  comment: Any,
  requirements: Any,
  alias: Any,
  min: Any,
  max: Any,
  base: Any,
  contentReference: Any,
  type: Any,
  defaultValue: Any,
  meaningWhenMissing: Any,
  orderMeaning: Any,
  fixed: Any,
  pattern: Any,
  example: Any,
  minValue: Any,
  maxValue: Any,
  maxLength: Any,
  condition: Any,
  constraint: Any,
  mustSupport: Any,
  isModifier: Any,
  isModifierReason: Any,
  isSummary: Any,
  binding: Any,
  mapping: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ElementDefinition' },

});

module.exports.ElementDefinitionSchema = ElementDefinitionSchema;
module.exports.ElementDefinition = mongoose.model('ElementDefinition', ElementDefinitionSchema);
